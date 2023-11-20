import '../App.css'
import {Link} from 'react-router-dom'
const Header =({showCreate}) => {
    return (
            <div className="header">
                <h3>AnimeHub</h3>

                <label>search:
                <input type="text" />
                </label>

                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>

                        {showCreate &&<li>
                            <Link to='/post/new'>Create New Post</Link>
                        </li>}
                    </ul>
                </nav>
            </div>
    )
}
export default Header