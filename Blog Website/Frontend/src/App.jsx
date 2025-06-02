import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddBlog from './pages/AddBlog';
import AllBlogs from './pages/AllBlogs';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <nav className='bg-gray-900 w-full shadow-lg'>
          <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
            <p className='text-2xl font-bold text-white'>Blogger</p>
            <div className='space-x-4'>
              <Link
                to="/"
                className='text-gray-300 hover:text-white transition duration-200 font-medium'
              >
                All Blogs
              </Link>
              <Link
                to="/add"
                className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 font-medium'
              >
                Add Blog
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className='p-4 bg-gray-100 min-h-screen'>
        <Routes>
          <Route path="/" element={<AllBlogs />} />
          <Route path="/add" element={<AddBlog />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
