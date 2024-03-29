import { Link } from "react-router-dom";

const Footer = () => {
  const links = () => {
    return (
      <>
        <li>
          <Link
            className="rounded text-base font-medium text-slate-900 transition-all duration-200 hover:text-opacity-60 focus:outline-none focus:ring-1 focus:ring-slate-800	 focus:ring-offset-2"
            to="/#features"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            className="rounded text-base font-medium text-slate-900 transition-all duration-200 hover:text-opacity-60 focus:outline-none focus:ring-1 focus:ring-slate-800 focus:ring-offset-2"
            to="/#team"
          >
            Team
          </Link>
        </li>
        <li>
          <a
            className="rounded text-base font-medium text-slate-900 transition-all duration-200 hover:text-opacity-60 focus:outline-none focus:ring-1 focus:ring-slate-800 focus:ring-offset-2"
            href="mailto:mdelgaud@stevens.edu"
            target="_blank"
          >
            Contact
          </a>
        </li>
      </>
    );
  };
  return (
    <section className="relative py-12 bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-col">
          <a
            className="text-3xl lg:text-4xl font-semibold rounded text-slate-900 transition-all duration-200 hover:text-opacity-50 focus:outline-none focus:ring-1 focus:ring-slate-800 focus:ring-offset-2"
            href="#home"
          >
            Prism
          </a>
          <nav className="pt-1">
            <ul className="flex list-none items-center gap-9">{links()}</ul>
          </nav>
          <p className="text-slate-500 pt-6  text-sm">Made in Hoboken, NJ</p>
        </div>
      </div>
    </section>
  );
};

export { Footer };
