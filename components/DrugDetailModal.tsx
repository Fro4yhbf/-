
import React from 'react';
import { Drug } from '../types';

interface DrugDetailModalProps {
  drug: Drug;
  onClose: () => void;
}

const InfoSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="mb-6">
        <div className="flex items-center mb-2">
            <span className="text-cyan-500 mr-3">{icon}</span>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{title}</h3>
        </div>
        <div className="pl-9 text-slate-600 dark:text-slate-300 space-y-2">
            {children}
        </div>
    </div>
);

const PillIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l-1.414-1.414M19.778 5.636l-1.414 1.414M18.364 18.364l1.414 1.414M4.222 18.364l1.414-1.414M12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>;
const BrainIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v4.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" /></svg>;
const EffectIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const IndicationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SideEffectIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>;
const ContraindicationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
const DosageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" /></svg>;
const KineticsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const RecipeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;

const DrugDetailModal: React.FC<DrugDetailModalProps> = ({ drug, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h2 className="text-4xl font-bold mb-2 text-cyan-600 dark:text-cyan-400">{drug.name}</h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 italic">{drug.group}</p>
        
        <InfoSection title="Группа (Простыми словами)" icon={<PillIcon/>}>
            <p className="font-medium text-cyan-700 dark:text-cyan-300">{drug.simpleGroup}</p>
        </InfoSection>

        <InfoSection title="Механизм действия" icon={<BrainIcon/>}>
            <p>{drug.mechanism}</p>
            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-700 dark:text-slate-200">Как это работает?</p>
                <p>{drug.simpleMechanism}</p>
            </div>
        </InfoSection>

        {drug.effects.length > 0 && (
          <InfoSection title="Эффекты" icon={<EffectIcon/>}>
              <ul className="list-disc list-inside space-y-1">
                  {drug.effects.map((effect, i) => <li key={i}>{effect}</li>)}
              </ul>
          </InfoSection>
        )}

        {drug.pharmacokinetics && (
          <InfoSection title="Фармакокинетика" icon={<KineticsIcon />}>
            <p>{drug.pharmacokinetics}</p>
          </InfoSection>
        )}

        {drug.indications.length > 0 && (
          <InfoSection title="Показания к применению" icon={<IndicationIcon/>}>
              <ul className="list-disc list-inside space-y-1">
                  {drug.indications.map((indication, i) => <li key={i}>{indication}</li>)}
              </ul>
          </InfoSection>
        )}

        {drug.sideEffects.length > 0 && (
          <InfoSection title="Побочные эффекты" icon={<SideEffectIcon/>}>
              <ul className="list-disc list-inside space-y-1">
                  {drug.sideEffects.map((effect, i) => <li key={i}>{effect}</li>)}
              </ul>
          </InfoSection>
        )}

        {drug.contraindications.length > 0 && (
          <InfoSection title="Противопоказания" icon={<ContraindicationIcon/>}>
              <ul className="list-disc list-inside space-y-1">
                  {drug.contraindications.map((contra, i) => <li key={i}>{contra}</li>)}
              </ul>
          </InfoSection>
        )}

        {drug.dosage.length > 0 && (
          <InfoSection title="Дозы и формы выпуска" icon={<DosageIcon/>}>
              <ul className="list-disc list-inside space-y-1">
                  {drug.dosage.map((dose, i) => <li key={i}>{dose}</li>)}
              </ul>
          </InfoSection>
        )}
        
        {drug.rp && drug.rp.length > 0 && (
          <InfoSection title="Рецепты" icon={<RecipeIcon/>}>
              {drug.rp.map((r, i) => <pre key={i} className="bg-slate-100 dark:bg-slate-700 p-3 rounded-md text-sm whitespace-pre-wrap">{r}</pre>)}
          </InfoSection>
        )}

      </div>
      <style>{`
        .animate-fade-in {
            animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        /* Custom scrollbar for modal */
        .max-h-[90vh]::-webkit-scrollbar {
          width: 8px;
        }
        .max-h-[90vh]::-webkit-scrollbar-track {
          background: transparent;
        }
        .max-h-[90vh]::-webkit-scrollbar-thumb {
          background-color: #64748b; /* slate-500 */
          border-radius: 20px;
          border: 3px solid transparent;
          background-clip: content-box;
        }
        .dark .max-h-[90vh]::-webkit-scrollbar-thumb {
          background-color: #94a3b8; /* slate-400 */
        }
      `}</style>
    </div>
  );
};

export default DrugDetailModal;
