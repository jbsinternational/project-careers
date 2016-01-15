(function() {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
      fitRows: {
        gutter: 20
      }
  });

  // store filter for each group
  var filters = {};

  var data = {
    audience: 'students veterans educators serviceProviders employers',
    type: 'apps information videos podcasts vulputate fringilla',
    colors: 'apps information videos podcasts',
    sizes: 'student technology accomodations resources'
  };

  $('.filters').on('click', '.button', function() {
    console.log('button clicked');
    var filters = '';
    var selected = $(this).data('selected');
    var group = $(this).data('group');
    var currentFilter = $(this).data('filter');
    console.log('current filter ' + selected);
    if(selected == "0") {
      console.log('filter found');
      filters = $(this).data('filter');
      $(this).data('selected', "1");
      $(this).addClass('is-checked')
    }
    else {
      console.log('filter unchecked');
      $(this).data('selected', "0");
      $(this).removeClass('is-checked')
    }
    console.log('filters ' + filters);

    // set filter for Isotope
    $grid.isotope({
      filter: filters
    });
  });

  // flatten object by concatting values
  function concatValues(obj) {
    var value = '';
    for (var prop in obj) {
      value += obj[prop];
    }
    return value;
  }
}());
