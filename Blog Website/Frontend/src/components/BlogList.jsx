function BlogList({ blogs }) {
  if (blogs.length === 0) {
    return (
      <p className="text-center text-gray-400 text-lg mt-10">
         No blogs available.
      </p>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto mt-8">
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{blog.title}</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{blog.content}</p>
          <p className="text-sm text-gray-500 mt-4 italic">— {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
