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
            {blog.date} <span className="text-[#969696]">•</span> {blog.readTime}{" "}
            <span className="text-[#969696]">•</span> {blog.category}
          </p>
        </div>

        <BlogNavigation prev={prevBlog} next={nextBlog} />
      </div>

      {/* 🔥 Image Hover Wrapper */}
      <div className="mt-8 overflow-hidden rounded-xl group cursor-pointer">
        <img
          src={blog.image}
          alt="blog"
          className="
            w-full h-full object-cover
                    transition-all duration-500 ease-out
                    group-hover:scale-105 group-hover:-translate-y-1
          "
        />
      </div>
    </div>
  );
};

export default BlogHero;