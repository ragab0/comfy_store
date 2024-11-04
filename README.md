# 🛍️ Comfy Store

Welcome to **Comfy Store**, your ultimate **SIMPLE** web store for finding the best room decor and furniture. This project is built using **Next.js** for the front-end and **Express.js** for the back-end

![Comfy Store](./src/assets/imgs/web/comfy-sloth-store-01.png)

## 🚀 Features

### Front-End

- **Responsive Design**: Built with **Tailwind CSS** to ensure a seamless experience across devices.
- **Advanced Filtering**: Users can filter products based on various criteria, making it easy to find the perfect item.
- **Seamless Cart Functionality**: Add and remove items from the cart effortlessly, with real-time updates.
- **Dynamic Product Pages**: Each product has its own page with detailed information and images.

### Back-End

- **RESTful API**: Built with **Express.js**, providing endpoints for all CRUD operations.
- **Efficient Data Handling**: Utilizes a JS ES+ data structure such as **Map** structure for quick data retrieval, ensuring optimal performance.
- **Flexible Architecture**: Designed to handle various request types, making it adaptable to future needs.
- **Deployment**: The API is hosted on **Render**, ensuring high availability and performance.

## 🛠️ Built With

- **HTML5**
- **CSS3**
- **JavaScript ES+**
- **Redux** (pure)
- **React**
- **Next.js**
- **Tailwind CSS**
- **Figma**
- **Node.js**
- **Render** (for API deployment)
- **Vercel** (for Project deployment)

## 🌐 Preview

Check out the live application: [Comfy Rooms App](https://comphy-store.vercel.app/)

## 📜 Note

- **File-based database (JSON)**:

The Express API architecture is designed to be flexible and adaptable to different request types. For example, when a request is made to fetch a significant product from our product list, the server returns it in a single step (O(1)). This is achieved by using a Map structure to store the product data. Similarly, when a request is made to get a specific product, this approach is not possible in Next.js servers, as the structures would be re-rendered on every request, significantly impacting performance.
