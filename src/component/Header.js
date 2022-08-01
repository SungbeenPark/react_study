import {Link} from "react-router-dom";

const Header = ()=>{

    return <>
        <header id="header" className="header">
            <div className="header">
                <div className="inner">
                    <Link to="/page1" >page1</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/page2" >page2</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/page3" >page3</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>
        </header>
    </>;
}

export default Header;