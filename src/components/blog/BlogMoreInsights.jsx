import { Link } from "react-router-dom";
import { blogs } from "../../utils/data/blogs";

const BlogMoreInsights = ({ currentSlug }) => {

  const moreBlogs = blogs.filter(b => b.slug !== currentSlug);

  return (
    <div className="max-w-5xl mx-auto px-6 pb-20">

      <h2 className="text-xl font-semibold mb-6">
        Explore More Insights
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {moreBlogs.map(blog => (

          <Link
            key={blog.slug}
            to={`/blogs/${blog.slug}`}
            className="relative rounded-xl overflow-hidden group"
          >

            <img
              src={blog.image}
              className="w-full h-[260px] object-cover hover:scale-105 transition-all duration-300"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"/>

            <div className="absolute bottom-6 left-6 text-white">

              <p className="text-xs opacity-80">
                {blog.category}
              </p>

              <h3 className="mt-2 font-medium">
                {blog.title}
              </h3>

              <p className="text-xs mt-3 opacity-80">
                {blog.readTime}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
};

export default BlogMoreInsights;