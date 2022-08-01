import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Page1, Page2, Page3} from "./component/pages";
import Header from "./component/Header";

function App() {
    return (
        <BrowserRouter>
            <div id="wrap">
                <Routes>
                    <Route path="*" element={<Header/>}/>
                </Routes>
                <Routes>
                    <Route path='/page1' element={<Page1/>}/>
                    <Route path='/page2' elemnet={<Page2/>}>
                        <Route index element={<Page2/>}></Route>
                        <Route path=":noticeId" element={<Page2/>}></Route>
                    </Route>
                    <Route path='/page3' element={<Page3/>}/>
                    <Route
                        path="*"
                        element={<Page1/>}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
