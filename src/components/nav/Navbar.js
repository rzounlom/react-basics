import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="#props">RB </a>
      </div>
      <ul>
        <li>
          <a href="#props">Props </a>
        </li>
        <li>
          <a href="#state">State </a>
        </li>
        <li>
          <a href="#lifecycle">Lifecycle </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
