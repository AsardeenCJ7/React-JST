import "./App.css";
import FunctionSample from "./assets/ComponentsLearn/FunctionSample";
// import ArraySamples from "./assets/ComponentsLearn/ArraySamples";
// import Header from "./assets/ComponentsLearn/Header";
// import Learn from "./assets/ComponentsLearn/Learn";
// import MultiTypeComponent from "./assets/ComponentsLearn/MultiTypeComponent";
// import Oneofsample from "./assets/ComponentsLearn/Oneofsample";
// import Student from "./assets/ComponentsLearn/Student";

function App() {
  // const array = [
  //   { id: 1, name: "item 1" },
  //   { id: 2, name: "item 2" },
  //   { id: 3, name: "item 3" },
  // ];

  const HandleClick = () => {
    alert("Click Button");
  };

  return (
    <div>
      <div>Welcome to Learn React JS</div>
      {/* <Learn />
      <Header />

      <Student name="Asardeen" age={35} isMarried={true} />
      <Student />

      <ArraySamples items={array} />
      <Oneofsample color="orangered" />

      <MultiTypeComponent value="Asardeen" />
      <MultiTypeComponent value={25} />
      <MultiTypeComponent value={true} /> */}
      <h2>Parent Class</h2>
      <FunctionSample HandleClick={HandleClick} />
    </div>
  );
}


export default App;
