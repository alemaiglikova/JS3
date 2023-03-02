let image=document.getElementById('imagecontain');
let addButton=document.getElementById('addButton');
let removeButton=document.getElementById('removeButton');
let clearButton=document.getElementById('clearButton');


addButton.addEventListener("click", addimage)
removeButton.addEventListener("click", removeimage)
clearButton.addEventListener("click", clearimage)

function addimage()
{
    let image = document.createElement('img');
    image.src = '/image.png';
    imagecontain.appendChild(image);
}

function removeimage() {
    let images = imagecontain.getElementsByTagName('img');
    if (images.length > 0) {
      imagecontain.removeChild(images[0]);
    }
  }

  function clearimages() {
    imagecontain.innerHTML = '';
  }