window.addEventListener('DOMContentLoaded', function() {
  var linkContainer = document.getElementById('link-container');
  var links = [
    { text: 'My youtube channel', url: 'https://youtube.com/@Hauzenex' },
    { text: 'Snake game (not mine)', url: 'snake.html' }
  ];

  var columnCount = 4; // number of columns
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
