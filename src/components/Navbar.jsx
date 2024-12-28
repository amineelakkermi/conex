import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { menu, close, logo } from "../assets";
import { navItems } from "../constants/data";
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const handleLanguageToggle = () => {
    const newLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLanguage);
    setActive(newLanguage);
    window.location.reload();
  };

  return (
    <nav className={`w-[100%] z-[999] md:py-3 py-2 md:px-16 px-6 flex items-center justify-between navbar ${isScrolled ? 'bg-blue' : ''} fixed top-0 left-0 right-0 transition-all duration-300`}>
      <Link to="/home" onClick={scrollToTop}>
      <img src={logo} alt="logo" className="w-[100%] md:h-[60px] h-[50px] object-cover" />
      </Link>
      <ul className="list-none lg:flex hidden justify-center items-center flex-1 gap-16">
        {navItems.map((item, index) => (
          <li key={index} className="flex justify-center items-center">
            <Link
              className="nav-list-li cursor-pointer text-[20px] text-white duration-300 hover:text-orange"
              to={item.url}
              onClick={() => {
                scrollToTop();
                setToggle(false);
              }}
            >
              {currentLanguage === "ar" ? item.titleAr : item.titleEn}
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:flex hidden items-center gap-3">
        <a
          href="#"
          id="language-toggle"
          className="text-white duration-300 hover:text-orange"
          onClick={handleLanguageToggle}
        >
          {currentLanguage === 'en' ? 'Arabic' : 'English'}
        </a>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.08301 8.9998C6.08301 9.8332 6.08301 10.6665 6.18301 11.4998H5.99202C5.08902 11.7562 4.22502 12.1347 3.42502 12.6248C2.94601 12.9126 2.49602 13.2476 2.08301 13.6248C1.16301 12.2519 0.671021 10.6362 0.671021 8.9832C0.671021 7.3301 1.16301 5.7144 2.08301 4.3415C2.49602 4.7187 2.94601 5.0538 3.42502 5.3415C4.22101 5.8433 5.08101 6.233 5.98302 6.4998H6.18301C6.11702 7.3332 6.08301 8.1665 6.08301 8.9998ZM2.58301 3.6832C2.99402 4.0656 3.44301 4.4036 3.92502 4.6915C4.64102 5.1182 5.41202 5.4462 6.21701 5.6665C6.31102 4.6696 6.47801 3.6808 6.71701 2.7082C6.86502 2.0469 7.08502 1.4041 7.37502 0.791504C5.49301 1.1774 3.80202 2.1983 2.58301 3.6832ZM10.592 0.816504C10.881 1.4291 11.102 2.0719 11.25 2.7332C11.487 3.6976 11.654 4.678 11.75 5.6665C12.558 5.441 13.331 5.1074 14.05 4.6748C14.539 4.3937 14.998 4.0613 15.417 3.6832C14.186 2.2011 12.482 1.1887 10.592 0.816504ZM7.06702 12.1082C7.17302 13.2682 7.37901 14.4169 7.68301 15.5415C7.84001 16.1724 8.09001 16.7763 8.42502 17.3332H9.00002H9.57501C9.90901 16.7815 10.159 16.1833 10.317 15.5582C10.621 14.4336 10.827 13.2849 10.933 12.1248C9.65802 11.861 8.34401 11.8553 7.06702 12.1082ZM11 6.7248C10.341 6.8525 9.67102 6.9167 9.00002 6.9165C8.32901 6.9167 7.65901 6.8525 7.00002 6.7248C6.94202 7.4332 6.91702 8.1998 6.91702 8.9998C6.91702 9.7998 6.91702 10.5665 7.00002 11.2832C8.32101 11.0289 9.67902 11.0289 11 11.2832C11.058 10.5748 11.083 9.8082 11.083 9.0082C11.083 8.2082 11.058 7.4332 11 6.7248ZM10.317 2.4582C10.16 1.8273 9.91002 1.2234 9.57501 0.666504H9.00002H8.42502C8.09102 1.2182 7.84102 1.8164 7.68301 2.4415C7.37901 3.5661 7.17302 4.7148 7.06702 5.8748C8.34302 6.1332 9.65701 6.1332 10.933 5.8748C10.826 4.7204 10.62 3.5773 10.317 2.4582ZM15.917 4.3582C15.504 4.7354 15.054 5.0704 14.575 5.3582C13.776 5.8542 12.912 6.2383 12.008 6.4998H11.817C11.883 7.3332 11.917 8.1665 11.917 8.9998C11.917 9.8332 11.917 10.6665 11.817 11.4998L12.017 11.5498C12.917 11.8062 13.778 12.1847 14.575 12.6748C15.054 12.9626 15.504 13.2976 15.917 13.6748C16.837 12.3019 17.329 10.6862 17.329 9.0332C17.329 7.3801 16.837 5.7644 15.917 4.3915V4.3582ZM14.075 13.3082C13.358 12.8814 12.588 12.5535 11.783 12.3332C11.689 13.3301 11.522 14.3189 11.283 15.2915C11.135 15.9528 10.915 16.5956 10.625 17.2082C12.515 16.836 14.219 15.8236 15.45 14.3415C15.03 13.9484 14.569 13.6019 14.075 13.3082ZM6.75002 15.2665C6.51302 14.3021 6.34601 13.3217 6.25002 12.3332C5.44202 12.5587 4.66801 12.8923 3.95001 13.3248C3.46101 13.606 3.00201 13.9384 2.58301 14.3165C3.81401 15.7986 5.51802 16.811 7.40802 17.1832C7.11902 16.5706 6.89801 15.9278 6.75002 15.2665Z" fill="#B0BABF"/>
        </svg>  
      </div>

      <div className="lg:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[20px] h-[20px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <div className={`${
          !toggle ? "hidden" : "flex" 
        } z-20 p-6 bg-[dark] absolute top-20 ${currentLanguage === "ar" ? "left-0" : "right-0"} mx-5 my-2 min-w-[180px] rounded-2xl bg-blue justify-center items-center sidebar flex-col gap-8`}>
          <ul className="list-none flex justify-center items-center gap-8 flex-col">
            {navItems.map((item, index) => (
              <li key={index} className="flex justify-center items-center">
                <Link
                  className='nav-list-li cursor-pointer text-[20px] text-white duration-300 hover:text-orange'
                  to={item.url}
                  onClick={
                    () => { scrollToTop() ;setToggle(false)}}
                >
                {currentLanguage === "ar" ? item.titleAr : item.titleEn}
                </Link>
              </li>
            ))}
            
          </ul>
          <div className="flex items-center gap-3">
        <a
          href="#"
          id="language-toggle"
          className="text-white duration-300 hover:text-orange"
          onClick={handleLanguageToggle}
        >
          {currentLanguage === 'en' ? 'Arabic' : 'English'}

        </a>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.08301 8.9998C6.08301 9.8332 6.08301 10.6665 6.18301 11.4998H5.99202C5.08902 11.7562 4.22502 12.1347 3.42502 12.6248C2.94601 12.9126 2.49602 13.2476 2.08301 13.6248C1.16301 12.2519 0.671021 10.6362 0.671021 8.9832C0.671021 7.3301 1.16301 5.7144 2.08301 4.3415C2.49602 4.7187 2.94601 5.0538 3.42502 5.3415C4.22101 5.8433 5.08101 6.233 5.98302 6.4998H6.18301C6.11702 7.3332 6.08301 8.1665 6.08301 8.9998ZM2.58301 3.6832C2.99402 4.0656 3.44301 4.4036 3.92502 4.6915C4.64102 5.1182 5.41202 5.4462 6.21701 5.6665C6.31102 4.6696 6.47801 3.6808 6.71701 2.7082C6.86502 2.0469 7.08502 1.4041 7.37502 0.791504C5.49301 1.1774 3.80202 2.1983 2.58301 3.6832ZM10.592 0.816504C10.881 1.4291 11.102 2.0719 11.25 2.7332C11.487 3.6976 11.654 4.678 11.75 5.6665C12.558 5.441 13.331 5.1074 14.05 4.6748C14.539 4.3937 14.998 4.0613 15.417 3.6832C14.186 2.2011 12.482 1.1887 10.592 0.816504ZM7.06702 12.1082C7.17302 13.2682 7.37901 14.4169 7.68301 15.5415C7.84001 16.1724 8.09001 16.7763 8.42502 17.3332H9.00002H9.57501C9.90901 16.7815 10.159 16.1833 10.317 15.5582C10.621 14.4336 10.827 13.2849 10.933 12.1248C9.65802 11.861 8.34401 11.8553 7.06702 12.1082ZM11 6.7248C10.341 6.8525 9.67102 6.9167 9.00002 6.9165C8.32901 6.9167 7.65901 6.8525 7.00002 6.7248C6.94202 7.4332 6.91702 8.1998 6.91702 8.9998C6.91702 9.7998 6.91702 10.5665 7.00002 11.2832C8.32101 11.0289 9.67902 11.0289 11 11.2832C11.058 10.5748 11.083 9.8082 11.083 9.0082C11.083 8.2082 11.058 7.4332 11 6.7248ZM10.317 2.4582C10.16 1.8273 9.91002 1.2234 9.57501 0.666504H9.00002H8.42502C8.09102 1.2182 7.84102 1.8164 7.68301 2.4415C7.37901 3.5661 7.17302 4.7148 7.06702 5.8748C8.34302 6.1332 9.65701 6.1332 10.933 5.8748C10.826 4.7204 10.62 3.5773 10.317 2.4582ZM15.917 4.3582C15.504 4.7354 15.054 5.0704 14.575 5.3582C13.776 5.8542 12.912 6.2383 12.008 6.4998H11.817C11.883 7.3332 11.917 8.1665 11.917 8.9998C11.917 9.8332 11.917 10.6665 11.817 11.4998L12.017 11.5498C12.917 11.8062 13.778 12.1847 14.575 12.6748C15.054 12.9626 15.504 13.2976 15.917 13.6748C16.837 12.3019 17.329 10.6862 17.329 9.0332C17.329 7.3801 16.837 5.7644 15.917 4.3915V4.3582ZM14.075 13.3082C13.358 12.8814 12.588 12.5535 11.783 12.3332C11.689 13.3301 11.522 14.3189 11.283 15.2915C11.135 15.9528 10.915 16.5956 10.625 17.2082C12.515 16.836 14.219 15.8236 15.45 14.3415C15.03 13.9484 14.569 13.6019 14.075 13.3082ZM6.75002 15.2665C6.51302 14.3021 6.34601 13.3217 6.25002 12.3332C5.44202 12.5587 4.66801 12.8923 3.95001 13.3248C3.46101 13.606 3.00201 13.9384 2.58301 14.3165C3.81401 15.7986 5.51802 16.811 7.40802 17.1832C7.11902 16.5706 6.89801 15.9278 6.75002 15.2665Z" fill="#B0BABF"/>
        </svg>  
          </div>
          
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
