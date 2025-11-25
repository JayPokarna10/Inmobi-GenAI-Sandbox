import React, { useState } from 'react';
import { Upload, FileText, Check, ArrowRight, Wand2 } from 'lucide-react';
import { CampaignData } from '../types';

interface AssetPortalProps {
  onGenerate: (data: CampaignData) => void;
}

const AssetPortal: React.FC<AssetPortalProps> = ({ onGenerate }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [personasInput, setPersonasInput] = useState('Financial Savings, Emotional Relief, Social Status');
  const [genre, setGenre] = useState('Match-3 Puzzle');

  const handleGenerate = () => {
    // Parse comma-separated values into array
    const personas = personasInput
      .split(',')
      .map(p => p.trim())
      .filter(p => p.length > 0);

    onGenerate({
      name: 'Summer Campaign 2024',
      gameGenre: genre,
      personas: personas.length > 0 ? personas : ['Generic']
    });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">New Campaign: Creative Generation</h2>
            <p className="text-sm text-slate-500 mt-1">Upload brand assets and configure AI parameters for variation generation.</p>
          </div>
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100">
            Phase 1: Input
          </span>
        </div>

        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Col: Upload */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">1. Brand Assets</h3>
            
            <div 
              className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center transition-all cursor-pointer h-64
                ${isDragging ? 'border-inmobi-red bg-red-50' : 'border-slate-300 hover:border-inmobi-red hover:bg-slate-50'}`}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => { e.preventDefault(); setIsDragging(false); }}
            >
              <div className="h-16 w-16 bg-blue-50 text-inmobi-red rounded-full flex items-center justify-center mb-4">
                <Upload size={32} />
              </div>
              <p className="text-slate-900 font-medium text-lg">Drag & Drop Brand Kit</p>
              <p className="text-slate-500 text-sm mt-2">Supports .ZIP, .AI, .PDF (Max 500MB)</p>
              <button className="mt-6 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                Browse Files
              </button>
            </div>

            <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-100 rounded-lg">
              <div className="bg-green-100 p-1 rounded-full text-green-600">
                <Check size={14} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">Brand_Guidelines_v4.pdf</p>
                <p className="text-xs text-slate-500">2.4 MB • Uploaded just now</p>
              </div>
              <button className="text-slate-400 hover:text-slate-600">
                <FileText size={18} />
              </button>
            </div>
          </div>

          {/* Right Col: AI Config */}
          <div className="space-y-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">2. AI Configuration</h3>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-700">Game Genre Context</label>
              <select 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-inmobi-red focus:border-inmobi-red outline-none transition-shadow"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              >
                <option>Match-3 Puzzle</option>
                <option>Word Game</option>
                <option>RPG Strategy</option>
                <option>Hypercasual</option>
              </select>
              <p className="text-xs text-slate-500">The AI will analyze top-performing creatives in this genre for structural inspiration.</p>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-700">Target Personas</label>
              <textarea 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-inmobi-red focus:border-inmobi-red outline-none transition-shadow min-h-[120px] resize-none"
                value={personasInput}
                onChange={(e) => setPersonasInput(e.target.value)}
                placeholder="e.g. Financial Savings, Emotional Relief, Social Status"
              />
              <p className="text-xs text-slate-500">Please enter all the target personas in a comma separated format.</p>
            </div>

          </div>
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button 
            onClick={handleGenerate}
            className="group flex items-center gap-2 bg-inmobi-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-red-500/30 transition-all transform hover:-translate-y-0.5"
          >
            <Wand2 size={18} className="group-hover:rotate-12 transition-transform" />
            Generate 50 Variations
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetPortal;