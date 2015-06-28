$(document).ready(function(){
	var row = 16;
	var col = 16;
	buildBox(row, col);

	/*var maxLorW = height * row;*/

	changeColor();

	/* When reset button is clicked, calls buildBox and runs
	changeColor */
	$('#reset').click(function(){
		row=16;
		col=16;
		buildBox(row,col);
		changeColor();
	});

	$('#custom').click(function(){
		row = prompt("Enter number of rows.","Rows");
		col = prompt("Enter number of columns.","Columns");
		buildBox(row,col);
		changeColor();
	});

	/* This builds the boxes that are to be used */
	function buildBox(r,c){
		$('.tabl').empty();
		for(var i=1; i<= r; i++){
			$('.tabl').append('<tr class="row"></tr>');
		};
		for(var j=1; j<= c; j++){
			$('.row').append('<td class="box">&nbsp</td>');	
		};
		var height = $('.bigBox').width()/r;
  		$('.row').css({'height': height});
  		$('.box').css({'width': height});
  		if(r>16){
  			$('.box').css({"font-size": "0"});
  		}

	};
	/* What will cause the mouseover color change*/
	function changeColor(){
		$('.box').mouseenter(function(){
			$(this).css({"background-color": "white"});
			$(this).css({"border-color": "white"});
		});
	};

});

