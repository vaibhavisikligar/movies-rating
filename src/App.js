import { Route, Routes } from "react-router-dom";
import AdminLayout from "./CommonComponent/AdminLayout";
import Dashboard from "./component/Dashboard";
import Addmovies from "./component/Addmovies";
import Allmovies from "./component/Allmovies";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { Provider } from "react-redux";
import store from "./redux/store";
import PrivateComponent from "./CommonComponent/PrivateComponent";

function App() {
  return (
    <Provider store={store}>
      <AdminLayout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <PrivateComponent>
                <Dashboard />
              </PrivateComponent>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateComponent>
                <Dashboard />
              </PrivateComponent>
            }
          />
          <Route
            path="/add-movie"
            element={
              <PrivateComponent>
                <Addmovies />
              </PrivateComponent>
            }
          />
          <Route
            path="/all-movies"
            element={
              <PrivateComponent>
                <Allmovies />
              </PrivateComponent>
            }
          />
        </Routes>
      </AdminLayout>
    </Provider>
  );
}

export default App;
