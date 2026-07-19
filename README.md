"# auth-system" 
# 🔐 Auth System API

A backend authentication system built with Node.js, Express, and MongoDB.

---

## 🚀 Features

- User Registration (bcrypt password hashing)
- User Login (JWT authentication)
- Protected Dashboard Route
- MongoDB Atlas integration
- Deployed on Render

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcrypt
- Render (deployment)

---

## 📡 API Endpoints

### Register
POST /api/auth/register

### Login
POST /api/auth/login

### Dashboard (Protected)
GET /api/auth/dashboard

---

## 🔐 Authentication

- JWT token required for protected routes
- Send token in headers:

Authorization: Bearer <token>

---

## 🌐 Live API

https://your-app.onrender.com/

---

## 📦 Installation

```bash
npm install
npm run dev
