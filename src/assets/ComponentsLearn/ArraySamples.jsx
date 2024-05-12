import PropTypes from "prop-types";

const ArraySamples = (props) => {
  const { items } = props;
  return (
    <>
      <br />
      <div>ArraySamples</div>
      <h2>Arrays Lists</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

ArraySamples.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ArraySamples;

// import PropTypes from "prop-types";

// const ArraySamples = (props) => {
//   const { items } = props; // Destructure `items` from props

//   return (
//     <>
//       <br />
//       <div>ArraySamples</div>
//       <h2>Arrays Lists</h2>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// // Define PropTypes outside the component
// ArraySamples.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default ArraySamples;
