import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div className="headernav">
            <h1>My Online Portfolio</h1>
            <div className="Navi">
                <Link to="/">Home</Link>
                <Link to="/Activities">Activities</Link>
            </div>
        </div>
    )
}

export default Header
