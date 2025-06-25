const imageUpload = document.getElementById('imageUpload');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const stickerPreview = document.getElementById('stickerPreview');

let stickers = [];

// Upload images
imageUpload.addEventListener('change', (e) => {
  const files = e.target.files;
  stickers = [];
  stickerPreview.innerHTML = '';

  for (let file of files) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = document.createElement('img');
      img.src = event.target.result;
      img.classList.add('sticker');
      stickerPreview.appendChild(img);
      stickers.push(event.target.result);
    };
    reader.readAsDataURL(file);
  }
});

// Generate sticker pack (simplified for WhatsApp)
generateBtn.addEventListener('click', () => {
  if (stickers.length === 0) {
    alert("Please upload images first!");
    return;
  }
  alert("Sticker pack generated! (This is a demo. Real export requires WhatsApp Tray format.)");
});

// Download as ZIP (simplified)
downloadBtn.addEventListener('click', () => {
  if (stickers.length === 0) {
    alert("No stickers to download!");
    return;
  }
  alert("Downloading sticker pack... (In a real app, this would generate a .wastickers file)");
});