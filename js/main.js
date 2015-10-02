
$(document).ready(function() {

	function doneloading(){
		$('.donemsg').delay(200).fadeIn();
		setTimeout(function(){
			$(".progressbarcnt").fadeOut();
			$(".resultcnt").fadeIn("Slow");
			$(".yes").addClass("growtext");
			$(".resultcnt>p").delay(900).fadeIn("Slow");
			$(".footer").delay(1400).animate({opacity: 1},500); 
	        },1500);
        }
	$(".analyse").on("click",function(e){
		e.preventDefault();
		 $( ".mainform" ).fadeOut("slow");
		$(".progressbarcnt").delay(200).fadeIn("fast");

		var progressbar = $('#progressbar'),
			max = progressbar.attr('max'),
			time = (1500/max)*5,	
		value = progressbar.val();

		var loading = function() {
		value += 1;
		addValue = progressbar.val(value);

		$('.progress-value').delay(200).html(value + '%');

		if (value == max) {
		    clearInterval(animate);
		   	doneloading();   
		}
		};

		var animate = setInterval(function() {
		loading();
		}, time);
	});



        $.getJSON( "answers.json", function( data ) {
       
                var answerlen = data.length;
                var randomkey = Math.floor(Math.random() * (answerlen+1));
                $(".yes").text(data[randomkey][0]);
                $(".why").text(data[randomkey][1]);         
        });

});


