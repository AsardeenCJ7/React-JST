import PropTypes from "prop-types";

const MultiTypeComponent = (props) => {
  return (
    <>
      <div>
        <p>value is : {props.value}</p>
      </div>
    </>
  );
};

MultiTypeComponent.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};
export default MultiTypeComponent;
