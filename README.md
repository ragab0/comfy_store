# comfy_store
A web store written in Nextjs and Express.js, to create a CRUD server with a simple front-end ui page has also great
user-friendly features like filtering, ;

![comphy_store](./src/assets/imgs/web/comfy-sloth-store-01.png)

## Built with
- HTML5
- CSS3
- JavaScript
- Redux
- React
- Nextjs
- Tailwindcss
- Figma
- Express.js
- Node.js

## Preview

[Comfy Rooms App](https://comphy-store.vercel.app/) or https://comphy-store.vercel.app/

## Note
- The server is created with different structures depent on the request type such as when you sending
request to fetch products, you got on a list. And when you sending a request in order to get on a specific product,
the response retrned on one step O(1) the structure is an object of Map structure (you can't do that on nextjs server
as the structures w'll rerender the structure in every request that server got on);

- It is 50% back-end and 50% front-end, means that i *handledSingleProduct* on the **on server** on a specific route,
and filters done on the **client side** using redux, as i'm also practice on it :)