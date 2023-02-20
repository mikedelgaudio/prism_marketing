import { blogs } from "./data";

const BlogCard = () => {
  return (
    <>
      {blogs?.map(blog => {
        return (
          <article
            key={blog.date.getTime()}
            className="h-full flex p-6 gap-5 flex-col lg:flex-row lg:gap-20  bg-slate-100 py-7 rounded-lg shadow-md"
          >
            <div className="max-w-md px-4 md:px-0 sm:max-w-xl">
              <div className="lg:min-h-[8rem] md:min-h-[7rem]">
                <h2 className="text-3xl lg:text-5xl font-bold leading-tight flex flex-col">
                  <span className="text-lg">
                    {blog.date.getMonth() + 1}/{blog.date.getDate()}/
                    {blog.date.getFullYear()}
                  </span>
                  {blog.title}
                </h2>
              </div>

              {blog?.imgUrl ? (
                <div className="flex items-center justify-center pt-4">
                  <img
                    className="object-cover h-[200px] w-[600px] rounded-xl"
                    src={blog?.imgUrl}
                    alt={blog?.imgAlt}
                    aria-hidden="true"
                    height={200}
                    width={600}
                  />
                </div>
              ) : (
                <></>
              )}
              <h3 className="font-bold text-lg pt-3">Members in attendance</h3>
              <p className="text-md sm:text-xl">{blog.membersInAttendance}</p>

              <h3 className="font-bold text-lg pt-3">Topics of discussion</h3>
              <ul className="text-md list-disc pl-5 sm:text-xl">
                {blog.topicsOfDiscussion.map(topic => {
                  return <li key={topic}>{topic}</li>;
                })}
              </ul>
            </div>
          </article>
        );
      })}
    </>
  );
};

export { BlogCard };
