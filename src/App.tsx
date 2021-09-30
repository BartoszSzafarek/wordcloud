import Clouds from "images/clouds.jpg";
import Login from "components/Login.component";
import Playground from "components/Playground.component";
import React, { useCallback, useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("");

  const handleSetUserName = useCallback((name: string) => {
    setUserName(name);
  }, []);

  return (
    <div className="container">
      <img className="bg" src={Clouds} alt="Clouds" />
      {userName ? (
        <Playground name={userName} />
      ) : (
        <Login setUserName={handleSetUserName} />
      )}
    </div>
  );
};

export default App;
