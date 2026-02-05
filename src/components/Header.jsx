import navLinks from "../assets/navLinks";

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <img src="/img/dc-logo.png" alt="DC Logo" className="logo" />
      
      <nav>
        <ul>
          {navLinks.map((link, index) => (
          <li key={index}>{link}</li>
           ))}
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Header;