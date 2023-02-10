import logo from "./logo.svg";
import "./App.css";
import AddUser from "./pages/addUser";
import CardCustom from "./pages/List/card";
import Form from "react-bootstrap/Form";
import SideBar from "./Components/organismes/SideBar";
import List from "./pages/List";
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
