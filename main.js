var imageUrls = [
  'https://static.demilked.com/wp-content/uploads/2021/08/6124975980d6b-611f93ed7c426_dd858tcec5w61__700.jpg',
  'https://img-9gag-fun.9cache.com/photo/aDY45ed_700bwp.webp',
  'https://static.demilked.com/wp-content/uploads/2021/08/612497595dc00-2-612344de79979__700.jpg'
];

var $gallery = document.querySelector('main');

var $imageUrlInput = document.querySelector('input');

var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
