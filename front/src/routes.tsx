import { Route, BrowserRouter , Routes } from "react-router-dom"
import Home from "../src/pages/Home/Index" 
import Clock from "../src/components/Clock/Clock"
import { Dispatch, SetStateAction } from "react"
export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                {/* <Route path="/clock" element={<Clock ></Clock>} ></Route> */}
            </Routes>

        </BrowserRouter>
    );
}
