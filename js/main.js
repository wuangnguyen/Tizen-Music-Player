$(document).ready(function() {
	var carouselCount = 0;
    $(".owl-carousel").each(function () {
        $(this).attr("id", "owl-carousel-" + carouselCount);
        var owl = $('#owl-carousel-' + carouselCount);
        owl.owlCarousel({
            items : 5,
			lazyLoad : true,
			navigation : false,
			pagination : false,
			addClassActive : true,
			afterInit : function() {
				//http://melmo.github.io/accessibility/berlin.js/code/dist/owlcarousel.html
				//http://www.jpotapova.info/blog/accessibility-enhancing-owl-carousel-with-keyboard-navigation/
				var owl = this;
			    this.$owlItems.attr('aria-selected','false');
			    //this.$elem.$('#owl-single-example .owl-item.active').attr('aria-selected','true'); // let screen readers know an item is active

			    // add instructions to keyboard users that are only visible when the carousel is focused
			    this.$elem.find(".owl-wrapper-outer").append('');

			    // listen for keyboard input
			    $(document).on('keydown', function(e){

			        var $focusedElement = $(document.activeElement),
			        singleOwl = owl,
			            type = e.which == 39? 'next': null,
			            type = e.which == 37? 'prev': type,
			            type = e.which == 13? 'enter':type;

			        // if the carousel is focused, use left and right arrow keys to navigate
			        if($focusedElement.attr('id') === $(owl.$elem).get(0).id){

			          if (type == 'next') {
			            singleOwl.next();
			          } else if (type == 'prev') {
			            singleOwl.prev();
			          }

			        // if the prev and next buttons are focused, catch "Enter" and navigate in the right direction
			        } else if (type == 'enter') {
			        if ($focusedElement.hasClass('owl-next')) {
			          singleOwl.next();
			        } else if ($focusedElement.hasClass('owl-prev')) {
			          singleOwl.prev();
			        }
			      }
			  });
			},
			// let screen readers know which slide is active after navigation or reinit
			afterAction : function() {
			  this.$owlItems.attr('aria-selected','false');
			}
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
    var discover_owl = $('#discover-section');
    discover_owl.owlCarousel({
        items : 6,
		lazyLoad : true,
		navigation : false,
		pagination : false,
		addClassActive : true,
		afterInit : function() {
			//http://melmo.github.io/accessibility/berlin.js/code/dist/owlcarousel.html
			//http://www.jpotapova.info/blog/accessibility-enhancing-owl-carousel-with-keyboard-navigation/
			var owl = this;
		    this.$owlItems.attr('aria-selected','false');
		    //this.$elem.$('#owl-single-example .owl-item.active').attr('aria-selected','true'); // let screen readers know an item is active

		    // add instructions to keyboard users that are only visible when the carousel is focused
		    this.$elem.find(".owl-wrapper-outer").append('');

		    // listen for keyboard input
		    $(document).on('keydown', function(e){

		        var $focusedElement = $(document.activeElement),
		        singleOwl = owl,
		            type = e.which == 39? 'next': null,
		            type = e.which == 37? 'prev': type,
		            type = e.which == 13? 'enter':type;

		        // if the carousel is focused, use left and right arrow keys to navigate
		        if($focusedElement.attr('id') === $(owl.$elem).get(0).id){

		          if (type == 'next') {
		            singleOwl.next();
		          } else if (type == 'prev') {
		            singleOwl.prev();
		          }

		        // if the prev and next buttons are focused, catch "Enter" and navigate in the right direction
		        } else if (type == 'enter') {
		        if ($focusedElement.hasClass('owl-next')) {
		          singleOwl.next();
		        } else if ($focusedElement.hasClass('owl-prev')) {
		          singleOwl.prev();
		        }
		      }
		  });
		},
		// let screen readers know which slide is active after navigation or reinit
		afterAction : function() {
		  this.$owlItems.attr('aria-selected','false');
		}
    });
    $("#discover_next").click(function(){
		discover_owl.trigger('owl.next');
	});

	$("#discover_previous").click(function(){
		discover_owl.trigger('owl.prev');
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
    $("#menu_left ul li.active a").focus();
});