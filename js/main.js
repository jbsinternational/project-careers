$(document).ready(function() {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    fitRows: {
      gutter: 27
    }
  });

  // store filter for each group
  var filters = [];

  $('.filters').on('click', '.button', function() {

    var filterstring = '';
    var selected = $(this).data('selected');
    var currentFilter = $(this).data('filter');

    console.log("selected: " + selected + ", currentFilter: " + currentFilter);

    // toggle function along with having multiple selectors
    if (selected == "0") {
      filters.push( currentFilter ); // NEW CODE
      // filters += $(this).data('filter');  // OLD CODE
      $(this).data('selected', "1");
      $(this).addClass('is-checked')
    } else {
      $(this).data('selected', "0")
      $(this).removeClass('is-checked')
      var filtername = $(this).data('filter')
      var i = filters.indexOf(filtername)
      filters.splice(i, 1)
    }
    filterstring = filters.join(', '); // NEW CODE
      // set filter for Isotope
    console.log(filters.join(""));
      $grid.isotope({
        filter: filters.join("")
      });
  });
});


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
      if (add && !e.classList.contains('no-focus')) {
        e.classList.add('no-focus');
      } else if (!add) {
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
