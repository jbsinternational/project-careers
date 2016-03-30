(function() {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
      fitRows: {
        gutter: 27
      }
  });


  var buttonsClasses = [
    '.audience.filters-button-group',
    '.type.filters-button-group',
    '.star.filters-button-group'
  ];

  $('.filters').on('click', '.button', function() {


    // toggle function along with having multiple selectors
    if(!$(this).data('selected')) {
      $(this).data('selected', true);
      $(this).addClass('is-checked')
    }
    else {
      $(this).data('selected', false);
      $(this).removeClass('is-checked')
    }


    var selectedButtons = [];
    $.each(buttonsClasses, function(i, buttonClass) {
      selectedButtons[i] = ['*'];
      $(buttonClass).find("button").each(function(j, obj) {
        if ($(obj).data('selected')) {
          selectedButtons[i].push($(obj).data('filter'));
        }
      });
    });

    var filters = [];

    var i = 1;
    do {
      var j = 1;
      do {
        var k = 1;
        do {
          var f = '';
          if (typeof selectedButtons[0][i]  !== "undefined") {
            f = f + selectedButtons[0][i];
          }
          if (typeof selectedButtons[1][j]  !== "undefined") {
            f = f + selectedButtons[1][j];
          }
          if (typeof selectedButtons[2][k]  !== "undefined") {
            f = f + selectedButtons[2][k];
          }
          filters.push(f);
          k++;
        }
        while (k<selectedButtons[2].length);
        j++;
      }
      while (j<selectedButtons[1].length);
      i++;
    }
    while (i<selectedButtons[0].length);


    // set filter for Isotope
    $grid.isotope({
      filter: filters.join(', ')
    });

  });



}());


// Focus Outline Acessibility JS
// -----------------------------
(function(doc) {
  var dom_events = 'addEventListener' in doc,
    e = doc.getElementsByTagName("body")[0],
    _add_event_listener = function(type, callback) {
      // Basic cross-browser event handling
      if (dom_events) {
        doc.addEventListener(type, callback);
      } else {
        doc.attachEvent('on' + type, callback);
      }
    },
    _set_class = function(add) {
      if (add && ! e.classList.contains('no-focus')) {
        e.classList.add('no-focus');
      } else if (!add)    {
        e.classList.remove('no-focus');
      }
    };

  _add_event_listener('mousedown', function() {
    _set_class(true);
  });

  _add_event_listener('keydown', function() {
    _set_class(false);
  });
})(document);
