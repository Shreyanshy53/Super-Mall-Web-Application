const db = firebase.firestore();

const offer1Select = document.getElementById("offer1");
const offer2Select = document.getElementById("offer2");
const comparisonDiv = document.getElementById("comparisonResult");

// Fetch all offers and populate dropdowns
db.collection("offers").get().then(snapshot => {
  snapshot.forEach(doc => {
    const offer = doc.data();
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");

    option1.value = doc.id;
    option1.text = offer.productName + " (" + offer.shopId + ")";
    option2.value = doc.id;
    option2.text = offer.productName + " (" + offer.shopId + ")";

    offer1Select.appendChild(option1);
    offer2Select.appendChild(option2);
  });
});

function compareOffers() {
  const id1 = offer1Select.value;
  const id2 = offer2Select.value;

  if (id1 === id2 || !id1 || !id2) {
    alert("Please select two different offers.");
    return;
  }

  Promise.all([
    db.collection("offers").doc(id1).get(),
    db.collection("offers").doc(id2).get()
  ])
  .then(([doc1, doc2]) => {
    const data1 = doc1.data();
    const data2 = doc2.data();

    const finalPrice1 = data1.price - (data1.price * data1.discount / 100);
    const finalPrice2 = data2.price - (data2.price * data2.discount / 100);

    comparisonDiv.innerHTML = `
      <div class="offer-box">
        <h3>${data1.productName}</h3>
        <p><strong>Shop:</strong> ${data1.shopId}</p>
        <p><strong>Price:</strong> ₹${data1.price}</p>
        <p><strong>Discount:</strong> ${data1.discount}%</p>
        <p><strong>Final Price:</strong> ₹${finalPrice1.toFixed(2)}</p>
      </div>
      <div class="offer-box">
        <h3>${data2.productName}</h3>
        <p><strong>Shop:</strong> ${data2.shopId}</p>
        <p><strong>Price:</strong> ₹${data2.price}</p>
        <p><strong>Discount:</strong> ${data2.discount}%</p>
        <p><strong>Final Price:</strong> ₹${finalPrice2.toFixed(2)}</p>
      </div>
    `;
  })
  .catch(err => {
    console.error("Error comparing offers:", err);
  });
}
