import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navLinks } from "../../constants/Index";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const handleScroll = (id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}`, offsetY: 80 },
      ease: "power2.inOut",
    });
  };
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent", backdropFilter: "blur(10px)" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(20px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li
              className="cursor-pointer"
              onClick={() => handleScroll(link.id)}
            >
              {link.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
