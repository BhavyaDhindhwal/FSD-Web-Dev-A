# Product Shelf (Simple Version)

A beginner-friendly full-stack CRUD app. Everything is written in as few files
as possible, with comments explaining what each part does — no advanced
patterns, no separate router files, no modal popups.

## What's inside

```
shelf-simple/
├── backend/
│   ├── package.json
│   └── server.js        <-- the WHOLE backend, one file, heavily commented
└── frontend/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── main.jsx      <-- tiny file that starts React
        ├── App.jsx       <-- the WHOLE frontend: form, list, edit, delete
        └── index.css     <-- plain CSS, no variables or tricks
```

## How to run it

You need two terminals open at the same time — one for the backend, one for
the frontend.

**Terminal 1 — backend**
```bash
cd backend
npm install
npm start
```
You should see: `Server is running! Open http://localhost:5000/products in your browser.`

**Terminal 2 — frontend**
```bash
cd frontend
npm install
npm run dev
```
Open the URL it prints (usually http://localhost:5173) in your browser.

## How it works, in plain terms

1. `server.js` keeps a plain array of product objects in memory — that's our
   "database." There's no real database, so restarting the server resets the
   data back to the original 5 products.
2. It exposes 5 URLs (routes):
   - `GET /products` — get the whole list
   - `GET /products/:id` — get one product
   - `POST /products` — add a new product
   - `PUT /products/:id` — change an existing product
   - `DELETE /products/:id` — remove a product
3. `App.jsx` on the frontend calls those URLs with `fetch()`, and shows the
   results as cards on the page. The "Add a product" form at the top sends a
   `POST` request. Clicking "Edit" turns a card into a small form that sends
   a `PUT` request when you hit Save. Clicking "Delete" sends a `DELETE`
   request after asking you to confirm.

## Next steps if you want to learn more

- Try adding a `description` field to a product — you'll need to add it to
  the object shape in `server.js`, add an input for it in `App.jsx`, and show
  it on the card.
- Try swapping the in-memory array for a real database (like SQLite or
  MongoDB) — the routes and the frontend won't need to change much, only the
  code inside each route that reads/writes the data.
