
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Tap from "./components/Tap/Tap"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/:id" element={<Tap />} /> 
            </Routes>
        </div>
    );
}

export default App;
