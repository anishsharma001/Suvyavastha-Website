import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
const BlogNavigation = ({ prev, next }) => {

  return (
    <div className="flex justify-between items-center gap-4">

      {prev && (
        <Link
          to={`/blogs/${prev.slug}`}
          className="flex items-center gap-2 bg-white border border-gray-200 rounded-full p-2 text-[#000000]"
        >
          <ChevronLeft />
        </Link>
      )}

      {next && (
        <Link
          to={`/blogs/${next.slug}`}
          className="flex items-center gap-2 ml-auto bg-white border border-gray-200 rounded-full p-2 text-[#000000]"
        >
          <ChevronRight />
        </Link>
      )}

    </div>
  );

};

export default BlogNavigation;