1. npx create-vite@latest
2. npm i react-router
3. npm install tailwindcss @tailwindcss/vite
4. npm i -D daisyui@latest 

5. Go to main.jsx

        import { StrictMode } from 'react'
        import { createRoot } from 'react-dom/client'
        import './index.css'
        import { createBrowserRouter,RouterProvider } from "react-router";


        const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Hello World</div>,
        },
        ]);

        createRoot(document.getElementById('root')).render(
        <StrictMode>
            <RouterProvider router={router} />,
        </StrictMode>,
        )

6. In src you will create layouts(MainLayout.jsx)
7. make component 
![alt text](image.png)    

8. Go to main.jsx

        const router = createBrowserRouter([
        {
            path: "/",
            Component: MainLayout,
            children:[
            {
                index:true,
                Component:Home
            }
            ]
        },
        ]);





