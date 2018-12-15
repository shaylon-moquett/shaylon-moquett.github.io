$(function() {
    
    $( "#nav-home" ).click(function() {
	  showView("home");
	});

	$( "#nav-resume").click(function() {
	  showView("resume");
	});

	$( "#nav-my-work").click(function() {
	  showView("work");
	});

	$( "#show-next-item").click(function() {
		showNextItem();
	});

	$( "#show-prev-item").click(function() {
		showPrevItem();
	});
});

function showView(view) {
	$(".content-item").removeClass("hidden");
	$(".nav-item").removeClass("selected");
	switch(view) {
		case "home":
			$("#nav-home").addClass("selected");
			$("#resume").addClass("hidden");
			$("#work").addClass("hidden");
			break;
		case "resume":
			$("#nav-resume").addClass("selected");
			$("#home").addClass("hidden");
			$("#work").addClass("hidden");
			break;
		case "work":
			$("#nav-my-work").addClass("selected");
			$("#home").addClass("hidden");
			$("#resume").addClass("hidden");
			break;
		default:
			break;
	}
}

var index = 0;
function showNextItem(){
	$(".work-item").addClass("hidden");

	if(index >= $(".work-item").length-1) {
		index = 0;
	} else {
		index++;
	}

	$(".work-item:eq("+index+")").removeClass("hidden");
}

function showPrevItem(){
	$(".work-item").addClass("hidden");

	if(index < 0) {
		index = $(".work-item").length-1;
	} else {
		index--;
	}

	$(".work-item:eq("+index+")").removeClass("hidden");
}

