
// When the user  icons sidbar, execute myFunction :D
function openClick() {
	document.getElementById('sidebar-id').style = 'right :0px;'
	document.getElementById('slidebar-open-id').style = 'display: none;'
}

function closClick() {
	document.getElementById('sidebar-id').style = 'right :-250px;'
	document.getElementById('slidebar-open-id').style = 'display:block ;'
}

{ document.getElementById('main').addEventListener('click', closClick) }



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