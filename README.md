# Propus Packaging - MERN Stack Website

A modern, glassmorphism-themed takeaway packaging e-commerce homepage built with the MERN stack.

## Tech Stack

- **Frontend**: React 18, Vite, TailwindCSS, Framer Motion, Lucide Icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)

## Getting Started

### Install Dependencies

```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd client && npm install
```

### Run Development Servers

```bash
# Terminal 1 - Start backend
cd server && npm run dev

# Terminal 2 - Start frontend
cd client && npm run dev
```

The frontend runs on `http://localhost:3000` and the backend on `http://localhost:5000`.

## Project Structure

```
├── server/
│   ├── index.js          # Express server entry
│   ├── routes/api.js     # API routes
│   └── .env              # Environment variables
├── client/
│   ├── src/
│   │   ├── App.jsx       # Main app component
│   │   ├── index.css     # Global styles + glassmorphism
│   │   └── components/
│   │       ├── Navbar.jsx
│   │       ├── Hero.jsx
│   │       ├── MarqueeBanner.jsx
│   │       ├── Features.jsx
│   │       ├── Categories.jsx
│   │       ├── CustomBranding.jsx
│   │       ├── Reviews.jsx
│   │       └── Footer.jsx
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```
