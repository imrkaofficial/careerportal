$(document).ready(function () {
    // Initialize DataTable with options
    var dataTable = $('#career-table').DataTable({
      "paging": true,
      "ordering": true,
      "info": true
    });

    // Handle filter clicks
    $('#filters a').on('click', function (e) {
      e.preventDefault();

      // Toggle active class on filters
      $('#filters a').removeClass('active');
      $(this).addClass('active');

      // Get the filter category
      var filterCategory = $(this).data('filter');

      // Clear the previous search
      dataTable.search('').columns().search('').draw();

      // Apply the new search based on the filter category
      if (filterCategory !== '*') {
        dataTable.columns(1).search(filterCategory, true, false).draw();
      }
    });
  });