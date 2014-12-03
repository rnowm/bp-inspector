/*
 * Breakpoint inspector
 *
 * Copyright (c) 2014 @rnowm - Arnau March
 * Licensed under the MIT license
 *
 */

$(function() {
  var initW = $(document).width(),
      breakPoints = breakpoints;

  getPageSize();
  $('#iframe').width(initW);
  $('#vp-width').val(initW);


  // Create breakpoints nav
  $('#breakpoints').append('<ol>');
  $.each( breakPoints, function( key, value ) {
    $('#breakpoints ol').append('<li><a id="size-' + key
                                + '" href="#' + key +' " data-width="'
                                + value + '">' + key + '</a></li>');
  });

  // Append full size
  $('#breakpoints ol').append('<li><a id="size-full" href="#full" data-width="'
                              + initW + '">full</a></li>');

  // Set size based on breakpoints
  $('#breakpoints a').click(function() {
    var iframeW = parseInt($(this).attr('data-width'), 10);
    $('#iframe').width(iframeW);
    $('#vp-width').val(iframeW);
  });

  // Input change
  $('#vp-width').change(function() {
    var vpWidth = $(this).val();
    $('#iframe').width(vpWidth);
  });

  // Window resize
  $(window).resize(function() {
    getPageSize();
    $('#size-full').attr('data-width', $(document).width());
  });

  function getPageSize() {
    var pageH = $('#main-wrapper').height();
    $('#iframe').height(pageH);
  }

  // keyboard binding
  jwerty.key('↑', function() {
    var vpWidth = parseInt($('#vp-width').val(), 10) + 1;
    $('#vp-width').val(vpWidth);
    $('#iframe').width(vpWidth);
  });

  jwerty.key('↓', function() {
    var vpWidth = parseInt($('#vp-width').val(), 10) - 1;
    if (vpWidth >= 320) {
      $('#vp-width').val(vpWidth);
      $('#iframe').width(vpWidth);
    }
  });

  jwerty.key('⇧+↑', function() {
    var vpWidth = parseInt($('#vp-width').val(), 10) + 10;
    $('#vp-width').val(vpWidth);
    $('#iframe').width(vpWidth);
  });

  jwerty.key('⇧+↓', function() {
    var vpWidth = parseInt($('#vp-width').val(), 10) - 10;
    if (vpWidth >= 320) {
      $('#vp-width').val(vpWidth);
      $('#iframe').width(vpWidth);
    }
  });
});

