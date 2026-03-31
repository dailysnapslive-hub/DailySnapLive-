// 🔥 Store uploaded items
let tops = [];
let bottoms = [];
let shoes = [];

// 📸 Handle uploads
function handleUpload(input, category) {
  input.addEventListener("change", () => {
    for (let file of input.files) {
      let url = URL.createObjectURL(file);
      category.push(url);
      displayImage(url);
    }
  });
}

// 🖼️ Display images in wardrobe
function displayImage(src) {
  let img = document.createElement("img");
  img.src = src;
  document.getElementById("wardrobe").appendChild(img);
}

// 🔗 Connect inputs
document.addEventListener("DOMContentLoaded", () => {
  handleUpload(document.getElementById("tops"), tops);
  handleUpload(document.getElementById("bottoms"), bottoms);
  handleUpload(document.getElementById("shoes"), shoes);
});

// 🎯 Generate outfit
function generateOutfit() {
  let outfitDiv = document.getElementById("outfit");
  outfitDiv.innerHTML = "";

  if (tops.length && bottoms.length && shoes.length) {
    let top = tops[Math.floor(Math.random() * tops.length)];
    let bottom = bottoms[Math.floor(Math.random() * bottoms.length)];
    let shoe = shoes[Math.floor(Math.random() * shoes.length)];

    [top, bottom, shoe].forEach(item => {
      let img = document.createElement("img");
      img.src = item;
      outfitDiv.appendChild(img);
    });

  } else {
    alert("Upload all categories first!");
  }
}

// 🤖 AI Assistant
function sendMessage() {
  let input = document.getElementById("userInput");
  let chat = document.getElementById("chat");

  let userText = input.value.trim().toLowerCase();
  if (!userText) return;

  // Show user message
  chat.innerHTML += `<p><b>You:</b> ${userText}</p>`;

  let reply = "I didn't understand 😅";

  // Smart responses
  if (userText.includes("outfit")) {
    reply = "Try: White top + Black jeans + Sneakers 🔥";
  } 
  else if (userText.includes("casual")) {
    reply = "Casual look: Hoodie + Joggers + Sneakers 👟";
  } 
  else if (userText.includes("party")) {
    reply = "Party look: Black shirt + Slim jeans + Boots 🖤";
  } 
  else if (userText.includes("formal")) {
    reply = "Formal: Shirt + Trousers + Formal shoes 👔";
  } 
  else if (userText.includes("hello") || userText.includes("hi")) {
    reply = "Hey 👋 I’m your Outfit AI! Ask me for style ideas.";
  }

  // Show AI reply
  chat.innerHTML += `<p><b>AI:</b> ${reply}</p>`;

  // Auto scroll chat
  chat.scrollTop = chat.scrollHeight;

  // Clear input
  input.value = "";
}