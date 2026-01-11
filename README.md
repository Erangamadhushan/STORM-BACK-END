# ⌚ Storm Backend

Backend service for the **Storm Watch Selling Website**, built with **Node.js, Express, and MongoDB**.  
This API handles authentication, product management, payments, and core business logic for the Storm e-commerce platform.

---

## 🚀 Features

- RESTful API architecture
- User authentication using **JWT**
- Password hashing with **bcrypt**
- Secure payment handling with **Stripe**
- MongoDB database integration using **Mongoose**
- Environment-based configuration with **dotenv**
- CORS enabled for frontend-backend communication
- Development hot-reloading with **nodemon**

---

## 🛠 Tech Stack

- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** JSON Web Tokens (JWT)  
- **Security:** bcryptjs  
- **Payments:** Stripe API  
- **Environment Config:** dotenv  

---

## 📁 Project Structure

```bash
storm-back-end/
├── server.js          # Entry point of the application
├── package.json       # Project metadata and dependencies
├── .env               # Environment variables (not committed)
|-- database/          # Database connection
├── routes/            # API routes
├── models/            # Mongoose schemas
├── controllers/       # Business logic
├── middleware/        # Auth & other middleware
└── config/            # DB and app configuration

```

# ⚙️ Installation & Setup

1. Clone the repository

```bash
git clone https://github.com/Erangamadhushan/STORM-BACK-END.git
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a `.env` file in the root directory:
```bash
PORT=5000
MONGODB_URI=your_mongodb_uri
GEN_SALT= 8 || 10 || 12
JWT_SECRET=your_jwt_secret

STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

CLIENT_URL=http://localhost:3000


GOOGLE_CLIENT_ID=your_google_console_client_id
GOOGLE_CLIENT_SECRET=your_google_console_client_secret
```

> # Running the Application

## Development mode (with nodemon)
```bash
npm run dev
```

## Production mode
```bash
npm start
```

## Server will start on:
```bash
http://localhost:5000
```

# 🔐 Authentication Flow

- User passwords are hashed using bcryptjs
- JWT tokens are isssued on successful login
- Protected routes validate JWT tokens via middleware

# 💳 Payment Integration

- Stripe is used for handling secure payments
- Backend creates and manages payment intents
- No senstive payment data is stored on the server

> # 🌐 Frontend Integration

This backend is designed to work with the Storm Frontend application
- CORS enabled for cross-origin requests
- Token-based authentication
- JSON-based API responses


🧪 Future Improvements

- Role-based access control (Admin/User)
- Order history & tracking
- Product reviews & ratings
- API documentation with Swagger
- Unit & integration testing

# 👤 Author

Eranga Madhushan
GitHub: [Erangamadhushan]('https://github.com/Erangamadhushan')


# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!