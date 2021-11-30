import Bar from "./Bar";

const Bars = ({ bars }) => {
  return (
    <>
      {bars.map((bar) => (
        <Bar key={bar.place_id} bar={bar} />
      ))}
    </>
  );
};

export default Bars;
