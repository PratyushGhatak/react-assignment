import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "./components/Nav";
import UsersList from "./components/UsersList";
import NasaImages from "./components/NasaImages";
function App() {
  const { user } = useAuth0();
  return (
    <div className="App">
      <Nav />
      <UsersList />
      {user && <NasaImages />}
    </div>
  );
}

export default App;
