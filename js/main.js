(function() {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
      fitRows: {
        gutter: 27
      }
  });

  // store filter for each group
  var filters = {};

  $('.filters').on('click', '.button', function() {
    var filters = '';
    var selected = $(this).data('selected');
    var group = $(this).data('group');
    var currentFilter = $(this).data('filter');

    // toggle function along with having multiple selectors
    if(selected == "0") {
      filters = $(this).data('filter');
      $(this).data('selected', "1");
      $(this).addClass('is-checked')
    }
    else {
      $(this).data('selected', "0");
      $(this).removeClass('is-checked')
    }

    // set filter for Isotope
    $grid.isotope({
      filter: filters
    });

    // flatten object by concatting values
    function concatValues(obj) {
      var value = '';
      for (var prop in obj) {
        value += obj[prop];
      }
      return value;
    }
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
