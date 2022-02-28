import loginGuard from "./loginGuard";

const Private = (props) => {
  return <h1>This is a private component. {props.message}</h1>;
};

const Guarded = loginGuard(Private);

export default Guarded;

//only lets appear content if the user is logged in
