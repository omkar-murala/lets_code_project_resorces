
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">MyApp</div>
        <div className="flex space-x-4">
          <Link href="/">
            <span className="text-white hover:bg-gray-700 px-3 py-2 rounded">About</span>
          </Link>
          <Link href="/Resources">
            <span className="text-white hover:bg-gray-700 px-3 py-2 rounded">Resources</span>
          </Link>
          <Link href="/podcast">
            <span className="text-white hover:bg-gray-700 px-3 py-2 rounded">podcast</span>
          </Link>
          <Link href="/contact">
          <span className="text-white hover:bg-gray-700 px-3 py-2 rounded">contact us</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
