(function() {                             // Lives in an IIFE
  var $imgs = $('#gallery a img');          // Get the images
  var $search = $('#filter-search');      // Get the input element
  var cache = [];                         // Create an array called cache

  $imgs.each(function() {                 // For each image
    cache.push({                          // Add an object to the cache array
      element: this.parentNode,                      // This image
      text: this.parentNode.title.trim().toLowerCase() // Its alt text (lowercase trimmed)
    });
  });

  function filter() {                     // Declare filter() function
    var query = this.value.trim().toLowerCase();	// Get the query
    cache.forEach(function(a) {         // For each entry in cache pass image 
      var index = 0;                      // Set index to 0

      if (query) {                        // If there is some query text
        index = a.text.indexOf(query);  // Find if query text is in there
      }
	  if (index === -1) { 	  // Show / hide
		  a.element.style.display = 'none';
	  } else {
		  a.element.style.display = '';
	  }
    });
  }

  if ('oninput' in $search[0]) {          // If browser supports input event
    $search.on('input', filter);          // Use input event to call filter()
  } else {                                // Otherwise
    $search.on('keyup', filter);          // Use keyup event to call filter()
  }              

}());