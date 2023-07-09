import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="md:flex display justify-between">
      <nav className="container max-w-xs md:py-6 pt-6 px-10">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="text-red-500 border-b-4 border-solid border-red-500 pb-4">
            À la carte
          </Link>
        </h1>
      </nav>
    </header>
  );
};

export default Header;
