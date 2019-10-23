import sys
import os
import pdfrw


filename = sys.argv[1]
checkbox_name = sys.argv[2]


ANNOT_KEY = '/Annots'
ANNOT_FIELD_KEY = '/T'
ANNOT_VAL_KEY = '/V'
ANNOT_RECT_KEY = '/Rect'
SUBTYPE_KEY = '/Subtype'
WIDGET_SUBTYPE_KEY = '/Widget'


template_pdf = pdfrw.PdfReader(filename)
annotations = template_pdf.pages[0][ANNOT_KEY]
for annotation in annotations:
    if annotation[SUBTYPE_KEY] == WIDGET_SUBTYPE_KEY:
        if annotation[ANNOT_FIELD_KEY]:
            key = annotation[ANNOT_FIELD_KEY][1:-1]
            if key == checkbox_name:
                if annotation[ANNOT_VAL_KEY] == '/Off':
                    print('false')
                elif annotation[ANNOT_VAL_KEY] == '/Yes':
                    print('true')
                else:
                    print(annotation[ANNOT_VAL_KEY])
