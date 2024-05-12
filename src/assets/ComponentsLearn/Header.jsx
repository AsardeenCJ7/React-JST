const Header = () => {
  const title = "title";
  const isLoggedIn = true;
  const greeting = isLoggedIn ? <p>Success</p> : <p>Failure</p>;
  let array = ["List1", "List2", "List3"];
  return (
    <>
      <div>
        <h1 className={title}>Welcome to Learn React with Asardeen</h1>
        <p className="slogan">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          illo obcaecati laudantium nesciunt natus sunt, neque accusamus hic sed
          illum omnis blanditiis quaerat exercitationem facilis quasi placeat,
          ipsa itaque? Similique!
        </p>

        {/* Inline CSS  */}
        <p
          style={{
            color: "orangered",
            fontSize: "20px",
            fontStyle: "italic",
          }}
        >
          25 + 45 = {25 + 45}
        </p>

        {/* JSX with Conditional Rendering */}
        {/* This is one of method */}
        {/* {isLoggedIn ? <p>Successfully Logged In</p> : <p>Login Here</p>} */}

        {greeting}

        {/* JSX With lists and Map Method */}

        <ul>
          {array.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
