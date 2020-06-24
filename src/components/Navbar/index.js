import React from "react";
import Header from '../header';

const Navbar = (props) => {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(document.documentElement.scrollTop);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 30 ? "fixed-navbar animated fadeInDown active" : "fixed-navbar";
  const logoStyle = scroll > 30 ? "logo-image minified" : "logo-image";
  const menuStyle = scroll > 30 ? "main-menu minified" : "main-menu";
  const showMenuStyle = scroll > 30 ? "showmenu minified" : "showmenu";

  return (
    <div className={className}>
        <Header
          logoStyle={logoStyle}
          menuStyle={menuStyle}
          handleSectionChange={props.handleSectionChange}
          showMenuStyle={showMenuStyle}
        />
    </div>
  );
}

export default Navbar;
