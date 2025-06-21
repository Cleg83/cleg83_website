import { Link } from 'react-router-dom';

function NavButton({ to, children }) {
  return (
    <Link to={to}>
      <button className="rounded px-3 py-1 bg-none active:bg-gray-600 hover:bg-gray-500 focus:bg-gray-500 text-white">{children}</button>
    </Link>
  );
}

function Navbar() {
    return (
      <nav className="bg-gray-700">
        <div className="w-full p-4 flex gap-4">
          <NavButton to="/">Home</NavButton>
          <NavButton to="/about">About</NavButton>
          <NavButton to="/blog">Blog</NavButton>
          <NavButton to="/contact">Contact</NavButton>
        </div>
      </nav>
    );
  }

export default Navbar;

