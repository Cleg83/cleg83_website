import { Link } from 'react-router-dom';

function NavButton({ to, children }) {
  return (
    <Link to={to}>
      <button className="rounded px-3 py-1 bg-none active:bg-gray-800 hover:outline-2 hover:outline-black focus:outline-black">{children}</button>
    </Link>
  );
}

function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="p-4 flex gap-4 justify-end">
          <NavButton to="/">Home</NavButton>
          <NavButton to="/about">About</NavButton>
          <NavButton to="/blog">Blog</NavButton>
          <NavButton to="/contact">Contact</NavButton>
        </div>
      </nav>
    );
  }

export default Navbar;

