window.addEventListener('DOMContentLoaded', function() {
  var linkContainer = document.getElementById('link-container');
  var imageContainer = document.getElementById('image-container');
  var hoverImage = document.getElementById('hover-image');

  var links = [
    { text: 'Hauzenex', url: 'snake.html', image: '/Images/sono.png' },
    { text: 'Housenex', url: 'pmdfr.txt', image: 'image2.jpg' },
    { text: 'Horsenex', url: 'profile-challenge.txt', image: 'image3.jpg' },
    // add more links with their image
  ];

  var columnCount = 2; // number of columns
  var linksPerColumn = Math.ceil(links.length / columnCount);

  for (var i = 0; i < columnCount; i++) {
    var column = document.createElement('div');
    column.className = 'column';

    for (var j = i * linksPerColumn; j < (i + 1) * linksPerColumn && j < links.length; j++) {
      var link = document.createElement('a');
      link.href = links[j].url;
      link.textContent = links[j].text;
      link.setAttribute('data-image', links[j].image);

      link.addEventListener('mouseover', function(event) {
        var imageUrl = event.target.getAttribute('data-image');
        hoverImage.src = imageUrl;
        imageContainer.style.display = 'block';
      });

      link.addEventListener('mouseout', function() {
        imageContainer.style.display = 'none';
      });

      column.appendChild(link);
    }

    linkContainer.appendChild(column);
  }

  var clearDiv = document.createElement('div');
  clearDiv.className = 'clear';
  linkContainer.appendChild(clearDiv);
});
