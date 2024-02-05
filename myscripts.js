window.addEventListener('DOMContentLoaded', function() {
  var linkContainer = document.getElementById('link-container');
  var links = [
    'Link 1',
    'Link 2',
    'Link 3',
    'Link 4',
    'Link 5',
    'Link 6',
    'Link 7',
    'Link 8',
    'Link 9',
    'Link 10',
    'Link 11',
    'Link 12'
  ];

  var columnCount = 2; // Number of columns
  var linksPerColumn = Math.ceil(links.length / columnCount);

  for (var i = 0; i < columnCount; i++) {
    var column = document.createElement('div');
    column.className = 'column';

    for (var j = i * linksPerColumn; j < (i + 1) * linksPerColumn && j < links.length; j++) {
      var link = document.createElement('a');
      link.href = '#';
      link.textContent = links[j];
      column.appendChild(link);
    }

    linkContainer.appendChild(column);
  }

  var clearDiv = document.createElement('div');
  clearDiv.className = 'clear';
  linkContainer.appendChild(clearDiv);
});
