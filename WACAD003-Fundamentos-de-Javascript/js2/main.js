const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageFilenames = [
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img4.jpg',
  'img5.jpg'
];

const altText = [
  'Minecraft',
  'Chrono Trigger',
  'Counter-Strike',
  'Mortal Kombat',
  'Super Mario 64'
];

for (let i = 0; i < imageFilenames.length; i++) {
  const newImage = document.createElement('img');

  newImage.setAttribute('src', 'images/' + imageFilenames[i]);
  newImage.setAttribute('alt', altText[i]);

  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', function () {
    displayedImage.src = this.src;
    displayedImage.alt = this.alt;
  });
}

btn.addEventListener('click', function () {
  if (btn.className === 'dark') {
    btn.className = 'light';
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.className = 'dark';
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});