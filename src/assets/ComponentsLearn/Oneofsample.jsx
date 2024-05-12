import PropTypes from "prop-types";

const Oneofsample = (props) => {
  const color = props.color;
  return (
    <div>
      <p
        style={{
          backgroundColor: color,
          color: "white",
          fontSize: "25px",
          padding: "25px",
        }}
      >
        This is a sample Paragraph background color is {color}
      </p>
    </div>
  );
};

export default Oneofsample;
