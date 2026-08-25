// Photo Swapper Function
let currentPhotoIndex = 1;

function swapPhoto() {
  const photo = document.getElementById('interactive-photo');
  
  if (currentPhotoIndex === 1) {
    photo.src = 'assets/images/photo2.jpg'; // Path to your second photo
    currentPhotoIndex = 2;
  } else {
    photo.src = 'assets/images/photo1.jpg'; // Path back to your first photo
    currentPhotoIndex = 1;
  }
}
