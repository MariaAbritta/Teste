import { Route, BrowserRouter , Routes} from "react-router-dom"
import Home from "../src/pages/Home/Index" 
import Clock from "../src/components/Clock/Clock"
import { Dispatch, SetStateAction, useState } from "react"
import Tabs from "../src/components/Tabs/Tabs"
import Title from "../src/pages/Home/tittle"

export const Router = () => {
    const [clock, setClock] = useState (1)
    const [pomodOrcCycles, setPomodOrcCycleType] = useState<number>(1);
        return(
        <BrowserRouter>
            <Routes>
                <Route path="/iniciar" element={<Title></Title>} ></Route>
            </Routes>
            <Routes>

                <Route path="/" element={<Home/>} />
                {/* <Route path="/iniciar" element={<Lista></Lista>} ></Route> */}
                        
            </Routes>

                    
        </BrowserRouter>
    );
}
