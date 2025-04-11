import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedPage from './pages/FeedPage';
import TopUsersPage from './pages/TopUsersPage';
import TrendingPostsPage from './pages/TrendingPostsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/top-users" element={<TopUsersPage />} />
        <Route path="/trending-posts" element={<TrendingPostsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
