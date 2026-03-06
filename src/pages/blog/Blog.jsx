import { useParams } from "react-router-dom";
import BlogHero from "../../components/blog/BlogHero";
import BlogMoreInsights from "../../components/blog/BlogMoreInsights";
import { blogs } from "../../utils/data/blogs";

const Blog = () => {

  const { slug } = useParams();

  const index = blogs.findIndex(b => b.slug === slug);
  const blog = blogs[index];

  const prevBlog = blogs[index - 1];
  const nextBlog = blogs[index + 1];

  const Content = blog.content; // important

  return (
    <div className="bg-[#F4F4F7] font-inter">

      <div className="max-w-5xl mx-auto px-6 py-14">

        <BlogHero blog={blog} prevBlog={prevBlog} nextBlog={nextBlog}/>

        {/* Blog Content */}
        <div className="mt-10">
          <Content />
        </div>

      </div>

      <BlogMoreInsights currentSlug={slug} />

    </div>
  );
};

export default Blog;