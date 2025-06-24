import { useState } from "react";

function Sushi({ sushi, setEatenSushiPlates }) {
  const [isEaten, setIsEaten] = useState(false);

  const handleClick = () => {
    if (!isEaten) {
      setIsEaten((isEaten) => !isEaten);
      setEatenSushiPlates((currPlates) => [...currPlates, sushi]);
    }
  };
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {isEaten ? null : (
          <img src={sushi.img_url} alt={sushi.name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
