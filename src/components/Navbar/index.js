import React from "react";
import Header from "../Header";

const Navbar = (props) => {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(document.documentElement.scrollTop);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 30 ? "fixed-navbar animated fadeInDown active" : "fixed-navbar";
  const logoStyle = scroll > 30 ? "logo-image minified" : "logo-image";
  const logoTheme = scroll > 30 ? "black" : "white";
  const menuStyle = scroll > 30 ? "main-menu minified" : "main-menu";
  const showMenuStyle = scroll > 30 ? "showmenu minified" : "showmenu white";

  return (
    <div className={className}>
      <Header
        logoTheme={logoTheme}
        logoStyle={logoStyle}
        menuStyle={menuStyle}
        showMenuStyle={showMenuStyle}
        handleSectionChange={props.handleSectionChange}
      />
    </div>
  );
};

export default Navbar;
