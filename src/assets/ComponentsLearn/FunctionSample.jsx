import PropTypes from "prop-types";

const FunctionSample = (props) => {
  const { HandleClick } = props;
  return (
    <>
      <div>
        <p>This is a Handle Click Function</p>
        <button onClick={HandleClick}>Click Here</button>
      </div>
    </>
  );
};

FunctionSample.propTypes = {
  HandleClick: PropTypes.func.isRequired,
};
export default FunctionSample;
