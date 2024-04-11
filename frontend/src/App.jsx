import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Signin } from "./Pages/Signin";
import { Signup } from "./Pages/Signup";
import { Dashboard } from "./Pages/Dashboard";
import { SendMoney } from "./Pages/SendMoney";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signup />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/signin" element={<Signin />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/send" element={<SendMoney />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
