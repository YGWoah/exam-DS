import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import Home from './components/Home.tsx';
import ConferenceList from './components/ConferenceList';
import ConferenceForm from './components/ConferenceForm';
import KeynoteList from './components/KeyNoteList';
import KeynoteForm from './components/KeyNoteForm';
import { useAuth } from './contexts/KeyCloakAuthContext.tsx';

const App: React.FC = () => {
  let { isAuthenticated, logout } = useAuth();

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">
              Conference Management
            </h1>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li>
                    <Link
                      to="/conferences"
                      className="hover:text-gray-300"
                    >
                      Conferences
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/keynotes"
                      className="hover:text-gray-300"
                    >
                      Keynotes
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="hover:text-gray-300"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login" className="hover:text-gray-300">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
        <main className="container mx-auto mt-8 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conferences" element={<ConferenceList />} />
            <Route
              path="/conferences/new"
              element={<ConferenceForm />}
            />
            <Route
              path="/conferences/:id/edit"
              element={<ConferenceForm />}
            />
            <Route path="/keynotes" element={<KeynoteList />} />
            <Route path="/keynotes/new" element={<KeynoteForm />} />
            <Route
              path="/keynotes/:id/edit"
              element={<KeynoteForm />}
            />
            <Route path="/login" element={<div>Login Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
