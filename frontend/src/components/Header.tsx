import React from 'react';
import { Building2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Building2 className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Check Certification System</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-indigo-200">Dashboard</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-200">New Check</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-200">History</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
