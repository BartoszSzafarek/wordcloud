import React, { memo } from "react";

interface IProps {
  userPoints: number;
  name: string;
  handlePlayAgain: () => void;
}

const Summary: React.FC<IProps> = memo(
  ({ userPoints, name, handlePlayAgain }) => (
    <>
      {userPoints ? (
        <>
          <h2>Congratulations, {name}!</h2>
          <h3>Your score: {userPoints} points</h3>
        </>
      ) : (
        <h2>Unfortunately, you didn't get any points</h2>
      )}
      <button className="button" onClick={handlePlayAgain}>
        Try Again
      </button>
    </>
  )
);

export default Summary;
