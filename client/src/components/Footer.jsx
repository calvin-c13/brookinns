import { Link } from "react-router-dom";
import headerHouseLogo from "../assets/logos/homePageLogo.png";
import oneLineWhiteLogo from "../assets/logos/headerNameWhite.png";

const commonStyles = "text-white w-full sm:w-1/4";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="flex flex-col sm:flex-row items-center max-w-screen-xxl mx-auto py-4 px-4 sm:px-8">
        {/* Left: Logos */}
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-1/4 mb-4 sm:mb-0">
          <Link to="/">
            <img
              src={headerHouseLogo}
              alt="Header Logo"
              className="h-7 w-auto object-contain"
            />
          </Link>
          <Link to="/">
            <img
              src={oneLineWhiteLogo}
              alt="Header Name"
              className="h-6 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row flex-1 text-center justify-center items-center space-y-2 sm:space-x-28 sm:space-y-0 w-full">
          <p className={commonStyles}>All rights reserved</p>
          <p className={commonStyles}>© 2025 BrookInns</p>
          <p className={commonStyles}>Not affiliated with SBU</p>
        </div>
      </div>
    </footer>
  );
}
