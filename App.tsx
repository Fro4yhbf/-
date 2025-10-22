
import React, { useState } from 'react';
import { Drug } from './types';
import { DRUG_DATA } from './constants';
import Header from './components/Header';
import DrugCategory from './components/DrugCategory';
import DrugDetailModal from './components/DrugDetailModal';

const App: React.FC = () => {
  const [selectedDrug, setSelectedDrug] = useState<Drug | null>(null);

  const handleSelectDrug = (drug: Drug) => {
    setSelectedDrug(drug);
  };

  const handleCloseModal = () => {
    setSelectedDrug(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          {DRUG_DATA.map((category) => (
            <DrugCategory
              key={category.name}
              category={category}
              onSelectDrug={handleSelectDrug}
            />
          ))}
        </div>
      </main>
      {selectedDrug && (
        <DrugDetailModal drug={selectedDrug} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
