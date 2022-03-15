import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserHome from "./pages/User";
import UserData from "./pages/User/UserDetail";
import store from "./redux/store";

function App() {
  return (
    <>
      <Navbar />
      <Provider store={store}>
        <Routes>
          <Route path="/users" element={<UserHome />}></Route>
          <Route path="/users/:userId" element={ <UserData />}></Route>
          <Route path="/posts"></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
