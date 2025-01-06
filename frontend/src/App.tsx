import { useState } from 'react';
import { Header } from './components/Header';
import { CheckForm } from './components/CheckForm';
import { CheckList } from './components/CheckList';
import { Check } from './types';

function App() {
  const [checks, setChecks] = useState<Check[]>([]);

  const handleCheckSubmit = async (
    checkData: Omit<Check, 'id' | 'isCertified'>
  ) => {
    // TODO: Integrate with backend API
    const newCheck: Check = {
      ...checkData,
      id: Date.now().toString(),
      isCertified: false,
    };
    setChecks([newCheck, ...checks]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">
              New Check Certification
            </h2>
            <CheckForm onSubmit={handleCheckSubmit} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">
              Recent Checks
            </h2>
            <CheckList checks={checks} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
