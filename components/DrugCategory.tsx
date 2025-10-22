
import React from 'react';
import { DrugCategory as DrugCategoryType, Drug } from '../types';
import DrugCard from './DrugCard';

interface DrugCategoryProps {
  category: DrugCategoryType;
  onSelectDrug: (drug: Drug) => void;
}

const DrugCategory: React.FC<DrugCategoryProps> = ({ category, onSelectDrug }) => {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">{category.name}</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-3xl">{category.description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category.drugs.map((drug) => (
          <DrugCard key={drug.name} drug={drug} onSelectDrug={onSelectDrug} />
        ))}
      </div>
    </section>
  );
};

export default DrugCategory;
