import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Keynote } from '../types';

const KeynoteList: React.FC = () => {
  const [keynotes, setKeynotes] = useState<Keynote[]>([]);

  useEffect(() => {
    // In a real application, you would fetch this data from your API
    const mockKeynotes: Keynote[] = [
      {
        id: 1,
        nom: 'Doe',
        prenom: 'John',
        email: 'john.doe@example.com',
        fonction: 'CTO',
      },
      {
        id: 2,
        nom: 'Smith',
        prenom: 'Jane',
        email: 'jane.smith@example.com',
        fonction: 'AI Researcher',
      },
    ];
    setKeynotes(mockKeynotes);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Keynotes</h1>
        <Link
          to="/keynotes/new"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Keynote
        </Link>
      </div>
      <div className="grid gap-4">
        {keynotes.map((keynote) => (
          <div
            key={keynote.id}
            className="border p-4 rounded-lg shadow bg-white"
          >
            <h2 className="text-xl font-semibold">
              {keynote.prenom} {keynote.nom}
            </h2>
            <p>Email: {keynote.email}</p>
            <p>Function: {keynote.fonction}</p>
            <div className="mt-4">
              <Link
                to={`/keynotes/${keynote.id}`}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mr-2"
              >
                View Details
              </Link>
              <Link
                to={`/keynotes/${keynote.id}/edit`}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeynoteList;
