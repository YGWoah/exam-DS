import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Conference } from '../types';
import axios from 'axios';
import { conferenceApi } from '@app/api';
const ConferenceList: React.FC = () => {
  const [conferences, setConferences] = useState<Conference[]>([]);

  useEffect(() => {
    // In a real application, you would fetch this data from your API
    const mockConferences: Conference[] = [
      {
        id: 1,
        title: 'React Conference 2023',
        type: 'academic',
        date: '2023-09-15',
        duration: '3 days',
        registrations: 500,
        score: 4.8,
      },
      {
        id: 2,
        title: 'AI Summit',
        type: 'commercial',
        date: '2023-10-20',
        duration: '2 days',
        registrations: 300,
        score: 4.5,
      },
    ];

    conferenceApi
      .get('/api/conferences')
      .then((response) => {
        console.log(response.data);
        setConferences(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setConferences(mockConferences);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Conferences</h1>
        <Link
          to="/conferences/new"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Conference
        </Link>
      </div>
      <div className="grid gap-4">
        {conferences.map((conference) => (
          <div
            key={conference.id}
            className="border p-4 rounded-lg shadow bg-white"
          >
            <h2 className="text-xl font-semibold">
              {conference.title}
            </h2>
            <p>Type: {conference.type}</p>
            <p>Date: {conference.date}</p>
            <p>Duration: {conference.duration}</p>
            <p>Registrations: {conference.registrations}</p>
            <p>Score: {conference.score}</p>
            <div className="mt-4">
              <Link
                to={`/conferences/${conference.id}`}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mr-2"
              >
                View Details
              </Link>
              <Link
                to={`/conferences/${conference.id}/edit`}
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

export default ConferenceList;
