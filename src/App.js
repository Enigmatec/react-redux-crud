import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserHome from "./pages/User";
import store from "./redux/store";

function App() {
  return (
    <>
      <Navbar />
      <Provider store={store}>
        <Routes>
          <Route path="/users" element={<UserHome />}></Route>
          <Route path="/posts"></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
