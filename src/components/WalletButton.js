import { useState } from "react";

function WalletButton({ setBudget }) {
  const [isFormShown, setIsFormShown] = useState(false);
  const [increaseAmount, setIncreaseAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBudget((oldBudget) => oldBudget + Number(increaseAmount));
  };

  const handleClick = () => {
    setIsFormShown((iFH) => !iFH);
  };
  return (
    <div
      style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
    >
      <button onClick={handleClick}>More money!</button>
      {isFormShown && (
        <form onSubmit={handleSubmit}>
          <label>Add Amount to Wallet: </label>
          <input
            type="number"
            placeholder="0"
            value={increaseAmount}
            onChange={(e) => setIncreaseAmount(e.target.value)}
            step={0.01}
          ></input>
          <button>Add Money</button>
        </form>
      )}
    </div>
  );
}

export default WalletButton;
