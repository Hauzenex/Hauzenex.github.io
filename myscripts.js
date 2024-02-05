window.addEventListener('DOMContentLoaded', function() {
  var linkContainer = document.getElementById('link-container');
  var links = [
    { text: 'Link 1', url: 'https://example.com/link1' },
    { text: 'Link 2', url: 'https://example.com/link2' },
    { text: 'Link 3', url: 'https://example.com/link3' },
    { text: 'Link 4', url: 'https://example.com/link4' },
    { text: 'Link 5', url: 'https://example.com/link5' },
    { text: 'Link 6', url: 'https://example.com/link6' },
    { text: 'Link 7', url: 'https://example.com/link7' },
    { text: 'Link 8', url: 'https://example.com/link8' },
    { text: 'Link 9', url: 'https://example.com/link9' },
    { text: 'Link 10', url: 'https://example.com/link10' },
    { text: 'Link 11', url: 'https://example.com/link11' },
    { text: 'Link 12', url: 'https://example.com/link12' }
  ];

  var columnCount = 4; // Number of columns
  var linksPerColumn = Math.ceil(links.length / columnCount);

  for (var i = 0; i < columnCount; i++) {
    var column = document.createElement('div');
    column.className = 'column';

    for (var j = i * linksPerColumn; j < (i + 1) * linksPerColumn && j < links.length; j++) {
      var link = document.createElement('a');
      link.href = links[j].url;
      link.textContent = links[j].text;

      var paragraph = document.createElement('p');
      paragraph.appendChild(link);

      column.appendChild(paragraph);
    }

    linkContainer.appendChild(column);
  }

  var clearDiv = document.createElement('div');
  clearDiv.className = 'clear';
  linkContainer.appendChild(clearDiv);
});
