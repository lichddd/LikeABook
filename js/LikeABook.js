

if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); 
+(function ($) {

	  
	
  var LikeABook   = function (el,option) {
//  $(el).on('click',$.proxy(this.mychange,this));
	var self=this;
	var $book=$(el)
    this.$book=$book;
    this.autogo=false;
    this.usercontrol=true;
    var $bookpages=$('<div class="bookpages"></div>');
    var len=$book.children().length;
    

    
    
    for (var i = 0; i < Math.ceil(Number(len)/2); i++) {
    	$bookpages.append('<div class="bookpage bookpage-right"></div>');
    	
    	if ($book.children()[1]) {
    		$($book.children()[1]).addClass('bookback');
    	$($bookpages.children()[i]).append($($book.children()[1]));
    	
    	} else{
    		var $temp=$('<div></div>').addClass('bookback');
    		$($bookpages.children()[i]).append($temp);
    	}
    	
    	
    	$($book.children()[0]).addClass('bookfront');
    	$($bookpages.children()[i]).append($($book.children()[0]));
    }
    
    

     $bookpages.append($($bookpages.children().get().reverse()));
    
    
    $bookpages.append('<div class="bookpage-left bookpage-feiye" style="z-index:-9999"><div class="bookback"></div><div class="bookfront"></div></div>')
    $bookpages.prepend('<div class="bookpage-right bookpage-feiye"><div class="bookback"></div><div class="bookfront"></div></div>');
    
//  var $pages=$($book.children().get().reverse());
    $book.addClass('book');
    $book.append('<div class="bookcanvas"></div><div class="bookactivecanvas"><div class="bookactivecanvas-left"></div><div class="bookactivecanvas-right"></div></div>');
    $bookpages.appendTo($book.children('.bookcanvas'));

    
    
    $book.find('.bookactivecanvas').on('click','.bookactivecanvas-left',function (e) {
    				
		if (self.usercontrol!=true) {
			return;
		}
			var $self=$($book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-left')[0]);
//			$book.children('.bookcanvas').children('.bookpages').children().css('visibility','hidden');
//			$($book.children('.bookcanvas').children('.bookpages').children('.bookpage-left')[1]).css('visibility','visible');
//			var inx=$book.children('.bookcanvas').children('.bookpages').children('.bookpage-right').length-1;
//			$($book.children('.bookcanvas').children('.bookpages').children('.bookpage-right')[inx]).css('visibility','visible');
			
			$self.css('z-index','');
			
			$self.removeClass('bookpage-left');
			$self.addClass('bookpage-right');
			setTimeout(function () {
				$self.children($self.hasClass('bookpage-left')?'.bookback':'.bookfront').appendTo($self);
			},250);
//			$self.css('z-index','');
		});
	$book.find('.bookactivecanvas').on('click','.bookactivecanvas-right',function (e) {
		if (self.usercontrol!=true) {
			return;
		}
			
			var inx=$book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-right').length-1;
			var $self=$($book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-right')[inx]);
			
//			$book.children('.bookcanvas').children('.bookpages').children().css('visibility','hidden');
//			$($book.children('.bookcanvas').children('.bookpages').children('.bookpage-right')[inx-1]).css('visibility','visible');
//			$($book.children('.bookcanvas').children('.bookpages').children('.bookpage-left')[0]).css('visibility','visible');
//			


			var $zindexself=$($book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-left')[0]);
			var zindex=$book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-left').length-9999;
			$self.removeClass('bookpage-right');
			$self.addClass('bookpage-left');
			
			setTimeout(function () {
				$self.children($self.hasClass('bookpage-left')?'.bookback':'.bookfront').appendTo($self);
//				$self.css('z-index',$book.children('.bookcanvas').children('.bookpages').children('.bookpage-left').length-99);
				$zindexself.css('z-index',zindex);
			},250);
			
		});
	
	
	
	

  }
	
	
	LikeABook.prototype.goto = function(num) {
		
		if (this.autogo==true) {
			return;
		}
		num=Math.floor(Number(num)/2);
		num;
		var $book=this.$book;
		var self=this;
		if(num-$book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-left').length>0)
		{
			self.autogo=true;
			self.usercontrol=false;
			num=num-$book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-left').length;
			if (num>$book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-right').length) {
				num=$book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-right').length;
			}
			gopager(num);
			
		}
		else if (num-$book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-left').length<0) {
		
			self.autogo=true;
			self.usercontrol=false;
			num=Math.abs(num-$book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-left').length);
			if (num>$book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-left').length) {
				num=$book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-left').length;
			}
			gopagel(num);
		}
		
		function gopagel(num) {
			
			
			var $self=$($book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-left')[0]);
//			$book.children('.bookcanvas').children('.bookpages').children().css('visibility','hidden');
//			$($book.children('.bookcanvas').children('.bookpages').children('.bookpage-left')[1]).css('visibility','visible');
//			var inx=$book.children('.bookcanvas').children('.bookpages').children('.bookpage-right').length-1;
//			$($book.children('.bookcanvas').children('.bookpages').children('.bookpage-right')[inx]).css('visibility','visible');
			
			$self.css('z-index','');
			
			$self.removeClass('bookpage-left');
			$self.addClass('bookpage-right');
			setTimeout(function () {
				$self.children($self.hasClass('bookpage-left')?'.bookback':'.bookfront').appendTo($self);
			},250);
			
			num--;
			
			if (num>0) {
			setTimeout(function () {
			
				gopagel(num);
				
			},50)
			}
			else
			{
				self.autogo=false
				self.usercontrol=true;
			}

		}
		function gopager(num) {
			
			var inx=$book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-right').length-1;
			var $self=$($book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-right')[inx]);
			
//			$book.children('.bookcanvas').children('.bookpages').children().css('visibility','hidden');
//			$($book.children('.bookcanvas').children('.bookpages').children('.bookpage-right')[inx-1]).css('visibility','visible');
//			$($book.children('.bookcanvas').children('.bookpages').children('.bookpage-left')[0]).css('visibility','visible');
//			


			var $zindexself=$($book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-left')[0]);
			var zindex=$book.children('.bookcanvas').children('.bookpages').children('.bookpage.bookpage-left').length-9999;
			$self.removeClass('bookpage-right');
			$self.addClass('bookpage-left');
			
			setTimeout(function () {
				$self.children($self.hasClass('bookpage-left')?'.bookback':'.bookfront').appendTo($self);
//				$self.css('z-index',$book.children('.bookcanvas').children('.bookpages').children('.bookpage-left').length-99);
				$zindexself.css('z-index',zindex);
			},250);
			num--;
			
			if (num>0) {
			setTimeout(function () {
			
				gopager(num);
				
			},50)
			}
			else
			{
				self.autogo=false;
				self.usercontrol=true;
			}

		}
		

		

		
	}
	
	
	
	
	
	
	
	
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data  = $this.data('my.likeABook');
      var options = typeof option == 'object' && option;
      if (!data) $this.data('my.likeABook', (data = new LikeABook(this,options)));
      if (typeof option == 'string') data[option]()
    })
  }
	
	
	$.fn.likeABook=Plugin;
	$.fn.likeABook.Constructor=LikeABook;
	
	
	
$(window).on('load.my.likeABook.data-api', function () {
    $('[data-likeABook="true"]').each(function () {
      var $book = $(this)
      Plugin.call($book)
    })
  })
	
})(jQuery)

