import PropTypes from "prop-types"; // ES6

const Oneofsample = (props) => {
  const { color } = props;
  return (
    <div
      style={{
        backgroundColor: color,
        color: "white",
        fontSize: "25px",
        padding: "25px",
      }}
    >
      <p>This is a sample Paragraph background color is {color}</p>
    </div>
  );
};

Oneofsample.propTypes = {
  color: PropTypes.oneOf(["red", "green", "blue"]).isRequired,
};

export default Oneofsample;
