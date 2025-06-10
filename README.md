#  QuickBuy — MERN Stack E-Commerce Project

QuickBuy is a **Full Stack E-Commerce Web Application** built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).  
It supports product listings, order placement, cart management, admin product uploads, and secure online payments via **Stripe**.  

---

##  Live Demo

- **Live Website:** [Deployed Link](https://quick-buy-frontend.vercel.app/)

---

## Getting Started (Run Locally)

### Clone the repo
```
git clone https://github.com/rajanarahul93/QuickBuy.git
```

### Backend Setup
```bash
cd backend
npm install
npm run server
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

> Make sure you create a `.env` file with MongoDB URI, Stripe key, JWT secret, etc.

---

## Tech Stack

**Frontend**
- React.js  
- Axios for API communication  
- React Router for page navigation  

**Backend**
- Node.js  
- Express.js  
- MongoDB (via Mongoose ODM)
- Stripe for online payments
- Cloudinary for image uploads
- Multer for file handling
- JSON Web Tokens (JWT) for authentication & authorization
- Postman for API testing during development  

**Other Utilities**
- bcrypt for password hashing
- dotenv for environment variable management
- cors for cross-origin API calls
- validator for input validations

---

##  Features

 Explore products, filter, and sort them  
 Add products to cart with variant selections (like size)  
 Place orders with delivery address  
 Payment options: Cash on Delivery and Stripe for Online Payment 
 
 Admin Panel:
- Upload new products
- Manage product list
- View orders and update their status (Placed, Packing, ShippedOut, Delivered)

 JWT-based Authentication  
 Cart products persist per user session (secured via token)  

---

##  Payment Instructions

- While paying with **Stripe** use this **dummy card number (for India)**:  

```
4000 0035 6000 0008
```

- For other countries and testing scenarios, visit:  
[https://docs.stripe.com/testing#international-cards](https://docs.stripe.com/testing#international-cards)

---

##  Backend Highlights

- **APIs created with Express Router** for user, product, cart, and order management
- **MongoDB** used for storing product, user, and order data
- **JWT authentication** implemented for login and admin authorization
- **Cloudinary integration** for uploading product images via **Multer**
- All APIs tested thoroughly in **Postman**
- Passwords hashed securely using **bcrypt**
- Environment variables managed using **dotenv**

---

##  Important Notes

- **Login is required** to access cart and place orders — every login generates a unique token for the session.
- **Admin can add products, view product lists, and manage orders** through a dedicated Admin Dashboard.
- Products added via the **Admin Panel** are saved to the MongoDB database (not hardcoded).

---

## ScreenShots of Admin Panel

- Add Products  
  ![image](https://github.com/user-attachments/assets/042fd665-5134-464e-89cd-2f736a1abf5c)

- List of Products  
 ![image](https://github.com/user-attachments/assets/fafeb07e-57b6-4785-90c8-b9fec76d410a)

- Orders  
 ![image](https://github.com/user-attachments/assets/20df6d1e-1c3b-4592-aa64-6712c26a16cc)
