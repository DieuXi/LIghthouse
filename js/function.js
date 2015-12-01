var pos ;
var wid ;


$(document).ready(function(){

		pos = "11.2%";
		wid = "52";

});


$('.one').hover(
	function(){  
		$('hr').css('margin-left','11.2%');
		$('hr').css('width','52');

	},function() {
		$('hr').css( 'margin-left',pos);
		$('hr').css('width',wid);
	}
	);

$('.one').click(
	function(){
				$('.abouttxt').css('display', 'none');
		$('.whytxt').css('display', 'none');
		$('.intro').attr('src', 'img/intro.png');
		$('hr').css('margin-left','11.2%');
		$('hr').css('width',"52");

		$('.video').css('display', 'block');
		$('.intro_text').css('display', 'block');

		pos = "11.2%";
		wid = "52";

	}
	);





$('.two').hover(
	function(){  
		$('hr').css('margin-left','34.5%');
		$('hr').css('width',"147");
	},function() {
		$('hr').css( 'margin-left',pos);
		$('hr').css('width',wid);
	}
	);

$('.two').click(
	function(){
		$('.intro').attr('src', 'img/why.png');
		$('hr').css('margin-left','34.5%');
		$('hr').css('width',"147");
		$('.abouttxt').css('display', 'none');
		$('.intro_text').css('display', 'none');
		$('.whytxt').css('display', 'block');
		$('.video').css('display', 'none');
		pos = "34.5%";
		wid = "147";

	}
	);




$('.three').hover(
	function(){  
		$('hr').css('margin-left','65.5%');
		$('hr').css('width','145');
	},function() {
		$( 'hr' ).css( 'margin-left',pos);
		$('hr').css('width',wid);

	}
	);

$('.three').click(
	function(){
		$('.intro').attr('src', 'img/about.png');
		$('.intro_text').css('display', 'none');
		$('.abouttxt').css('display', 'block');
				$('.whytxt').css('display', 'none');
		$('.video').css('display', 'none');

		$('hr').css('margin-left','65.5%');
		$('hr').css('width','145');
		pos = "65.5%";
		wid= "145";


	}
	);



