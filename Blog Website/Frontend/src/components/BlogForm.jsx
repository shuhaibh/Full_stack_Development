import { useState } from 'react';
import axios from 'axios';

function BlogForm() {
  const [form, setForm] = useState({ title: '', content: '', author: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/blogs', form);
      alert('✅ Blog added!');
      setForm({ title: '', content: '', author: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-8 shadow-xl rounded-2xl space-y-6 border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">Add a New Blog</h2>

      <div>
        <label htmlFor="title" className="block mb-1 text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter blog title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="content" className="block mb-1 text-sm font-medium text-gray-700">Content</label>
        <textarea
          name="content"
          id="content"
          placeholder="Write your blog content here..."
          value={form.content}
          onChange={handleChange}
          rows="6"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="author" className="block mb-1 text-sm font-medium text-gray-700">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Your name"
          value={form.author}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
        >
          Add Blog
        </button>
      </div>
    </form>
  );
}

export default BlogForm;
