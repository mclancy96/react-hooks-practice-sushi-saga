import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({
  sushi,
  displayedSushiIndex,
  onMoreSushi,
  onEatSushi,
  budget,
}) {
  return (
    <div className="belt">
      {sushi
        .slice(displayedSushiIndex, displayedSushiIndex + 4)
        .map((oneSushi) => (
          <Sushi
            key={oneSushi.id}
            sushi={oneSushi}
            onEatSushi={onEatSushi}
            budget={budget}
          />
        ))}
      <MoreButton onMoreSushi={onMoreSushi} sushi={sushi} />
    </div>
  );
}

export default SushiContainer;
