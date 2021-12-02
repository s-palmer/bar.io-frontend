import Bar from "./Bar";

const Bars = ({ bars }) => {
  return (
    <div className="bars-list">
      <div className="scroller">
        {bars.map((bar) => (
          <Bar key={bar.place_id} bar={bar} className="bars-list-item"/>
        ))}
      </div>
    </div>
  );
};

export default Bars;
