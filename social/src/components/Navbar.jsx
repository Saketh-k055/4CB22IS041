import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-4">
      <Link to="/" className="hover:underline">
        Feed
      </Link>
      <Link to="/top-users" className="hover:underline">
        Top Users
      </Link>
      <Link to="/trending-posts" className="hover:underline">
        Trending Posts
      </Link>
    </nav>
  );
}
