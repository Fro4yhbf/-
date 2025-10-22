
import React from 'react';
import { Drug } from '../types';

interface DrugCardProps {
  drug: Drug;
  onSelectDrug: (drug: Drug) => void;
}

const DrugCard: React.FC<DrugCardProps> = ({ drug, onSelectDrug }) => {
  return (
    <div
      onClick={() => onSelectDrug(drug)}
      className="bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden group"
    >
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300">{drug.name}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 truncate">{drug.group}</p>
      </div>
      <div className="h-1 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default DrugCard;
