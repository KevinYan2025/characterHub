import '../App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = ({ showCreate, posts }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = searchQuery.trim() !== ''
  ? posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : [];

const noPostsFound = searchQuery.trim() !== '' && filteredPosts.length === 0;
  return (
    <div className="header">
      <h3>AnimeHub</h3>

      <label>
        Search:
        <input type="text" value={searchQuery} onChange={handleSearch} />
      </label>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          {showCreate && (
            <li>
              <Link to="/post/new">Create New Post</Link>
            </li>
          )}
        </ul>
      </nav>

      {/* Display the number of filtered posts */}
      {searchQuery && <p>{filteredPosts.length} posts found</p>}
    </div>
  );
};

export default Header;
