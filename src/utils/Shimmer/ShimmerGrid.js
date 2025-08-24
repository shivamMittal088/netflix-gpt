import ShimmerCard from "./ShimmerCard";

const ShimmerGrid = () => {
  const rows = [];
  const totalRows = 3;     // number of rows
  const cardsPerRow = 5;   // shimmer cards in each row

  for (let r = 0; r < totalRows; r++) {
    const cards = [];
    for (let c = 0; c < cardsPerRow; c++) {
      cards.push(<ShimmerCard key={`row${r}-col${c}`} />);
    }

    rows.push(
      <div key={r} className="flex gap-4 mb-4">
        {cards}
      </div>
    );
  }

  return <div className="p-4">{rows}</div>;
};

export default ShimmerGrid;
