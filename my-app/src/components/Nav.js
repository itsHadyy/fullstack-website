import './Style.css';
import logo from "./assets/logo.png";

function Nav() {
    return (
        <header>
            <img src={logo} />
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;