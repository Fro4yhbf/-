
import React, { useState, useEffect, useMemo } from 'react';
import { Drug } from './types';
import { DRUG_DATA } from './constants';
import Header from './components/Header';
import DrugCategory from './components/DrugCategory';
import DrugDetailModal from './components/DrugDetailModal';

const App: React.FC = () => {
  const [selectedDrug, setSelectedDrug] = useState<Drug | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleSelectDrug = (drug: Drug) => {
    setSelectedDrug(drug);
  };

  const handleCloseModal = () => {
    setSelectedDrug(null);
  };

  const filteredData = useMemo(() => {
    if (!searchQuery) {
      return DRUG_DATA;
    }
    return DRUG_DATA.map(category => ({
      ...category,
      drugs: category.drugs.filter(drug =>
        drug.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => category.drugs.length > 0);
  }, [searchQuery]);


  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        theme={theme}
        setTheme={setTheme}
      />
      <main className="container mx-auto px-4 py-8">
        {filteredData.length > 0 ? (
          <div className="space-y-12">
            {filteredData.map((category) => (
              <DrugCategory
                key={category.name}
                category={category}
                onSelectDrug={handleSelectDrug}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-slate-600 dark:text-slate-400">Препараты не найдены</h2>
            <p className="text-slate-500 mt-2">Попробуйте изменить поисковый запрос.</p>
          </div>
        )}
      </main>
      {selectedDrug && (
        <DrugDetailModal drug={selectedDrug} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
