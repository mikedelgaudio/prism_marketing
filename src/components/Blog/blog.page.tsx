import { BlogCard } from "./BlogCard";
import { Header } from "./Header";

const Blog = () => {
  return (
    <section id="blog" className="relative pt-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="flex flex-col items-center py-6 gap-10">
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export { Blog };
