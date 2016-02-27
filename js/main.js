(function($){
	$(window).load(function(){
		$(".list-songs").mCustomScrollbar({
			theme:"minimal",
			keyboard:{
				enable: false
			}
		});
	});
})(jQuery);
$(document).ready(function() {
	$("#menu_left ul li").click(function() {
		var $this = $(this);
		var index = $this.index();
		$("#right-container .content").hide();
		$("#container-" + index).show();
		$("#menu_left ul li").each(function() {
			$(this).removeClass("active");
		});
		$this.addClass("active");
	});
	$("#menu_left ul li:first").addClass("active");
	// keyboard handle menu left
	$("#menu_left").on('keydown', function(e) {
		var activeNode = $(document.activeElement);
		switch (e.which) {
			case 40:
				activeNode.parent().next().find("a").focus();
				e.preventDefault();
			break;
			case 38:
				activeNode.parent().prev().find("a").focus();
				e.preventDefault();
			break;
		}
	});
});