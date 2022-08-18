import {Route, Routes} from "react-router-dom";

import {HomePage} from "./pages";
import {Chat} from "./components";
import './App.css';

function App() {
    return (
        <div className="App">
           <Routes>
               <Route index element={<HomePage/>}/>
               <Route path={'/'} element={<HomePage/>}>
                   <Route path={':id'} element={<Chat/>}/>
               </Route>
           </Routes>
        </div>
    );
}

export default App;
