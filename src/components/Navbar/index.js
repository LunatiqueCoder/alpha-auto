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

  const className = scroll > 80 ? "fixed-navbar animated fadeInDown active" : "fixed-navbar";
  const logoStyle = scroll > 80 ? "logo-image minified" : "logo-image";

  return (
    <div className={className}>
        <Header logoStyle={logoStyle} handleSectionChange={props.handleSectionChange}/>
    </div>
  );
}

export default Navbar;
