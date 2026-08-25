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
// Digicam Photo Array
const digicamPhotos = [
  "P1070928.JPG", "P1070929.JPG", "P1070967.JPG", "P1070982.JPG", "P1070992.JPG",
  "P1070993.JPG", "P1080005.JPG", "P1080014.JPG", "P1080021.JPG", "P1080026.JPG",
  "P1080054.JPG", "P1080058.JPG", "P1080059.JPG", "P1080061.JPG", "P1080090.JPG",
  "P1080101.JPG", "P1080130.JPG", "P1080134.JPG", "P1080163.JPG", "P1080176.JPG",
  "P1080177.JPG", "P1080191.JPG", "P1080192.JPG", "P1080196.JPG", "P1080197.JPG",
  "P1080203.JPG", "P1080205.JPG", "P1080206.JPG", "P1080224.JPG", "P1080227.JPG",
  "P1080232.JPG", "P1080233.JPG", "P1080241.JPG", "P1080244.JPG", "P1080268.JPG",
  "P1080308(1).JPG", "P1080310(1).JPG", "P1080312(1).JPG", "P1080344.JPG", "P1080345.JPG",
  "P1080346.JPG", "P1080349.JPG", "P1080350.JPG", "P1080353.JPG", "P1080354.JPG",
  "P1080356.JPG", "P1080357.JPG", "P1080359.JPG", "P1080362.JPG", "P1080363.JPG",
  "P1080390.JPG", "P1080392.JPG", "P1080394.JPG", "P1080430.JPG", "P1080434.JPG",
  "P1080440.JPG", "P1080443.JPG", "P1080444.JPG", "P1080446.JPG", "P1080448.JPG",
  "P1080451.JPG", "P1080459.JPG", "P1080463.JPG", "P1080480.JPG", "P1080483.JPG"
];

// Shuffle array randomly
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Build Vertical Infinite Scroll Track
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("cam-gallery-track");
  if (!track) return;

  const shuffledList = shuffleArray(digicamPhotos);
  
  // Duplicate list to create continuous infinite loop
  const fullList = [...shuffledList, ...shuffledList];

  fullList.forEach((filename) => {
    const img = document.createElement("img");
    img.src = `assets/images/${filename}`;
    img.alt = "Digicam Photograph";
    img.className = "digicam-img";

    // Interactive Random Tilt & Bounce Effect on Click
    img.addEventListener("click", () => {
      const angles = [-12, -8, -5, 5, 8, 12];
      const randomAngle = angles[Math.floor(Math.random() * angles.length)];
      const randomScale = 1.05 + Math.random() * 0.08;
      
      img.style.transform = `rotate(${randomAngle}deg) scale(${randomScale})`;
      
      setTimeout(() => {
        img.style.transform = "rotate(0deg) scale(1)";
      }, 1200);
    });

    track.appendChild(img);
  });
});
