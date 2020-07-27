
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom &gt; viewportTop &amp;&amp; elementTop &lt; viewportBottom;
  };

let img = [];

$(window).scroll(function(event) {


  img.forEach(function(item, i) {


    if ($(item).isInViewport()) {


      $(item).on('load', function(status) {
        $(item).parent().find('.shimmer').remove();
      });

      $(item).attr('src', $(item).attr('data-src'));

      img.splice(i, 1);
    }

  });


});

$('.baca-artikel img').each(function(i, obj) {


  let check1 = $(obj).attr('data-original-height');
  let check2 = $(obj).parent().attr('href');

  if(check1!==undefined &amp;&amp; check2 !==undefined){


  $(obj).parent().addClass('shimmer-container');
  $(obj).parent().append("<div class='shimmer'/>");




  img.push(obj);




  let image = $(obj).attr('src');
  image = image.replace('s640', 's50');

  $(obj).attr('data-src', $(obj).attr('src'));

  $(obj).attr('src', image);

}



});
