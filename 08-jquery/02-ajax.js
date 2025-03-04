$(document).ready(function() {
  var url = 'https://anapioficeandfire.com/api/books/';
  
  var $app = $('#books').css('padding-left', '0');
  var $loading = $('#loading');

  function addBookToDOM(item) {
    var $element = $('<div></div>').css({
      'display': 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'margin-top': '20px'
    });
    
    var $title = $('<h4></h4>').text(item.name);
    var $author = $('<p></p>').text('by ' + item.authors[0]);
    var $published = $('<p></p>').text(item.released.substr(0, 4));
    var $pages = $('<p></p>').text(item.numberOfPages + ' pages');
    
    $element.append($title, $author, $published, $pages);
    
    $app.append($element);
  }

  $.ajax({
    url: url,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      $.each(data, function(index, item) {
        addBookToDOM(item);
      });
    },
    error: function(error) {
      console.error(error);
      $app.append($('<li>An error occurred. Please try again.</li>'));
    },
    complete: function() {
      $loading.remove();
    }
  });
});
