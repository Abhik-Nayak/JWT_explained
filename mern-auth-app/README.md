## 🔐 MERN Authentication App

A full-stack authentication system using **React (Vite + TS)**, **Redux Toolkit**, **Node.js (Express + TS)**, **MongoDB**, and **Google SMTP** for email verification and password reset. It includes secure cookie-based JWT authentication and a responsive UI built with Tailwind CSS.

---

## 📁 Project Structure

```
client/        # React (Vite + TS) + Tailwind + Redux Toolkit
server/        # Node.js + Express + TypeScript + MongoDB (Mongoose)
```

---

## 🛠 Tech Stack

* **Frontend**: React (Vite), TypeScript, Redux Toolkit, TailwindCSS, Axios
* **Backend**: Node.js, Express, TypeScript, Mongoose, JWT, Google SMTP
* **Other**: Cookie-based Auth, dotenv, nodemon, react-hot-toast

---

## ✅ Phases Completed

### ✅ Phase 1: Project Setup

**Backend:**

* Initialized Node.js project with TypeScript
* Folder structure: `controllers/`, `routes/`, `models/`, `middlewares/`, `utils/`
* Installed and configured: Express, Mongoose, dotenv, ts-node-dev, nodemon, tsconfig

**Frontend:**

* React app initialized using Vite + TypeScript
* TailwindCSS integrated
* Redux Toolkit with `authSlice` setup

---

### ✅ Phase 2: Authentication API – Register & Login

**Features:**

* User Model (name, email, password, isVerified, createdAt, updatedAt)
* Register API: hashes password, stores user, sends email verification
* Login API: checks user credentials and sets a secure cookie
* Middleware for async error handling and JWT authentication

---

### ✅ Phase 3: Frontend – Auth Forms + Redux Toolkit Integration

**Pages:**

* `/register`
* `/login`

**Features:**

* Auth form UI using TailwindCSS
* Connected to Redux Toolkit
* Axios setup with cookie support
* Authentication flow:

  * Register/Login calls backend
  * On success: cookie is stored, state is updated, redirects to protected routes

---

### ✅ Phase 4: Protect Routes + Auto-login + Email Verification

**Backend:**

* `/verify-email` route validates token and activates account
* Protected routes via middleware
* Auto-login: Refresh token logic on page reload

**Frontend:**

* `useSearchParams()` used to grab token from URL
* Protected routes with `RequireAuth` component
* Email verification success message on `/verify-email`

---

### ✅ Phase 5: Password Reset Flow

**Backend:**

* `/forgot-password`: Sends reset link to email with token
* `/reset-password/:token`: Validates token and updates password

**Frontend:**

* `/forgot-password` form
* `/reset-password/:token` form
* Redirects with toast messages

---

### ✅ Phase 8: UI Polish & Tailwind Styling

**Improvements:**

* Responsive form and layout using Tailwind breakpoints
* Toast notifications via `react-hot-toast`
* Button loading states, success/failure indicators
* Basic spinner for async actions

---

## 🚀 How to Run the Project

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mern-auth-app.git
cd mern-auth-app
```

### 2. Setup Environment Variables

#### `server/.env`

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern-auth
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
CLIENT_URL=http://localhost:5173

# Google SMTP for email
EMAIL_USER=your@gmail.com
EMAIL_PASS=your_gmail_app_password
```

#### `client/.env`

```env
VITE_SERVER_URL=http://localhost:5000
```

---

### 3. Install Dependencies

#### Backend

```bash
cd server
npm install
npm run dev
```

#### Frontend

```bash
cd client
npm install
npm run dev
```

---

## 📬 Postman Collection

Import the provided Postman collection to test APIs manually (see next step for Postman export).

---

## 📝 License

MIT

---

Would you like me to generate this README as a downloadable `.md` file too?
