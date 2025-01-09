import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();

  return <h1>Here are {nameOfMyUser}'s follower</h1>;
}

export default Followers;
