import {Link} from "react-router-dom";
import c from "./Header.module.css"

const Header = () => {
    return (
        <div className={c.header}>
            <div>
                <h><Link to='/'>CV</Link></h>
            </div>
            <div>
                <h><Link to='/admin'>Admin</Link></h>
            </div>
            <div>
                <h><Link to='/login'>Login</Link></h>
            </div>
        </div>
    );
};

export default Header