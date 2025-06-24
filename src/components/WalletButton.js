import { useState } from "react";

function WalletButton({ setBudget }) {
  const [isFormShown, setIsFormShown] = useState(false);
  const [increaseAmount, setIncreaseAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = Math.round(parseFloat(increaseAmount) * 100) / 100;
    setBudget((oldBudget) => +(oldBudget + amount).toFixed(2));
  };

  const handleClick = () => {
    setIsFormShown((iFH) => !iFH);
  };
  return (
    <div
      style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
    >
      <button onClick={handleClick}>
        {isFormShown ? "Hide Form" : "More Money"}
      </button>
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
