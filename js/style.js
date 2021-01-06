// When the user sting profile, execute myFunction :D
$(document).ready(function(){
    // Show hide popover
    $(".byd-dropdown-menu").click(function(){
        $(this).find(".byd-dropdown-sub-menu").slideToggle("fast");
    });
});
$(document).on("click", function(event){
    var $trigger = $(".byd-dropdown-menu");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".byd-dropdown-sub-menu").slideUp("fast");
    }            
});



// When the user icons open and close sidbar, execute myFunction :D
$(document).ready(function () {
	$("#slidebar-open-id").click(function () {
		$("#sidebar-id").animate({ right: '0px' }, 400);
	});
});
$(document).ready(function () {
	$("#slidebar-close-id").click(function () {
		$("#sidebar-id").animate({ right: '-250px' }, 500);
	});
});

// When we tap on the screen, execute myFunction :D
$('#main').click(function () {
	$("#sidebar-id").animate({ right: '-250px' }, 500);
});


// When the user scrolls the page, execute myFunction :D
window.onscroll = function () { myFunction() };

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
}

//When the user accordion the menu sidebar, myFunction :D
$(function () {
	var Accordion = function (el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.byd-link');
		// Evento
		links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
	}

	Accordion.prototype.dropdown = function (e) {
		var $el = e.data.el;
		$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.byd-submenu').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('#accordion-id'), false);
});