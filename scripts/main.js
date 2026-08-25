// 10-Photo Swapper Loop
let currentPhotoIndex = 1;
const totalPhotos = 10;

function swapPhoto() {
  const photo = document.getElementById('interactive-photo');
  
  // Advance to the next photo, or loop back to 1 after reaching 10
  currentPhotoIndex = (currentPhotoIndex % totalPhotos) + 1;
  
  // Update photo source dynamically
  photo.src = `assets/images/photo${currentPhotoIndex}.jpg`;
}
