import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-primary-700 mb-8">
          Dziennik Elektroniczny
        </h1>
        
        <div className="card p-6 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Witaj!</h2>
          <p className="text-gray-600 mb-4">
            Tailwind CSS został pomyślnie zainstalowany!
          </p>
          <button className="btn-primary w-full">
            Zaloguj się
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;