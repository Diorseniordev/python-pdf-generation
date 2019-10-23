import os
import format_date
from shutil import copyfile
import reportlab.pdfgen.canvas
from reportlab.lib.units import inch
from reportlab.pdfbase.pdfmetrics import registerFont
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import black, green, white, red, whitesmoke, lightgrey

from pdfrw.objects.pdfdict import PdfDict
from pdfrw.objects.pdfname import PdfName
from pdfrw import PdfReader, PdfWriter
from pdfrw.objects.pdfstring import PdfString
from pdfrw.objects.pdfdict import PdfDict
from pdfrw.objects.pdfarray import PdfArray

#registerFont(TTFont('OpenSans-Light', 'C:/Users/Marc/Desktop/JPM2/FONTS/OpenSans-Light.ttf'))
#registerFont(TTFont('OpenSans-Semibold', 'C:/Users/Marc/Desktop/JPM2/FONTS/OpenSans-Semibold.ttf'))
registerFont(TTFont('OpenSans-Light', 'OpenSans-Light.ttf'))
registerFont(TTFont('OpenSans-Semibold', 'OpenSans-Semibold.ttf'))


def printstatus(order_data, product_data):
    pdf_filename = "Order #" + order_data[0] + "_status" + ".pdf"
    p = reportlab.pdfgen.canvas.Canvas(pdf_filename, pagesize=(8.5 * inch, 11 * inch))  # We create the canvas
    p.setFillColorCMYK(0, 0, 0, 0)  # We set the color we want to use next (white for the background)
    p.rect(0, 0, 8.5 * inch, 11 * inch, stroke=0, fill=1)  # We create a white rectangle for the background
    p.setFillColorCMYK(0, 0, 0, 100)  # We set the color we want to use next (black for the text)
    p.setLineWidth(0.6)

    light = 'OpenSans-Light'
    bold = 'OpenSans-Semibold'
    p.setFont(bold, 14)
    p.drawString(19, 759, "ORDER STATUS MANAGER", 0, 0.6)

    p.setFont(light, 9)
    p.drawRightString(593, 762.5, order_data[0], 0, 0)
    p.setFont(bold, 9)
    p.drawRightString(593 - p.stringWidth(order_data[0], light, 9), 762.5, "ORDER #: ", 0, 0)

    p.setFont(light, 9)
    p.drawRightString(593, 752, format_date.format(order_data[1]), 0, 0)
    p.setFont(bold, 9)
    p.drawRightString(593 - p.stringWidth(format_date.format(order_data[1]), light, 9), 752, "ORDER DATE: ", 0, 0)

    # Function to generate checkboxes (make less code lines)
    def checkbox(boxname, tooltip, xpos, ypos):
        p.acroForm.checkbox(name=boxname, tooltip=tooltip, checked=False, x=xpos, y=ypos,
                            buttonStyle='check', borderStyle='solid', size=13, borderWidth=0.7, borderColor=black,
                            fillColor=white, textColor=green, forceBorder=True)

    # Function to generate textfield (make less code lines)
    def textfield(fieldname, xpos, ypos, fillcolor):
        #p.acroForm.textfield(name=fieldname, tooltip=tooltip, x=xpos, y=ypos,size=8)
        p.acroForm.textfield(x=xpos, y=ypos, name=fieldname, borderStyle='solid', borderWidth=0, textColor=red, fillColor=fillcolor, fontSize=5.9, height=7.8, width=60)

    #We draw the edit checkbox
    checkbox("edit", "Check to edit", 37.7, 738)
    p.drawCentredString(44.2, 730, "edit")

    # We draw the checkbox bar on top
    p.setLineWidth(0.7)
    p.line(37.7, 719.1, 570.7, 719.1)
    p.setFont(light, 9)
    checkbox("Card", "Check if the card is printed", 37.7, 712.6)

    #textfield
    textfield('tf_Card', 44.2-25, 700-10, white)
    #
    p.drawCentredString(44.2, 700, "Card Printed")
    checkbox("Packaging", "Check if the packaging has been prepared", 211.2, 712.6)

    #textfield
    textfield('tf_Packaging', 217.7-25, 700-10, white)
    #
    p.drawCentredString(217.7, 700, "Packaging Prepared")
    checkbox("Label", "Check if the shipping label has been printed", 402.7, 712.6)

    #textfield
    textfield('tf_Label', 409.5-25, 700-10, white)
    #
    p.drawCentredString(409.5, 700, "Shipping Label Printed")
    checkbox("Shipped", "Check if the order has been shipped", 570.7, 712.6)

    #textfield
    textfield('tf_Shipped', 577.2-25, 700-10, white)
    #
    p.drawCentredString(577.2, 700, "Shipped")
    
    for m in range(0, len(product_data)):  # For all the SKUS

        # We draw the 2 grey rectangles and main lines
        p.setLineWidth(0.4)
        p.setFillColor(lightgrey)
        p.rect(113, 580 - (105 * m), 479, 45, stroke=0, fill=1)
        p.setFillColor(whitesmoke)
        p.rect(113, 625 - (105 * m), 479, 31, stroke=1, fill=1)
        p.setStrokeColorCMYK(0, 0, 0, 100)

        # We draw the checkbox bar on the product box
        p.setFillColorCMYK(0, 0, 0, 100)
        p.setLineWidth(0.7)
        p.line(140.6, 609.6 - (105 * m), 564.3, 609.6 - (105 * m))
        p.setFont(light, 9)
        checkbox("In Collection" + str(m), "Check if the elements of the product are currently being collected", 140.6,
                 603.1 - (105 * m))
        below = 21
        #textfield
        textfield('tf_Collection'+str(m), 140.6-20, 603.1 - (105 * m)-23, lightgrey)
        
        p.drawCentredString(147.1, 590.6 - (105 * m), "In Collection")
        checkbox("In Production" + str(m), "Check if the product is currently being produced", 346.6, 603.1 - (105 * m))

        #textfield
        textfield('tf_Production'+str(m), 346.6-20, 603.1 - (105 * m)-23, lightgrey)
        
        p.drawCentredString(353.1, 590.6 - (105 * m), "In Production")
        checkbox("In Packaging" + str(m), "Check if the product is currently at the packaging stage", 551.3,
                 603.1 - (105 * m))
        #textfield
        textfield('tf_Packaging'+str(m), 551.3-20, 603.1 - (105 * m)-23, lightgrey)
        
        p.drawCentredString(557.8, 590.6 - (105 * m), "In Packaging")

        # We draw the product image with the SKU name
        imagefile_name = product_data[m][0][0].split('-')[0] + ''.join(
            [i for i in product_data[m][0][0].split('-')[1] if not i.isdigit()])
        p.drawImage('G:/Project/python_javascript/python/' + imagefile_name + '.jpg', 20, 579.8 - (105 * m), 93, 93)

        # We draw the box lines
        p.setLineWidth(0.4)
        p.rect(20, 579.8 - (105 * m), 572, 93, stroke=1, fill=0)
        p.line(113, 579.8 - (105 * m), 113, 673 - (105 * m))

        # We draw everything inside product_data
        opt_ref = 642.7  # height reference of option
        info_ref = 630.7  # height reference of info
        for n in range(0, len(product_data[m])):
            opt_width = p.stringWidth(product_data[m][n][0] + ": ", bold, )  # This line and the next one calculated the width of the option word and info word
            info_width = p.stringWidth(product_data[m][n][1], light, 9)
            max_width = max(opt_width, info_width)  # We take the larger value between the 2 widths
            if n == 0:  # For the SKU and product name
                x_pos = 120
                p.setFont(light, 9)
                p.drawString(x_pos, 660.5 - (105 * m), product_data[m][0][0] + "  /  " + product_data[m][0][1])
            elif n == 1:  # For the 1st option (position is always fixed)
                x_pos = 120
                p.setFont(bold, 9)
                p.drawString(x_pos, opt_ref - (105 * m), product_data[m][n][0] + ": ")
                p.setFont(light, 9)
                p.drawString(x_pos, info_ref - (105 * m), product_data[m][n][1])
                line_pos = 120 + max_width + 7
                p.setLineWidth(0.4)
                p.line(line_pos, 625 - (105 * m), line_pos, 656 - (105 * m))
            else:  # For all the other options
                x_pos = line_pos + 7
                p.setFont(bold, 9)
                p.drawString(x_pos, opt_ref - (105 * m), product_data[m][n][0] + ": ")
                p.setFont(light, 9)
                p.drawString(x_pos, info_ref - (105 * m), product_data[m][n][1])
                line_pos = line_pos + max_width + 14
                p.setLineWidth(0.4)
                p.line(line_pos, 625 - (105 * m), line_pos, 656 - (105 * m))

    # We add a textfield at the end for the notes
    p.setFont(bold, 9)
    p.drawString(20, 558 - (105 * m), "Notes: ")
    p.acroForm.textfield(x=55, y=553 - (105 * m), name="notes", borderStyle='solid', borderWidth=0, textColor=red,
                         fillColor=whitesmoke, fontSize=7, height=15, width=538)

    p.showPage()
    p.save()

    #function that add javascript to active
    def make_js_action(js):
        action = PdfDict()
        action.S = PdfName.JavaScript
        action.JS = js
        return action

    #function that add javascript to pdf
    def append_js_to_pdf(file_name,js_name):
        pdf_writer = PdfWriter()
        pdf_reader = PdfReader(file_name)
        try:
            js = open(js_name).read()       
        except:
            js = "app.alert('You must input JS!');"
        for page_index in pdf_reader.pages:
            page = page_index
            page.Type = PdfName.Page
            for field in page.Annots:
                field.update(PdfDict(AA=PdfDict(E=make_js_action(js))))
            # page.AA = PdfDict()
            # page.AA.O = make_js_action(js)
            pdf_writer.addpage(page)
        pdf_writer.write(file_name)

    append_js_to_pdf(pdf_filename, 'script.js')
    copyfile(pdf_filename, 'status PDF' + '/' + pdf_filename)
    os.remove(pdf_filename)  # removes file


#1 Item
#order_data = ['1006', '9/24/2019 15:56', 1, 'unfulfilled']
#product_data = [[['SN001-10Y-16C', 'Personalized Name Necklace - Brush Font'], ['Metal', '10K Yellow Gold'], ['Chain', '16"'], ['Name', 'J']]]

#2 Items
#order_data = ['1007', '9/24/2019 16:07', 2, 'fulfilled 10/4/2019 16:53']
#product_data = [[['SN002-10W-18C', 'Personalized Name Necklace - Allure Font'], ['Metal', '10K White Gold'], ['Chain', '18"'], ['Name', 'D']], [['SN004-925S-14C', 'Personalized Name Necklace - Script Font'], ['Metal', 'Sterling Silver'], ['Chain', '14"'], ['Name', 'RS']]]

#3 Items
#order_data = ['1008', '9/24/2019 16:11', 4, 'unfulfilled']
#product_data = [[['SN002-10Y-14C', 'Personalized Name Necklace - Allure Font'], ['Metal', '10K Yellow Gold'], ['Chain', '14"'], ['Name', 'B']], [['SN001-925S-16C', 'Personalized Name Necklace - Brush Font'], ['Metal', 'Sterling Silver'], ['Chain', '16"'], ['Name', 'X']], [['SN003-10R-18C', 'Personalized Name Necklace - Elegant Font'], ['Metal', '10K Rose Gold'], ['Chain', '18"'], ['Name', 'K']]]

#4Items
order_data = ['1009', '9/24/2019 16:18', 4, 'unfulfilled']
product_data = [[['SN003-925S-18C', 'Personalized Name Necklace - Elegant Font'], ['Metal', 'Sterling Silver'], ['Chain', '18"'], ['Name', 'D']], [['SN004-925S-18C', 'Personalized Name Necklace - Script Font'], ['Metal', 'Sterling Silver'], ['Chain', '18"'], ['Name', 'DD']], [['SN004-10R-14C', 'Personalized Name Necklace - Script Font'], ['Metal', '10K Rose Gold'], ['Chain', '14"'], ['Name', 'DA']], [['SN001-10R-16C', 'Personalized Name Necklace - Brush Font'], ['Metal', '10K Rose Gold'], ['Chain', '16"'], ['Name', 'I']], [['SN003-925S-18C', 'Personalized Name Necklace - Elegant Font'], ['Metal', 'Sterling Silver'], ['Chain', '18"'], ['Name', 'D']], [['SN004-925S-18C', 'Personalized Name Necklace - Script Font'], ['Metal', 'Sterling Silver'], ['Chain', '18"'], ['Name', 'DD']]]


printstatus(order_data, product_data)

