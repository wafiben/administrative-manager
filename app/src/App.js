import logo from "./logo.svg";
import "./App.css";
import AddUser from "./Components/AddUser/addUser";
import CardCustom from "./Components/list/card";
import Form from "react-bootstrap/Form";
import SideBar from "./Components/SideNavbar";
import List from "./Components/list";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const routes = [
    { path: "/", element: <List /> },
    { path: "/add-user", element: <AddUser /> },
  ];
  const router = createBrowserRouter(routes);
  return (
    <div className="App">
      <SideBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
