
function openClick(){
	document.getElementById('sidebar-id').style='right :0px;'
	document.getElementById('slidebar-open-id').style='display: none;'
}

function closClick(){
	 document.getElementById('sidebar-id').style='right :-250px;'
	 document.getElementById('slidebar-open-id').style= 'display:block ;'
}

{document.getElementById('main').addEventListener('click',closClick)}





$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.byd-link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
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