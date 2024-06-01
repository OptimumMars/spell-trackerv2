import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import CharacterDashboard from "./components/CharacterDashboard";
import CharacterDetails from "./components/CharacterDetails";
import * as sessionActions from "./store/session";

const Layout = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <>
            <Navigation isLoaded={isLoaded} />
            <Outlet />
        </>
    );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
        {
            path: "/characters/:characterId",
            element: <CharacterDetails />,
        },
        {
            path: "/characters",
            element: <CharacterDashboard />,
        },
    ],
  }
]);

const App = () => {
    return <RouterProvider router={router} />;
};


export default App;
