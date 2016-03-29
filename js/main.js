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
var filters = {};

$('.filters').on( 'click', '.button', function() {
  var $this = $(this);
  // get group key
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = $buttonGroup.attr('.filters-button-group');
  // set filter for group
  filters[ filterGroup ] = $this.attr('data-filter');
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}
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

// Old filter sorting code-- activate this in lieu of lines 13 through 45 in
// order to switch the filtering from having one option per category to
// having multiple options per category

// store filter for each group
//  var filters = [];

// $('.filters').on('click', '.button', function() {
//
//     var filterstring = '';
//     var selected = $(this).data('selected');
//     var currentFilter = $(this).data('filter');
//
//     console.log("selected: " + selected + ", currentFilter: " + currentFilter);
//
//     // toggle function along with having multiple selectors
//     if (selected == "0") {
//       filters.push( currentFilter );
//       $(this).data('selected', "1");
//       $(this).addClass('is-checked')
//     } else {
//       $(this).data('selected', "0")
//       $(this).removeClass('is-checked')
//       var filtername = $(this).data('filter')
//       var i = filters.indexOf(filtername)
//       filters.splice(i, 1)
//     }
//     filterstring = filters.join(', ');
//       // set filter for Isotope
//     consol`e.log(filters.join(""));
//       $grid.isotope({
//         filter: filters.join("")
//       });
//   });
// });
