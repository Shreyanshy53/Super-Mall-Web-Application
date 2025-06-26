const db = firebase.firestore();

function renderOfferCard(offer) {
  return `
    <div class="offer-card">
      <h3>${offer.productName}</h3>
      <p><strong>Shop ID:</strong> ${offer.shopId}</p>
      <p><strong>Price:</strong> ₹${offer.price}</p>
      <p><strong>Discount:</strong> ${offer.discount}%</p>
    </div>
  `;
}

db.collection("offers").orderBy("createdAt", "desc").get()
  .then(snapshot => {
    const offerList = document.getElementById("offerList");
    snapshot.forEach(doc => {
      offerList.innerHTML += renderOfferCard(doc.data());
    });
  })
  .catch(err => {
    console.error("Error fetching offers:", err);
  });
