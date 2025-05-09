Here is the **complete and professional `README.md`** file with all the requested sections, including a full “Getting Started” guide and properly structured headings using Markdown syntax:

---

````md
# 💼 MERN Stack Portfolio Website

A full-featured, professional developer portfolio built with the **MERN stack** (MongoDB, Express, React/Next.js, Node.js) and **TypeScript**, styled with **Tailwind CSS**. This portfolio showcases your skills, projects, and blog posts, and includes a powerful **admin dashboard** for content management. Deployed on **Vercel** for optimal performance and scalability.

---

## 🔗 Live Demo

- 🌐 **Website: https://new-portfolio-sage-three.vercel.app

---

## 🚀 Getting Started (Local Setup)

### 📦 Prerequisites

Make sure you have the following installed:

- [Node.js (v18+)](https://nodejs.org/)
- [MongoDB (local or cloud)](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### 📁 Clone the Repository

```bash
git clone https://github.com/your-username/your-portfolio-repo.git
cd your-portfolio-repo
````

### 🔧 Install Dependencies

#### 1. Frontend (Next.js)

```bash
cd frontend
npm install
```

#### 2. Backend (Express)

```bash
cd ../backend
npm install
```

### ⚙️ Environment Variables

#### Backend `.env`

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
DATABASE_URL=your_mongodb_connection_uri
JWT_ACCESS_TOKEN_SECRET=your_access_token_secret
JWT_REFRESH_TOKEN_SECRET=your_refresh_token_secret
JWT_ACCESS_TOKEN_EXPIREIN=15m
JWT_REFRESH_TOKEN_EXPIREIN=7d
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

#### Frontend `.env.local`

Create a `.env.local` file in the `frontend/` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

> ⚠️ Replace all placeholder values with your actual credentials.

### ▶️ Run the Application

#### 1. Start Backend Server

```bash
cd backend
npm run start:dev
```

#### 2. Start Frontend Server

In a new terminal:

```bash
cd frontend
npm run dev
```

### 🔍 Access Locally

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend API: [http://localhost:5000](http://localhost:5000)

---

## 🌍 Public Pages (Accessible to All Users)

### ✅ Home Page (`/`)

* **Introduction Section** – Name, bio, and profile picture
* **Skills Section** – Icons or skill bars
* **Featured Projects** – Highlighted portfolio items
* **Resume Download** – Button to download PDF

### ✅ Projects Page (`/projects`)

* **Project Listings** – With images, links, and brief info
* **Dynamic Details Page** – `/projects/[id]` for full view

### ✅ Blog Page (`/blog`)

* **Blog Overview** – Title, thumbnail, description
* **Dynamic Details Page** – `/blog/[id]` for full content, author, date, related posts

### ✅ Contact Page (`/contact`)

* **Contact Form** – Name, email, and message fields
* **Data Storage** – Stored in DB or local storage
* **Confirmation Notification** – On success

---

## 🔐 Dashboard (Authenticated Users Only)

### ✅ Login (`/dashboard`)

* **Social Login** – Google/GitHub via NextAuth
* **Protected Routes** – Auth-only dashboard access

### ✅ Blog Management (`/dashboard/blogs`)

* Create, Edit, Delete blog posts
* Rich Text Editor, Image Upload, Category selection

### ✅ Project Management (`/dashboard/projects`)

* CRUD operations
* Title, Description, Tech Stack, Live & Source links, Image upload

### ✅ Message Management (`/dashboard/messages`)

* View sender info and message content
* Delete after review

---

## 🧰 Technical Stack

### ✅ Frontend

* **Next.js** + **TypeScript**
* **Tailwind CSS**
* **Dynamic Routing** (`/projects/[id]`, `/blog/[id]`)

### ✅ Backend

* **Node.js**, **Express**
* **REST API** for blogs, projects, messages

### ✅ Database

* **MongoDB** (with **Mongoose** ORM)
* Stores blogs, projects, and contact messages

### ✅ Authentication

* **NextAuth.js** (Google, GitHub)
* Session-based auth & route protection

### ✅ Deployment

* **Vercel** – Frontend deployment
* **Environment Variables** for secrets

---

## ✨ Features Summary

* ✅ Fully responsive design
* ✅ Dynamic project and blog routes
* ✅ Social login and authentication
* ✅ CMS-like dashboard for content control
* ✅ MongoDB integration for data persistence
* ✅ REST API backend
* ✅ SEO-friendly structure

---



---

```

Would you like this saved as a downloadable `.md` file?
```
