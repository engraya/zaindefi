import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="text-lg text-gray-500 mb-8">Sorry, the page you are looking for does not exist.</p>
    <Link
      to="/"
      className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Go Home
    </Link>
  </div>
);

export default NotFound;