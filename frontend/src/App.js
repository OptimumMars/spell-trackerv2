import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import CharacterDashboard from "./components/CharacterDashboard";
import CharacterDetails from "./components/CharacterDetails";
import * as sessionActions from "./store/session";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route exact path={"/characters/:characterId"} element={<CharacterDetails />} />
      <Route exact path={"/characters"} element={<CharacterDashboard />} />
    )
  );

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        {router}
      )}
    </>
  );
}

export default App;
