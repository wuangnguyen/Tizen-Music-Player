$(document).ready(function() {
	var carouselCount = 0;
    $(".owl-carousel").each(function () {
        $(this).attr("id", "owl-carousel-" + carouselCount);
        var owl = $('#owl-carousel-' + carouselCount);
        owl.owlCarousel({
            items : 5,
			lazyLoad : true,
			navigation : false,
			pagination : false
        });
        var nextBtn = $("#next-" + carouselCount);
        nextBtn.click(function(){
			owl.trigger('owl.next');
		});
		var previousBtn = $("#previous-" + carouselCount);;

		previousBtn.click(function(){
			owl.trigger('owl.prev');
		});
        carouselCount++;
    });
    $("#menu_left ul li").click(function(){
    	var $this = $(this);
    	var index = $this.index();
    	$("#right-coontainer .content").hide();
    	$("#container-" + index).show();
    	$("#menu_left ul li").each(function(){
    		$(this).removeClass("active");
    	});
    	$this.addClass("active");
    });
});