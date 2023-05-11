import { Routes, Route, Router } from "react-router-dom"
import LandingPage from "../pages/landingPage"
import Register from "../pages/register"
import Login from "../pages/login"
import Map from "../pages/reportMap"

export default function Routing() {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='register/' element={<Register />} />
            <Route path='login/' element={<Login />} />
            <Route path='map/' element={<Map />} />
        </Routes>
    )
}
