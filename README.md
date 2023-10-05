# comfy_store
A web store the place where you can find the best room ever. It is written in Nextjs and Express.js in order to practice on Express and creating a simple CRUD API. It is also come with 
user-friendly features like advanced filtering with many different options, seamless card functionallity and more;

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
- Render for deployment

## Preview

[Comfy Rooms App](https://comphy-store.vercel.app/) or https://comphy-store.vercel.app/


## Note
- The Express API architecture is designed to be flexible and adaptable to different request types. For example, when a request is made to fetch a signifact product of our products list, the server returns it in a single step (O(1)). This is achieved by using a Map structure to store the products data. Similarly, when a request is made to get a specific product. This approach is not possible in Next.js servers, as the structures would be re-rendered on every request, which would significantly impact performance.

- The Express API uploaded on render better than vercel server;