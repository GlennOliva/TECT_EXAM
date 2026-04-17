const generateBtn = document.getElementById("generateBtn");
const promptInput = document.getElementById("prompt");
const imageInput = document.getElementById("imageInput");
const gallery = document.getElementById("gallery");
const statusDiv = document.getElementById("status");

generateBtn.addEventListener("click", async () => {
  const prompt = promptInput.value.trim();

  if (!prompt) {
    statusDiv.textContent = "Please enter a prompt.";
    return;
  }

  const formData = new FormData();
  formData.append("prompt", prompt);

  if (imageInput.files[0]) {
    formData.append("image", imageInput.files[0]);
  }

  statusDiv.textContent = "Generating...";
  gallery.innerHTML = "";

  try {
    const response = await fetch("/generate", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      statusDiv.textContent = data.error || "Generation failed.";
      return;
    }

    statusDiv.textContent = "Done!";

    if (data.images && data.images.length) {
      data.images.forEach((imgSrc) => {
        const img = document.createElement("img");
        img.src = imgSrc;
        gallery.appendChild(img);
      });
    } else {
      statusDiv.textContent = "No images returned.";
    }
  } catch (error) {
    console.error(error);
    statusDiv.textContent = "Something went wrong.";
  }
});