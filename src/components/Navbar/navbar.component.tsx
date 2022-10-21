import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.component.css";

const Navbar = () => {
  const [toggled, setToggle] = useState(false);

  const navigated = () => {
    if (toggled) setToggle(toggled => (toggled = !toggled));
  };

  const links = () => {
    return (
      <>
        <li>
          <a
            className="rounded text-base font-medium text-slate-900 transition-all duration-200 hover:text-opacity-60 focus:outline-none focus:ring-1 focus:ring-slate-800	 focus:ring-offset-2"
            href="/#features"
            onClick={navigated}
          >
            Features
          </a>
        </li>
        <li>
          <a
            className="rounded text-base font-medium text-slate-900 transition-all duration-200 hover:text-opacity-60 focus:outline-none focus:ring-1 focus:ring-slate-800 focus:ring-offset-2"
            href="/#team"
            onClick={navigated}
          >
            Team
          </a>
        </li>
        <li>
          <NavLink
            className="rounded text-base font-medium text-slate-900 transition-all duration-200 hover:text-opacity-60 focus:outline-none focus:ring-1 focus:ring-slate-800 focus:ring-offset-2"
            to={"/blog"}
            onClick={navigated}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <a
            className="flex items-center justify-center rounded-xl border border-slate-900 bg-transparent px-5 py-2 text-base font-semibold leading-7 text-slate-900 transition-all duration-200 hover:bg-slate-900 hover:text-white focus:bg-slate-900 focus:text-white focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 w-full sm:w-auto"
            href="mailto:mdelgaud@stevens.edu"
            target="_blank"
          >
            Contact
          </a>
        </li>
      </>
    );
  };

  const hamburgerMenu = () => {
    return (
      <>
        <div
          className={`hamburger-menu-button ${toggled ? "open" : ""} `}
          onClick={() => setToggle(toggled => (toggled = !toggled))}
        >
          <div className="hamburger-menu" />
        </div>
      </>
    );
  };

  return (
    <div className="relative py-4 md:py-6 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-nowrap items-center justify-between gap-4 w-auto">
          <a
            className="text-3xl lg:text-4xl font-semibold rounded text-slate-900 transition-all duration-200 hover:text-opacity-50 focus:outline-none focus:ring-1 focus:ring-slate-800 focus:ring-offset-2"
            href="/#home"
          >
            Prism
          </a>
          <nav className="sm:block hidden">
            <ul className="flex list-none items-center gap-9">{links()}</ul>
          </nav>
          <span className="sm:hidden block">{hamburgerMenu()}</span>
        </div>
        {toggled ? (
          <nav className="sm:hidden block">
            <ul className="grid list-none flex-col items-start px-1 py-5 gap-4">
              {links()}
            </ul>
          </nav>
        ) : null}
      </div>
    </div>
  );
};

export { Navbar };
