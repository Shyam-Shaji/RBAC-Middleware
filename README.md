# 🔐 RBAC Middleware

A **Role-Based Access Control (RBAC)** middleware implementation built with **Express.js** and **TypeScript**. This project demonstrates a clean, layered architecture for protecting API routes based on user roles.

---

## ✨ Features

- **Role-Based Authorization** — Fine-grained access control with `ADMIN`, `EDITOR`, and `CONTRIBUTOR` roles
- **Authentication Middleware** — Bearer token verification on protected routes
- **Authorization Middleware** — Route-level role enforcement via a composable `authorize()` function
- **Rate Limiting** — API request throttling (100 requests per window) using `express-rate-limit`
- **Security Hardening** — HTTP header protection via `helmet`
- **Clean Architecture** — Layered design with Controllers → Services → Repositories

---

## 🏗️ Project Structure

```
src/
├── app.ts                        # Express app setup & middleware registration
├── server.ts                     # Server entry point
├── config/
│   └── rateLimit.ts              # Rate limiter configuration
├── controllers/
│   └── user.controller.ts        # Request handlers
├── middlewares/
│   ├── auth.middleware.ts         # Authentication (Bearer token check)
│   ├── authorize.middleware.ts    # Authorization (role-based access)
│   └── security.middleware.ts     # Helmet security headers
├── repositories/
│   └── user.repository.ts        # Data access layer
├── routes/
│   └── user.routes.ts            # Route definitions & middleware chaining
├── services/
│   └── user.service.ts           # Business logic layer
└── types/
    ├── express.d.ts              # Express Request type augmentation
    └── role.ts                   # Role enum definition
```

---

## 🔑 Role Hierarchy

| Role            | Permissions                              |
| --------------- | ---------------------------------------- |
| `ADMIN`         | Full access — profile, content, system   |
| `EDITOR`        | Profile access + content creation        |
| `CONTRIBUTOR`   | Profile access only                      |

---

## 📡 API Endpoints

All routes are prefixed with `/api`.

| Method   | Endpoint       | Auth Required | Allowed Roles              | Description            |
| -------- | -------------- | ------------- | -------------------------- | ---------------------- |
| `GET`    | `/api/profile` | ✅            | All authenticated users    | Get user profile       |
| `POST`   | `/api/content` | ✅            | `ADMIN`, `EDITOR`          | Create new content     |
| `DELETE` | `/api/system`  | ✅            | `ADMIN` only               | Delete system resource |

---

## 🛡️ Middleware Pipeline

Each request flows through the following middleware chain:

```
Request
  │
  ├── helmet()             → Security headers
  ├── express.json()       → Body parsing
  ├── cookieParser()       → Cookie parsing
  ├── apiLimiter           → Rate limiting (100 req / window)
  │
  └── Route-level:
      ├── authenticate()   → Verify Bearer token
      └── authorize(roles) → Check user role against allowed roles
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/Shyam-Shaji/RBAC-Middleware.git
cd RBAC-Middleware

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
```

### Run Development Server

```bash
npm run dev
```

The server will start on `http://localhost:5000`.

---

## 🧪 Usage Example

### Get Profile (any authenticated user)

```bash
curl -H "Authorization: Bearer <token>" http://localhost:5000/api/profile
```

### Create Content (ADMIN or EDITOR only)

```bash
curl -X POST \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  http://localhost:5000/api/content
```

### Delete System (ADMIN only)

```bash
curl -X DELETE \
  -H "Authorization: Bearer <token>" \
  http://localhost:5000/api/system
```

---

## 🛠️ Tech Stack

| Technology                                                        | Purpose                  |
| ----------------------------------------------------------------- | ------------------------ |
| [Express.js](https://expressjs.com/) v5                           | Web framework            |
| [TypeScript](https://www.typescriptlang.org/) v6                  | Type safety              |
| [Helmet](https://helmetjs.github.io/)                             | Security headers         |
| [express-rate-limit](https://github.com/express-rate-limit/express-rate-limit) | Rate limiting  |
| [cookie-parser](https://github.com/expressjs/cookie-parser)      | Cookie handling          |
| [Nodemon](https://nodemon.io/)                                    | Development auto-reload  |

---

## 📄 License

This project is licensed under the **ISC License**.
