import BlogNavigation from "./BlogNavigation";

const BlogHero = ({ blog, prevBlog, nextBlog }) => {

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h4 className="text-lg font-semibold text-[#161D2D]">
            {blog.smallTitle}
          </h4>

          <h1 className="text-3xl font-semibold text-[#05129C] mt-1">
            {blog.title}
          </h1>

          <div className="w-20 h-[2px] bg-[#444DB5] mt-4"></div>

          <p className="mt-4 text-sm text-[#161D2D]">
            {blog.date} • {blog.readTime} • {blog.category}
          </p>
        </div>
        <BlogNavigation prev={prevBlog} next={nextBlog} />
      </div>
      <img
        src={blog.image}
        className="rounded-xl mt-8 w-full"
      />
    </div>
  );
};

export default BlogHero;