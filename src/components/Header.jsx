import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to='/' className="item">
             Streamy
            </Link>
            <div className="right menu">
                <Link to='/streams/new' className="item">
                  All Streams
                </Link>
            </div>
        </div>
    );
};

export default Header;