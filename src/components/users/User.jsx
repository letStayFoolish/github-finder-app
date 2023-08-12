import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";

const User = () => {
  const { getUser, user } = useContext(GithubContext)
  const params = useParams()
  const { login, id, avatar_url, name, } = user

  useEffect(() => {
    getUser(params.login)
  }, []);


  return (
    <div>
      <h3>{login}</h3>
      <h3>{name}</h3>
      <div className="">
        <img src={avatar_url} alt="profile"/>
      </div>
    </div>
  )
}

export default User
