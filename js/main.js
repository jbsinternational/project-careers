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

    var selected = $(this).data('selected');

    // toggle function along with having multiple selectors
    if(selected == "0") {
      $(this).data('selected', true);
      $(this).addClass('is-checked')
    }
    else {
      $(this).data('selected', false);
      $(this).removeClass('is-checked')
    }

    var filters = '';
    $(".filters-button-group").find("button").each(function(i, obj) {
      if ($(obj).data('selected')) {
        filters = filters + $(obj).data('filter');
      }
    });

    // set filter for Isotope
    $grid.isotope({
      filter: filters
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
