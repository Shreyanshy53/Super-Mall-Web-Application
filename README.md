# 🏬 Super Mall Web Application

A cloud-based web application built using HTML, CSS, JavaScript, and Firebase to manage and showcase shops, products, and offers. The app enables rural merchants to digitize their business, list their shops, and advertise product offers to a global audience.

---

## 📖 Problem Statement

In many rural regions, merchants and small businesses face challenges in reaching a wider audience due to lack of digital presence. This results in limited exposure and growth.

**This project solves the problem by providing a centralized digital portal** where merchants can:
- Add and manage their shops
- Post product offers
- Reach potential buyers through an online interface

---

## 🎯 Project Objective

- Develop a secure, accessible, and scalable mall web application
- Allow admins to create, update, and manage shop details and offers
- Enable users to browse, compare, and filter products
- Log every admin activity in Firebase for traceability

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML, CSS  | Web interface and styling |
| JavaScript | Client-side logic |
| Firebase Firestore | Real-time NoSQL database |
| Firebase Auth | Admin authentication |
| Firebase Hosting (optional) | Deployment |
| Firebase Logging | Action audit log |

---

## 🧩 System Modules

### 👨‍💼 Admin
- Login using Firebase Authentication
- Add Shop Details
- Add Offer Details
- Manage Category & Floor Information
- View logs of every action

### 👥 User
- View list of shops (category-wise / floor-wise)
- Compare product offers
- Filter offers by shop/category
- View shop location and merchant details

---

## 📊 Project Evaluation Metrics

| Criteria            | Description |
|---------------------|-------------|
| ✅ Code             | Modular, clean, readable |
| ✅ Database         | Firestore with structured collections |
| ✅ Logging          | Admin activities logged (add shop/offer etc.) |
| ✅ Functionality    | Login, Add/View Shops, Add/View Offers, Compare |
| ✅ UI               | User-friendly, responsive |
| ✅ Hosting (optional) | Firebase Hosting supported |
| ✅ Testability      | Tested via browser and Firebase console |
| ✅ Maintainability  | Clean folder structure, commented JS code |

---

## 🔐 Admin Login Credentials (Demo)

```bash
📧 Email: sample@gmail.com  
🔑 Password: sample

## 💻 How to Run This Project

1. **Clone this repo**:
   ```bash
   git clone https://github.com/your-username/supermall-webapp.git
```
Open the project using Live Server in VS Code
OR double-click dashboard.html to run in browser.

Configure Firebase in js/firebaseConfig.js:
```
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};
```
firebase.initializeApp(firebaseConfig);
Go to Firebase Console → Authentication → Users → Add user
Create the following test user manually:
📧 Email: sample@gmail.com  
🔑 Password: sample
Test the Admin Panel by logging in at login.html


