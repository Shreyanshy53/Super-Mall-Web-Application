// js/logger.js

function logAction(action, actor, data) {
    const db = firebase.firestore();
  
    db.collection("logs").add({
      action: action,
      actor: actor,
      data: data,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      console.log(`✅ Logged action: ${action}`);
    })
    .catch((error) => {
      console.error("❌ Error logging action:", error);
    });
  }
  