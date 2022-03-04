import { loginGuard } from "../Auth";

const Profile = (props) => {
  const user = props.user;

  return (
    <div>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};

export default loginGuard(Profile);
