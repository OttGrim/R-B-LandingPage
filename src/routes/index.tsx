import { Routes, Route } from "react-router-dom"
import Main from "../pages/Main"
import Form from '../pages/Form/Form'


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Main />} />
            <Route path="/sheet" element={<Form />} />
        </Routes>
    )
}