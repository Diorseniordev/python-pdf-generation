/*
	Author Fang G
	Date 2019/10/5
	
	
	*/

var Edit=this.getField('edit');
Edit.setAction('MouseUp','func_Edit()');
function func_Edit(){
	if (Edit.value=="Yes"){
		Packaging.readonly=false;
		Card.readonly=false;
		Label.readonly=false;
		Shipped.readonly=false;
		Collection0.readonly=false;
		Production0.readonly=false;
		Packaging0.readonly=false;
		Collection1.readonly=false;		
		Production1.readonly=false;
		Packaging1.readonly=false;
		
		Collection2.readonly=false;		
		Production2.readonly=false;
		Packaging2.readonly=false;
		
		Collection3.readonly=false;		
		Production3.readonly=false;
		Packaging3.readonly=false;

		Collection4.readonly=false;		
		Production4.readonly=false;
		Packaging4.readonly=false;

		Collection5.readonly=false;		
		Production5.readonly=false;
		Packaging5.readonly=false;

		Collection6.readonly=false;		
		Production6.readonly=false;
		Packaging6.readonly=false;

		Collection7.readonly=false;		
		Production7.readonly=false;
		Packaging7.readonly=false;

		Collection8.readonly=false;		
		Production8.readonly=false;
		Packaging8.readonly=false;

		Collection9.readonly=false;		
		Production9.readonly=false;
		Packaging9.readonly=false;


		
	}
	else if (Edit.value=="Off"){
		if (Card.value=="Yes") Card.readonly=true;
		if (Packaging.value=="Yes") Packaging.readonly=true;
		if (Label.value=="Yes") Label.readonly=true;
		if (Shipped.value=="Yes") Shipped.readonly=true;
		if (Collection0.value=="Yes") Collection0.readonly=true;
		if (Production0.value=="Yes") Production0.readonly=true;
		if (Packaging0.value=="Yes") Packaging0.readonly=true;
		
		if (Collection1.value=="Yes") Collection1.readonly=true;		
		if (Production1.value=="Yes") Production1.readonly=true;
		if (Packaging1.value=="Yes") Packaging1.readonly=true;
		
		if (Collection2.value=="Yes") Collection2.readonly=true;		
		if (Production2.value=="Yes") Production2.readonly=true;
		if (Packaging2.value=="Yes") Packaging2.readonly=true;
		
		if (Collection3.value=="Yes") Collection3.readonly=true;		
		if (Production3.value=="Yes") Production3.readonly=true;
		if (Packaging3.value=="Yes") Packaging3.readonly=true;

		if (Collection4.value=="Yes") Collection4.readonly=true;		
		if (Production4.value=="Yes") Production4.readonly=true;
		if (Packaging4.value=="Yes") Packaging4.readonly=true;

		if (Collection5.value=="Yes") Collection5.readonly=true;		
		if (Production5.value=="Yes") Production5.readonly=true;
		if (Packaging5.value=="Yes") Packaging5.readonly=true;

		if (Collection6.value=="Yes") Collection6.readonly=true;		
		if (Production6.value=="Yes") Production6.readonly=true;
		if (Packaging6.value=="Yes") Packaging6.readonly=true;

		if (Collection7.value=="Yes") Collection7.readonly=true;		
		if (Production7.value=="Yes") Production7.readonly=true;
		if (Packaging7.value=="Yes") Packaging7.readonly=true;

		if (Collection8.value=="Yes") Collection8.readonly=true;		
		if (Production8.value=="Yes") Production8.readonly=true;
		if (Packaging8.value=="Yes") Packaging8.readonly=true;

		if (Collection9.value=="Yes") Collection9.readonly=true;		
		if (Production9.value=="Yes") Production9.readonly=true;
		if (Packaging9.value=="Yes") Packaging9.readonly=true;
		
	}
}


var Card=this.getField('Card');
Card.setAction('MouseUp','func_Card()');
function func_Card(){
	if (Card.value=="Yes"){
		this.getField('tf_Card').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Card.readonly=true;
			this.getField('tf_Card').readonly = true;
		}
	}
	else if (Card.value=="Off"){
		this.getField('tf_Card').value='';
	}
}

var Packaging=this.getField('Packaging');
Packaging.setAction('MouseUp','func_Packaging()');
function func_Packaging(){
	if (Packaging.value=="Yes"){
		this.getField('tf_Packaging').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Packaging.readonly=true;
			this.getField('tf_Packaging').readonly = true;
		}
	}
	else if (Packaging.value=="Off"){
		this.getField('tf_Packaging').value='';
	}
}

var Label=this.getField('Label');
Label.setAction('MouseUp','func_Label()');
function func_Label(){
	if (Label.value=="Yes"){
		//this.getField('tf_Label').value=util.printd("%b %d, %Y h:MM tt",new Date());
		this.getField('tf_Label').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Label.readonly=true;
			this.getField('tf_Label').readonly = true;
		}
	}
	else if (Label.value=="Off"){
		this.getField('tf_Label').value='';
	}
}

var Shipped=this.getField('Shipped');
Shipped.setAction('MouseUp','func_Shipped()');
function func_Shipped(){
	if (Shipped.value=="Yes"){
		this.getField('tf_Shipped').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Shipped.readonly=true;
			this.getField('tf_Shipped').readonly = true;
		}
	}
	else if (Shipped.value=="Off"){
		this.getField('tf_Shipped').value='';
	}
}

var Collection0=this.getField('In Collection0');
Collection0.setAction('MouseUp','func_Collection0()');
function func_Collection0(){
	if (Collection0.value=="Yes"){
		this.getField('tf_Collection0').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Collection0.readonly=true;
			this.getField('tf_Collection0').readonly = true;
		}
	}
	else if (Collection0.value=="Off"){
		this.getField('tf_Collection0').value='';
	}
}

var Production0=this.getField('In Production0');
Production0.setAction('MouseUp','func_Production0()');
function func_Production0(){
	if (Production0.value=="Yes"){
		this.getField('tf_Production0').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Production0.readonly=true;
			this.getField('tf_Production0').readonly = true;
		}
	}
	else if (Production0.value=="Off"){
		this.getField('tf_Production0').value='';
	}
}

var Packaging0=this.getField('In Packaging0');
Packaging0.setAction('MouseUp','func_Packaging0()');
function func_Packaging0(){
	if (Packaging0.value=="Yes"){
		this.getField('tf_Packaging0').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Packaging0.readonly=true;
			this.getField('tf_Packaging0').readonly = true;
		}
	}
	else if (Packaging0.value=="Off"){
		this.getField('tf_Packaging0').value='';
	}
}

var Collection1=this.getField('In Collection1');
Collection1.setAction('MouseUp','func_Collection1()');
function func_Collection1(){
	if (Collection1.value=="Yes"){
		this.getField('tf_Collection1').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Collection1.readonly=true;
			this.getField('tf_Collection1').readonly = true;
		}
	}
	else if (Collection1.value=="Off"){
		this.getField('tf_Collection1').value='';
	}
}



var Production1=this.getField('In Production1');
Production1.setAction('MouseUp','func_Production1()');
function func_Production1(){
	if (Production1.value=="Yes"){
		this.getField('tf_Production1').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Production1.readonly=true;
			this.getField('tf_Production1').readonly = true;
		}
	}
	else if (Production1.value=="Off"){
		this.getField('tf_Production1').value='';
	}
}



var Packaging1=this.getField('In Packaging1');
Packaging1.setAction('MouseUp','func_Packaging1()');
function func_Packaging1(){
	if (Packaging1.value=="Yes"){
		this.getField('tf_Packaging1').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Packaging1.readonly=true;
			this.getField('tf_Packaging1').readonly = true;
		}
	}
	else if (Packaging1.value=="Off"){
		this.getField('tf_Packaging1').value='';
	}
}

var Collection2=this.getField('In Collection2');
Collection2.setAction('MouseUp','func_Collection2()');
function func_Collection2(){
	if (Collection2.value=="Yes"){
		this.getField('tf_Collection2').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Collection2.readonly=true;
			this.getField('tf_Collection2').readonly = true;
		}
	}
	else if (Collection2.value=="Off"){
		this.getField('tf_Collection2').value='';
	}
}



var Production2=this.getField('In Production2');
Production2.setAction('MouseUp','func_Production2()');
function func_Production2(){
	if (Production2.value=="Yes"){
		this.getField('tf_Production2').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Production2.readonly=true;
			this.getField('tf_Production2').readonly = true;
		}
	}
	else if (Production2.value=="Off"){
		this.getField('tf_Production2').value='';
	}
}



var Packaging2=this.getField('In Packaging2');
Packaging2.setAction('MouseUp','func_Packaging2()');
function func_Packaging2(){
	if (Packaging2.value=="Yes"){
		this.getField('tf_Packaging2').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Packaging2.readonly=true;
			this.getField('tf_Packaging2').readonly = true;
		}
	}
	else if (Packaging2.value=="Off"){
		this.getField('tf_Packaging2').value='';
	}
}

var Collection3=this.getField('In Collection3');
Collection3.setAction('MouseUp','func_Collection3()');
function func_Collection3(){
	if (Collection3.value=="Yes"){
		this.getField('tf_Collection3').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Collection3.readonly=true;
			this.getField('tf_Collection3').readonly = true;
		}
	}
	else if (Collection3.value=="Off"){
		this.getField('tf_Collection3').value='';
	}
}



var Production3=this.getField('In Production3');
Production3.setAction('MouseUp','func_Production3()');
function func_Production3(){
	if (Production3.value=="Yes"){
		this.getField('tf_Production3').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Production3.readonly=true;
			this.getField('tf_Production3').readonly = true;
		}
	}
	else if (Production3.value=="Off"){
		this.getField('tf_Production3').value='';
	}
}



var Packaging3=this.getField('In Packaging3');
Packaging3.setAction('MouseUp','func_Packaging3()');
function func_Packaging3(){
	if (Packaging3.value=="Yes"){
		this.getField('tf_Packaging3').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Packaging3.readonly=true;
			this.getField('tf_Packaging3').readonly = true;
		}
	}
	else if (Packaging3.value=="Off"){
		this.getField('tf_Packaging3').value='';
	}
}


var Collection4=this.getField('In Collection4');
Collection4.setAction('MouseUp','func_Collection4()');
function func_Collection4(){
	if (Collection4.value=="Yes"){
		this.getField('tf_Collection4').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Collection4.readonly=true;
			this.getField('tf_Collection4').readonly = true;
		}
	}
	else if (Collection4.value=="Off"){
		this.getField('tf_Collection4').value='';
	}
}



var Production4=this.getField('In Production4');
Production4.setAction('MouseUp','func_Production4()');
function func_Production4(){
	if (Production4.value=="Yes"){
		this.getField('tf_Production4').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Production4.readonly=true;
			this.getField('tf_Production4').readonly = true;
		}
	}
	else if (Production4.value=="Off"){
		this.getField('tf_Production4').value='';
	}
}



var Packaging4=this.getField('In Packaging4');
Packaging4.setAction('MouseUp','func_Packaging4()');
function func_Packaging4(){
	if (Packaging4.value=="Yes"){
		this.getField('tf_Packaging4').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Packaging4.readonly=true;
			this.getField('tf_Packaging4').readonly = true;
		}
	}
	else if (Packaging4.value=="Off"){
		this.getField('tf_Packaging4').value='';
	}
}


var Collection5=this.getField('In Collection5');
Collection5.setAction('MouseUp','func_Collection5()');
function func_Collection5(){
	if (Collection5.value=="Yes"){
		this.getField('tf_Collection5').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Collection5.readonly=true;
			this.getField('tf_Collection5').readonly = true;
		}
	}
	else if (Collection5.value=="Off"){
		this.getField('tf_Collection5').value='';
	}
}



var Production5=this.getField('In Production5');
Production5.setAction('MouseUp','func_Production5()');
function func_Production5(){
	if (Production5.value=="Yes"){
		this.getField('tf_Production5').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Production5.readonly=true;
			this.getField('tf_Production5').readonly = true;
		}
	}
	else if (Production5.value=="Off"){
		this.getField('tf_Production5').value='';
	}
}



var Packaging5=this.getField('In Packaging5');
Packaging5.setAction('MouseUp','func_Packaging5()');
function func_Packaging5(){
	if (Packaging5.value=="Yes"){
		this.getField('tf_Packaging5').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Packaging5.readonly=true;
			this.getField('tf_Packaging5').readonly = true;
		}
	}
	else if (Packaging5.value=="Off"){
		this.getField('tf_Packaging5').value='';
	}
}


var Collection6=this.getField('In Collection6');
Collection6.setAction('MouseUp','func_Collection6()');
function func_Collection6(){
	if (Collection6.value=="Yes"){
		this.getField('tf_Collection6').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Collection6.readonly=true;
			this.getField('tf_Collection6').readonly = true;
		}
	}
	else if (Collection6.value=="Off"){
		this.getField('tf_Collection6').value='';
	}
}



var Production6=this.getField('In Production6');
Production6.setAction('MouseUp','func_Production6()');
function func_Production6(){
	if (Production6.value=="Yes"){
		this.getField('tf_Production6').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Production6.readonly=true;
			this.getField('tf_Production6').readonly = true;
		}
	}
	else if (Production6.value=="Off"){
		this.getField('tf_Production6').value='';
	}
}



var Packaging6=this.getField('In Packaging6');
Packaging6.setAction('MouseUp','func_Packaging6()');
function func_Packaging6(){
	if (Packaging6.value=="Yes"){
		this.getField('tf_Packaging6').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Packaging6.readonly=true;
			this.getField('tf_Packaging6').readonly = true;
		}
	}
	else if (Packaging6.value=="Off"){
		this.getField('tf_Packaging6').value='';
	}
}


var Collection7=this.getField('In Collection7');
Collection7.setAction('MouseUp','func_Collection7()');
function func_Collection7(){
	if (Collection7.value=="Yes"){
		this.getField('tf_Collection7').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Collection7.readonly=true;
			this.getField('tf_Collection7').readonly = true;
		}
	}
	else if (Collection7.value=="Off"){
		this.getField('tf_Collection7').value='';
	}
}



var Production7=this.getField('In Production7');
Production7.setAction('MouseUp','func_Production7()');
function func_Production7(){
	if (Production7.value=="Yes"){
		this.getField('tf_Production7').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Production7.readonly=true;
			this.getField('tf_Production7').readonly = true;
		}
	}
	else if (Production7.value=="Off"){
		this.getField('tf_Production7').value='';
	}
}



var Packaging7=this.getField('In Packaging7');
Packaging7.setAction('MouseUp','func_Packaging7()');
function func_Packaging7(){
	if (Packaging7.value=="Yes"){
		this.getField('tf_Packaging7').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Packaging7.readonly=true;
			this.getField('tf_Packaging7').readonly = true;
		}
	}
	else if (Packaging7.value=="Off"){
		this.getField('tf_Packaging7').value='';
	}
}


var Collection8=this.getField('In Collection8');
Collection8.setAction('MouseUp','func_Collection8()');
function func_Collection8(){
	if (Collection8.value=="Yes"){
		this.getField('tf_Collection8').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Collection8.readonly=true;
			this.getField('tf_Collection8').readonly = true;
		}
	}
	else if (Collection8.value=="Off"){
		this.getField('tf_Collection8').value='';
	}
}



var Production8=this.getField('In Production8');
Production8.setAction('MouseUp','func_Production8()');
function func_Production8(){
	if (Production8.value=="Yes"){
		this.getField('tf_Production8').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Production8.readonly=true;
			this.getField('tf_Production8').readonly = true;
		}
	}
	else if (Production8.value=="Off"){
		this.getField('tf_Production8').value='';
	}
}



var Packaging8=this.getField('In Packaging8');
Packaging8.setAction('MouseUp','func_Packaging8()');
function func_Packaging8(){
	if (Packaging8.value=="Yes"){
		this.getField('tf_Packaging8').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Packaging8.readonly=true;
			this.getField('tf_Packaging8').readonly = true;
		}
	}
	else if (Packaging8.value=="Off"){
		this.getField('tf_Packaging8').value='';
	}
}


var Collection9=this.getField('In Collection9');
Collection9.setAction('MouseUp','func_Collection9()');
function func_Collection9(){
	if (Collection9.value=="Yes"){
		this.getField('tf_Collection9').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Collection9.readonly=true;
			this.getField('tf_Collection9').readonly = true;
		}
	}
	else if (Collection9.value=="Off"){
		this.getField('tf_Collection9').value='';
	}
}



var Production9=this.getField('In Production9');
Production9.setAction('MouseUp','func_Production9()');
function func_Production9(){
	if (Production9.value=="Yes"){
		this.getField('tf_Production9').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Production9.readonly=true;
			this.getField('tf_Production9').readonly = true;
		}
	}
	else if (Production9.value=="Off"){
		this.getField('tf_Production9').value='';
	}
}



var Packaging9=this.getField('In Packaging9');
Packaging9.setAction('MouseUp','func_Packaging9()');
function func_Packaging9(){
	if (Packaging9.value=="Yes"){
		this.getField('tf_Packaging9').value=util.printd("mmm dd, yyyy h:MM tt",new Date());
		if (Edit.value=="Off") {
			Packaging9.readonly=true;
			this.getField('tf_Packaging9').readonly = true;
		}
	}
	else if (Packaging9.value=="Off"){
		this.getField('tf_Packaging9').value='';
	}
}