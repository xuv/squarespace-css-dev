<!-- Custom JS Code Begins -->
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
<script>
  // Original code by Andy McWilliams
  $(document).ready(function() {
    addSocialMediaLinks();
  });
  function addSocialMediaLinks() {
    var headerSocialMedia = $('.sqs-block-socialaccountlinks-v2').clone();
    headerSocialMedia.addClass('top-nav-social-media');
    $('.header-inner').append(headerSocialMedia);
  }

  // Infinite scroll on Dispatch
  var bodyId = $('body').attr('id');
  var initUrl, currentData, fired = false;

  if ( bodyId === 'collection-58c305921e5b6c36784df045' ) {
    initUrl = getCurrentUrl();
    fetchNextPage( initUrl, customInfiniteScroll );
  }

  function customInfiniteScroll( data ) {
    currentData = data;
    $(window).scroll(function(){
      if ($(window).scrollTop() == $(document).height()-$(window).height()){
        fetchNextPage( getNextUrl(), addPosts );
      }
    });
  }

  function getCurrentUrl() {
    return "/dispatch?offset=" + $('#page-58c305921e5b6c36784df045').attr('data-updated-on');
  }

  function fetchNextPage( url, callback ) {
    if ( url && !fired ){
      fired = true;
      $.ajax({
        url: url + "&format=main-content",
        success: function(data) {
          fired = false;
          callback(data);
        },
        dataType: 'html'
      });
    }
  }

  function getNextUrl() {
    var parsed = $('<div/>').append( currentData );
    return( parsed.find(".older a").attr('href') );
  }

  function addPosts( data ) {
    currentData = data;
    var parsed = $('<div/>').append( data );

    var articles = parsed.find('article');

    var container = $('.summary-v2-block .summary-item-list');
    console.log( articles.length );
    articles.each(function(){
      el = $(this)
      el = refactorElement( el );
      container.append( el );
      el.find('img').css('opacity', 1);
    });
  }

  // Load all images via Squarespace's Responsive ImageLoader
  function loadAllImages() {
    var images = document.querySelectorAll('.summary-v2-block img[data-src]' );
    for (var i = 0; i < images.length; i++) {
      ImageLoader.load(images[i], {load: true});
    }
  }

  function refactorElement( el ) {
    el.find('footer').remove();

    el.find('.meta-below-title').remove();

    el.find('.meta-above-title').remove();

    el.find('p.entry-more-link a')
      .addClass('summary-read-more-link');

    el.find('.entry-title a')
      .removeClass('u-url')
      .removeAttr('rel')
      .addClass('summary-title-link')
      .wrap('<div class="summary-title"></div>');

    el.find('.excerpt-image img')
      .addClass('summary-thumbnail-image')
      .wrap('<div class="summary-thumbnail img-wrapper" style="overflow: hidden;"></div>')
      .each( function(img){ ImageLoader.load(this); });

    el.find('.excerpt-image')
      .removeClass('excerpt-image content-fill')
      .addClass('summary-thumbnail-container sqs-gallery-image-container')
      .css('width', '50%');

    el.find('.excerpt-thumb')
      .removeClass('excerpt-thumb')
      .addClass('summary-thumbnail-outer-container');

    el.find('.p-summary')
      .removeClass('p-summary')
      .addClass('summary-excerpt');

    var newEl = $('<div class="summary-item summary-item-record-type-text sqs-gallery-design-list-slide summary-item-has-thumbnail summary-item-has-author" />');
    newEl.append( el.find('.summary-thumbnail-outer-container') )
      .append( $('<div class="summary-content sqs-gallery-meta-container" style="width: 50%;" />') );
    newEl.find('.summary-content')
      .append( el.find('.summary-title') )
      .append( el.find('.summary-excerpt') )
      .append( el.find('.summary-read-more-link') );

    el.remove();
    return newEl;
  }
</script>
<!-- Custom JS Code Ends -->
