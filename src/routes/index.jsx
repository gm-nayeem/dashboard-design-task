import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";

import Chef from '../pages/Chef';
import Error from '../pages/Error';
import Navbar from "../components/Nabvar";
import Sidebar from "../components/Sidebar";


const Index = () => {

    const Layout = () => {

        return (
            <div className="w-full min-h-[100vh] bg-gray-900 text-white flex flex-col gap-2">
                <div className="w-full h-[52px]">
                    <Navbar />
                </div>
                <main className="w-full min-h-[calc(100vh-60px)] flex gap-2">
                    <div className="w-[180px] h-[calc(100vh-60px)]">
                        <Sidebar />
                    </div>
                    <div className="w-[calc(100%-188px)] min-h-[calc(100vh-60px)]">
                        <Outlet />
                    </div>
                </main>
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Chef />,
                },
                {
                    path: "/*",
                    element: <Error />,
                },
            ],
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default Index;