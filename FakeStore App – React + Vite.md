FakeStore App – React + Vite
This project is a fully functional e-commerce frontend built with React and Vite, using React Router, Axios, and Bootstrap for styling. It integrates a live fake store API to simulate product browsing and a full shopping cart experience. You can add items to the shopping cart, manipulate quantities, delete items, and it calculates total.

Features
🔥 Built with Vite for blazing fast development

⚛️ Powered by React 19

🧭 React Router DOM v7 for multi-page navigation

🛒 Persistent Cart System with:

Add, remove, and clear items

Quantity adjustment controls

Cart summary and total

📦 Product Catalog with real-time API fetch

📝 Product Details with mock Edit and Delete functionality

🎨 Responsive design using React Bootstrap

🚀 Deployed via GitHub Pages

Custom Enhancements
Modular CartContext with custom hook (useCart)

Quantity support per item in the cart

View Details and Add to Cart directly from each product card

Delete and Edit buttons on individual product pages

Global state management via Context API

Custom gradient and theme styling sitewide

Pages
/ – Home landing page

/products – Product catalog with all items

/products/:id – Single product view with full details

/add-product – Placeholder route to simulate adding products

/edit-product/:id – Edit form placeholder

/cart – Shopping cart with live controls

