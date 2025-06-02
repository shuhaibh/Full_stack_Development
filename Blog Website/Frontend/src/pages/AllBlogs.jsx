import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogList from '../components/BlogList';

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4 text-center'>All Blogs</h1>
      <BlogList blogs={blogs} />
    </div>
  );
}

export default AllBlogs;
