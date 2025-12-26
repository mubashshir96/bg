async function removeBG() {
  const input = document.getElementById("imageInput");
  const file = input.files[0];

  if (!file) {
    alert("Image select karo");
    return;
  }

  const formData = new FormData();
  formData.append("image_file", file);
  formData.append("size", "auto");

  const response = await fetch("rapidapi.com", {
    method: "POST",
    headers: {
      "X-Api-Key": "4dae1acb96msh89f004af28c3c79p11da06jsn1548c3fc4e1a"
    },
    body: formData
  });

  const blob = await response.blob();
  document.getElementById("result").src = URL.createObjectURL(blob);
}
