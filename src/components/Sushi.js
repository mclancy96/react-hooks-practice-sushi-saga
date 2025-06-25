import { useState } from "react";

function Sushi({ sushi, onEatSushi, budget }) {
  const [isEaten, setIsEaten] = useState(sushi.isEaten);

  const handleClick = () => {
    if (!isEaten && sushi.price <= budget) {
      setIsEaten(true);
      onEatSushi(sushi);
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
