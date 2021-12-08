import Bar from "./Bar";

const Bars = ({ bars, location }) => {
  return (
    <div className="bars-list">
      <div className="scroller">
        {bars.map((bar) => (
          <Bar key={bar.place_id} bar={bar} location={location} className="bars-list-item"/>
        ))}
      </div>
    </div>
  );
};

export default Bars;
