import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Conference Management
      </h1>
      <div className="space-x-4">
        <Link
          to="/conferences"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Manage Conferences
        </Link>
        <Link
          to="/keynotes"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Manage Keynotes
        </Link>
      </div>
    </div>
  );
};

export default Home;
