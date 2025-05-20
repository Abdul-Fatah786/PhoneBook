import firebase from "../assets/images/firebase.svg";
const Navbar = () => {
  return (
    <div className="h-[60px] bg-white my-4 rounded-lg flex items-center justify-center gap-2 text-xl font-medium">
      <img src={firebase} alt="Firebase" />
      <h1>Phone Book</h1>
    </div>
  );
};

export default Navbar;
