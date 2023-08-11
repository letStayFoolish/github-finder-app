import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";
const Home = () => {
  return (
    <div>
      <h1>
        <UserSearch />
        <UserResults />
      </h1>
    </div>
  )
}

export default Home
