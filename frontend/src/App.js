import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
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


  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path={"/characters/:characterId"}>
            <CharacterDetails />
          </Route>
          <Route exact path={"/characters"}>
            <CharacterDashboard />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
