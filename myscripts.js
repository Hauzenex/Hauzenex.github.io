window.addEventListener('DOMContentLoaded', function() {
  var linkContainer = document.getElementById('link-container');
  var links = [
    { text: 'Hauzenex', url: 'https://example.com/link1' },
    { text: 'Text Test', url: 'https://example.com/link2' },
    { text: 'Uhm actually', url: 'https://example.com/link3' },
    { text: ':skull_and_crossbones:', url: 'https://example.com/link4' },
    { text: 'oh no bro so nerdy', url: 'https://example.com/link5' },
    { text: 'yeah cringe like', url: 'https://example.com/link6' },
    { text: 'this will send to link 7', url: 'https://example.com/link7' },
    { text: 'coding is hard', url: 'https://example.com/link8' },
    { text: 'test testing', url: 'https://example.com/link9' },
    { text: 'tetris tetris (scam)', url: 'https://example.com/link10' },
    { text: 'scam and scan', url: 'https://example.com/link11' },
    { text: 'i scanned this scam', url: 'https://example.com/link12' }
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
