import {Route, Routes} from "react-router-dom";

import {HomePage} from "./pages";
import {Chat} from "./components";
import './App.scss';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/chuck_norris_chat' element={<HomePage/>}>
                    <Route path={':id'} element={<Chat/>}/>
                </Route>
                <Route path={'/chuck_norris_chat/:id'} element={<HomePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
