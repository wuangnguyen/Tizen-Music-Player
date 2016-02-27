var itemToShow = 5;
$(document).ready(function(){
    var carouselCount = 0;
    $(".owl-carousel").each(function() {
        $(this).attr("id", "owl-carousel-" + carouselCount);
        var owl = $('#owl-carousel-' + carouselCount);
        if($(this).hasClass("circle")){
            itemToShow = 7;
        }
        owl.owlCarousel({
            items: itemToShow,
            lazyLoad: true,
            navigation: false,
            pagination: false,
            addClassActive: true,
            rewindSpeed: 200,
            afterInit: function() {
                var owl = this;
                this.$owlItems.attr('tabindex', '0');
            }
        });

        // keyboard handle for each carousel
        owl.on('keydown', function(e) {
            var activeNode = $(document.activeElement);
            if(activeNode.get(0).classList.contains("owl-item")){
                switch (e.which) {
                    case 39:
                        var nextElement = activeNode.next().get(0);
                            if(nextElement){
                                if(!nextElement.classList.contains("active")){
                                    owl.trigger('owl.next');
                                    setTimeout(function() {
                                        nextElement.focus();
                                    }, 200);
                                }
                                else{
                                    nextElement.focus();
                                }
                            }
                            else{
                                nextElement = owl.find(".owl-item:first");
                                owl.trigger('owl.next');
                                setTimeout(function() {
                                    nextElement.focus();
                                }, 200);
                            }
                        break;
                    case 37:
                        var nextElement = activeNode.prev().get(0);
                            if(nextElement){
                                if(!nextElement.classList.contains("active")){
                                    owl.trigger('owl.prev');
                                    setTimeout(function() {
                                        nextElement.focus();
                                    }, 200);
                                }
                                else{
                                    nextElement.focus();
                                }
                            }
                            else{
                                nextElement = owl.find(".owl-item:last");
                                owl.trigger('owl.prev');
                                setTimeout(function() {
                                    nextElement.focus();
                                }, 200);
                            }
                        break;
                    case 13:
                        // fire click event on album name
                        activeNode.find(".image-container").trigger('click');
                        break;
                }
            }
        });
        // register navigatioin control buttons for each carousel
        var categoryWrapper = $(this).parents(".category-wrapper");
        var nextBtn = categoryWrapper.find("button.next");
        nextBtn.click(function() {
            owl.trigger('owl.next');
        });
        var previousBtn = categoryWrapper.find("button.previous");
        previousBtn.click(function() {
            owl.trigger('owl.prev');
        });
        carouselCount++;
    });
    $(".owl-carousel .owl-item .image-container").on("click", function(){
        $(this).parent().find("a:first")[0].click();
    });
    // keyboard handle for up - down key (switch between two carousels)
    $("#right-container").on('keydown', function(e) {
        var activeNode = $(document.activeElement);
        switch (e.which) {
            case 40:
                activeNode.parents(".category-wrapper").next().find(".category-content .owl-item.active:first").focus();
                e.preventDefault();
            break;
            case 38:
                activeNode.parents(".category-wrapper").prev().find(".category-content .owl-item.active:first").focus();
                e.preventDefault();
            break;
        }
    });
    $(".owl-carousel .owl-item:first").focus();
});