import React from 'react';
import ReactDOM from 'react-dom/client';

import Front from './Source/Component/Front';
import Header from './Source/Component/Header';

import FirstSemester from './Source/Component/FirstSemester';
import SecondSemester from './Source/Component/SecondSemester';
import ThirdSemester from './Source/Component/ThirdSemester';
import FourthSemester from './Source/Component/FourthSemester';
import Error from './Source/Component/Error';

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Front/>
            },
            {
                path: "/first-semester",
                element: <FirstSemester />
            },
            {
                path: "/second-semester",
                element: <SecondSemester />
            },
            {
                path: "/third-semester",
                element: <ThirdSemester />
            },
            {
                path: "/fourth-semester",
                element: <FourthSemester />
            },
        ],
        errorElement : <Error/>
    }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);