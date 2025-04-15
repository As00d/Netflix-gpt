import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web_tall_panel/IN-en-20250407-TRIFECTA-perspective_8be2cd93-f2e6-4e34-acba-05b716385704_large.jpg"
          alt=""
        />
      </div>
      <form className="absolute w-3/12 bg-black my-36 mx-auto right-0 left-0 ">
        <input
          type="text"
          name=""
          id=""
          placeholder="Email Address"
          className="p-2 m-2"
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          className="p-2 m-2"
        />
        <button className="p-4 m-4 ">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
