const uploadInput = document.getElementById("imageUpload");
const profileImage = document.getElementById("profileImage");

uploadInput.addEventListener("change", () => {
  const file = uploadInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    profileImage.src = reader.result;
  };
  reader.readAsDataURL(file);
});
