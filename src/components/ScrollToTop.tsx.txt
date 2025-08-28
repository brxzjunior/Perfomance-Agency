import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full shadow-lg hover:shadow-[var(--glow-neon)] transition-all duration-300 hover:scale-110 group"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="h-6 w-6 text-primary-foreground mx-auto group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;