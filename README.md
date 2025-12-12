# 🗺️ Traddy - Trusted Travel Buddy

A full-stack platform connecting travelers with passionate local experts who offer authentic, personalized experiences. Travelers can discover unique tours, book guides securely, and explore destinations like a true local — while guides can monetize their knowledge and host meaningful experiences.

---

## 🌐 Live Demo

| Service                    | URL                                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------------------- |
| **Frontend (Live)**        | [Traddy](https://traddy.vercel.app/)  |
| **Backend (API Base URL)** | [Traddy-server](https://traddy-server.onrender.com/) |

---

## 🔐 Test Accounts (Sample Credentials)

Use the following accounts for testing the platform:

| Role        | Email                  | Password      |
| ----------- | ---------------------- | ------------- |
| **Admin**   | `admin@gmail.com`      | `123456`      |
| **Tourist** | `pihu@tourist.com`     | `Tourist@123` |
| **Guide**   | `oreo@guide.com`       | `Guide@123`   |

---

## 🚀 Project Overview

Traddy is a community-driven guide platform that enables locals to showcase their city’s hidden treasures, cultural richness, and personal stories through curated tours and experiences. Travelers can easily search, filter, and book guides tailored to their interests — from food walks and adventure outings to cultural immersions and photography journeys.

By opening up guiding opportunities to everyone, Traddy makes tourism more genuine, inclusive, and rooted in local communities.

---


## 📡 API Overview

| Method | Endpoint                | Description     |
| ------ | ----------------------- | --------------- |
| POST   | `/api/auth/register`    | Register user   |
| POST   | `/api/auth/login`       | Login user      |
| GET    | `/api/users/:id`        | Get profile     |
| PATCH  | `/api/users/:id`        | Update profile  |
| GET    | `/api/listings`         | Search listings |
| POST   | `/api/listings`         | Create listing  |
| PATCH  | `/api/listings/:id`     | Edit listing    |
| DELETE | `/api/listings/:id`     | Delete listing  |
| POST   | `/api/bookings`         | Request booking |
| PATCH  | `/api/bookings/:id`     | Accept / Reject |
| POST   | `/api/reviews`          | Add review      |
| POST   | `/api/payments/booking` | Process payment |

---

## 🧩 Backend Architecture

Modules:

- **Users** — auth, profiles, roles
- **Listings** — tour CRUD
- **Bookings** — workflow & status
- **Reviews** — feedback & rating
- **Payments** — secure processing

Middleware:

- Auth
- Role-based access
- Validation
- Error handling

---

## ⚙️ **Backend** Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/arittro7/traddy-server.git
cd traddy-server
```
### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run development servers

**Backend**

```bash
npm run dev
```

---

## 🔑 Environment Variables

### **.env example**

```
PORT=value
DB_URL=value
NODE_ENV=value
JWT_ACCESS_SECRET=value
JWT_ACCESS_EXPIRES=value
JWT_REFRESH_SECRET=value
JWT_REFRESH_EXPIRES=value
PASSWORD_SALT_ROUND=value
FRONTEND_URL=value
CLOUDINARY_CLOUD_NAME=value
CLOUDINARY_API_KEY=value
CLOUDINARY_API_SECRET=value
STRIPE_SECRET_KEY=value
STRIPE_WEBHOOK_SECRET=value
```