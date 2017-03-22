<!-- Custom JS Code Begins -->
<script
  src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
  integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g="
  crossorigin="anonymous"></script>
<script>
  // Original code by Andy McWillians 
  $(document).ready(function() {
    addSocialMediaLinks();
  });
  function addSocialMediaLinks() {
    var headerSocialMedia = $('.sqs-block-socialaccountlinks-v2').clone();
    headerSocialMedia.addClass('top-nav-social-media');
    $('.header-inner').append(headerSocialMedia);
  }
</script>
<!-- Custom JS Code Ends -->
