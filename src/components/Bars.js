import Bar from "./Bar";

const Bars = ({ bars }) => {
  return (
    <div className="bars-list">
      {bars.map((bar) => (
        <Bar key={bar.place_id} bar={bar} />
      ))}
    </div>
  );
};

export default Bars;
