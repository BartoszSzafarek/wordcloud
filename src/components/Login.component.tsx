import React, { useState } from "react";

interface IProps {
  setUserName: (name: string) => void;
}

const Login: React.FC<IProps> = ({ setUserName }) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <form
      className="loginForm wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        setUserName(inputValue);
      }}
    >
      <h1>Wordcloud game</h1>
      <input
        value={inputValue}
        placeholder="Enter your nickname here..."
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button className="button" type="submit">
        PLAY
      </button>
    </form>
  );
};

export default Login;
