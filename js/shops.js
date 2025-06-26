// js/shops.js

const db = firebase.firestore();

function renderShopCard(shop) {
  return `
    <div class="shop-card">
      <h3>${shop.shopName}</h3>
      <p><strong>Category:</strong> ${shop.category}</p>
      <p><strong>Floor:</strong> ${shop.floor}</p>
      <p><strong>Merchant:</strong> ${shop.merchantName}</p>
      <p><strong>Location:</strong> ${shop.location}</p>
    </div>
  `;
}

db.collection("shops").get()
  .then((snapshot) => {
    const shopList = document.getElementById("shopList");
    snapshot.forEach((doc) => {
      shopList.innerHTML += renderShopCard(doc.data());
    });
  })
  .catch((error) => {
    console.error("Error fetching shops:", error);
  });
  alert("Shops.js loaded successfully!");
  console.log("JS is working");
  const db = firebase.firestore();
const shopList = document.getElementById("shopList");
const categoryFilter = document.getElementById("categoryFilter");
const floorFilter = document.getElementById("floorFilter");

function renderShopCard(shop) {
  return `
    <div class="shop-card">
      <h3>${shop.shopName}</h3>
      <p><strong>Category:</strong> ${shop.category}</p>
      <p><strong>Floor:</strong> ${shop.floor}</p>
      <p><strong>Merchant:</strong> ${shop.merchantName}</p>
      <p><strong>Location:</strong> ${shop.location}</p>
    </div>
  `;
}

function fetchAndRenderShops() {
  let query = db.collection("shops");

  const category = categoryFilter.value;
  const floor = floorFilter.value;

  if (category) query = query.where("category", "==", category);
  if (floor) query = query.where("floor", "==", floor);

  query.get().then(snapshot => {
    shopList.innerHTML = ""; // Clear existing
    snapshot.forEach(doc => {
      shopList.innerHTML += renderShopCard(doc.data());
    });
  }).catch(error => {
    console.error("Error fetching filtered shops:", error);
  });
}

// Event listeners for filters
categoryFilter.addEventListener("change", fetchAndRenderShops);
floorFilter.addEventListener("change", fetchAndRenderShops);

// Initial load
fetchAndRenderShops();
