import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Conference } from '../types';
import { conferenceApi } from '@app/api';

const ConferenceForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [conference, setConference] = useState<Conference>({
    id: 0,
    title: '',
    type: 'academic',
    date: '',
    duration: '',
    registrations: 0,
    score: 0,
  });

  useEffect(() => {
    if (isEditing) {
      // In a real application, you would fetch the conference data from your API
      // This is just a mock example
      const mockConference: Conference = {
        id: 1,
        title: 'React Conference 2023',
        type: 'academic',
        date: '2023-09-15',
        duration: '3 days',
        registrations: 500,
        score: 4.8,
      };
      setConference(mockConference);
    }
  }, [isEditing]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your API
    console.log('Submitting conference:', conference);

    conferenceApi
      .post('/api/conferences', conference)
      .then((response) => {
        console.log(response.data);
        navigate('/conferences');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setConference((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        {isEditing ? 'Edit Conference' : 'Add New Conference'}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={conference.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700"
          >
            Type
          </label>
          <select
            id="type"
            name="type"
            value={conference.type}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="academic">Academic</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={conference.date}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-700"
          >
            Duration
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={conference.duration}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="registrations"
            className="block text-sm font-medium text-gray-700"
          >
            Registrations
          </label>
          <input
            type="number"
            id="registrations"
            name="registrations"
            value={conference.registrations}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="score"
            className="block text-sm font-medium text-gray-700"
          >
            Score
          </label>
          <input
            type="number"
            id="score"
            name="score"
            step="0.1"
            min="0"
            max="5"
            value={conference.score}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isEditing ? 'Update Conference' : 'Add Conference'}
        </button>
      </form>
    </div>
  );
};

export default ConferenceForm;
