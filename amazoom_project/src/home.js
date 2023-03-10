// Home // -- Regular Route -- Base
import Navbar from "./navbar";
export function Home({ setLoggedIn, loggedIn }) {
  const user = localStorage.getItem("user");
  return (
    <>
      <Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      <div className={title}>
        <h1>Amazoom {user} </h1>
        <h3>
          Go checkout some of our nice Cars !
        </h3>
      </div>
    </>
  );
}