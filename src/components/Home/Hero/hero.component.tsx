import { Link } from "react-router-dom";
import banner from "../../../assets/hero/banner.jpg";
import "./hero.component.css";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative py-12 sm:py-16 lg:pt-10 lg:pb-30 xl:pt-20 xl:pb-36 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-5 flex-col lg:flex-row lg:gap-20 items-center justify-center">
          <div className="max-w-md sm:max-w-xl">
            <h1 className="font-pj text-4xl font-bold leading-tight text-slate-900 sm:text-5xl sm:leading-tight lg:text-7xl lg:leading-tight">
              Get serious with{" "}
              <span className="text-gradient">productivity</span>
            </h1>
            <p className="pt-4 text-lg sm:text-xl ">
              Step up your productivity! Whether work, school, or play Prism can
              help you increase focus and decrease wasted potential.
            </p>
            <div className="flex items-center justify-end pt-6">
              <Link
                to="/#features"
                className="flex items-center justify-center rounded-xl border border-slate-900 bg-slate-900 px-5 py-3 text-md lg:text-xl font-semibold leading-7 text-white transition-all duration-200 hover:bg-transparent hover:text-slate-900 focus:bg-transparent focus:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center pt-6 lg:pt-0">
            <img
              className="object-cover h-[400px] w-[400px] rounded-xl"
              src={banner}
              alt="Hero banner"
              aria-hidden="true"
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export { Hero };
