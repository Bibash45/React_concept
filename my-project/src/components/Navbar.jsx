import { useState } from "react"; // Import useState
import { links } from "../data";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(""); // State to track active link

  return (
    <nav className="bg-emerald-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-20 sm:items-end sm:py-8">
        <h2 className="text-3xl font-bold">
          Bibash<span className="text-emerald-600">Chaudhary</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            const isActive = activeLink === href; // Check if this link is active
            return (
              <a
                key={id}
                href={href}
                className={`capitalize text-lg tracking-wider duration-300 ${
                  isActive ? "text-emerald-600" : "hover:text-emerald-600"
                }`}
                onClick={() => setActiveLink(href)} // -->Set active link on click
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
