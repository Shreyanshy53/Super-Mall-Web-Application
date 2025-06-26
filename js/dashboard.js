// js/dashboard.js

const db = firebase.firestore();

document.getElementById("shopForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const shopData = {
    shopName: document.getElementById("shopName").value,
    category: document.getElementById("category").value,
    floor: document.getElementById("floor").value,
    merchantName: document.getElementById("merchantName").value,
    location: document.getElementById("location").value,
    createdAt: new Date().toISOString()
  };

  db.collection("shops").add(shopData)
    .then(() => {
      document.getElementById("status").innerText = "✅ Shop added successfully!";
      document.getElementById("shopForm").reset();
    })
    .catch((error) => {
      document.getElementById("status").innerText = "❌ Failed to add shop.";
      console.error("Firestore Add Error:", error);
    });
});

// ✅ Check if Firestore is loaded
console.log("Firestore:", firebase.firestore);

// ✅ Form submit handler
document.getElementById("offerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const productName = document.getElementById("productName").value.trim();
  const shopId = document.getElementById("shopId").value.trim();
  const price = parseFloat(document.getElementById("price").value);
  const discount = parseFloat(document.getElementById("discount").value);

  console.log("Submitting offer:", { productName, shopId, price, discount });

  firebase.firestore().collection("offers").add({
    productName,
    shopId,
    price,
    discount,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    alert("Offer added successfully!");
    document.getElementById("offerForm").reset();
  })
  .catch((error) => {
    console.error("Error adding offer:", error);
    alert("Error: " + error.message);
  });
});
logAction("Shop Created", "Admin", {
  shopName: document.getElementById("shopName").value,
  category: document.getElementById("category").value,
  floor: document.getElementById("floor").value,
  merchantName: document.getElementById("merchantName").value,
  location: document.getElementById("location").value
});
