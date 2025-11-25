import React, { useEffect, useState } from 'react';
import { Loader2, PlayCircle, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { AdVariant } from '../types';

interface GenAIStudioProps {
  onProceed: () => void;
}

const MOCK_VARIANTS: AdVariant[] = [
  { id: '1', title: 'Puzzle Border Layout', angle: 'Emotional Relief', context: 'Gameplay Wrapper', status: 'ready', thumbnail: 'https://picsum.photos/400/225?random=1' },
  { id: '2', title: 'Level-Up Overlay', angle: 'Logical Challenge', context: 'Interstital', status: 'ready', thumbnail: 'https://picsum.photos/400/225?random=2' },
  { id: '3', title: 'Social Reward Screen', angle: 'Social Status', context: 'End Card', status: 'ready', thumbnail: 'https://picsum.photos/400/225?random=3' },
  { id: '4', title: 'Fail State Recovery', angle: 'Loss Aversion', context: 'Gameplay', status: 'rendering', thumbnail: 'https://picsum.photos/400/225?random=4' },
  { id: '5', title: 'Character Reveal', angle: 'Narrative', context: 'Intro Scene', status: 'rendering', thumbnail: 'https://picsum.photos/400/225?random=5' },
  { id: '6', title: 'Daily Bonus Loop', angle: 'Financial Savings', context: 'Menu UI', status: 'scripting', thumbnail: 'https://picsum.photos/400/225?random=6' },
];

const GenAIStudio: React.FC<GenAIStudioProps> = ({ onProceed }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate generation progress
    const timer = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header & Progress */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            GenAI Studio
            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-bold rounded uppercase tracking-wider">Processing</span>
          </h2>
          <p className="text-slate-500">Generating 50 high-fidelity video variations based on "Match-3" constraints.</p>
        </div>
        <div className="flex gap-3">
            <button 
                onClick={onProceed}
                className="flex items-center gap-2 px-5 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 shadow-lg shadow-slate-900/20"
            >
                Launch Sandbox Test
                <ChevronRight size={16} />
            </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex justify-between text-sm font-medium mb-2">
            <span className="text-slate-700">Generation Progress</span>
            <span className="text-inmobi-red">{progress}% Complete</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div 
                className="bg-inmobi-red h-2.5 rounded-full transition-all duration-300 ease-out" 
                style={{ width: `${progress}%` }}
            ></div>
        </div>
        <div className="flex gap-6 mt-4 text-xs text-slate-500">
            <div className="flex items-center gap-1.5 text-green-600 font-medium">
                <CheckCircle2 size={14} /> Scripting & Copy
            </div>
            <div className="flex items-center gap-1.5 text-green-600 font-medium">
                <CheckCircle2 size={14} /> Scene Composition
            </div>
            <div className="flex items-center gap-1.5 text-blue-600 font-medium">
                <Loader2 size={14} className="animate-spin" /> Rendering Visuals
            </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_VARIANTS.map((variant) => (
            <div key={variant.id} className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-video bg-slate-100">
                    <img src={variant.thumbnail} alt={variant.title} className={`w-full h-full object-cover transition-opacity ${variant.status !== 'ready' ? 'opacity-50 blur-sm' : ''}`} />
                    
                    {variant.status === 'ready' && (
                         <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                            <PlayCircle size={48} className="text-white drop-shadow-lg" />
                         </div>
                    )}

                    <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded text-xs font-semibold backdrop-blur-md 
                            ${variant.status === 'ready' ? 'bg-green-500/90 text-white' : 
                              variant.status === 'rendering' ? 'bg-blue-500/90 text-white' : 'bg-slate-500/90 text-white'}`}>
                            {variant.status === 'ready' ? 'Ready' : variant.status === 'rendering' ? 'Rendering...' : 'Scripting'}
                        </span>
                    </div>
                </div>
                
                <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-slate-900">{variant.title}</h3>
                        <span className="text-xs font-mono text-slate-400">#{variant.id.padStart(3, '0')}</span>
                    </div>
                    
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-500">Angle</span>
                            <span className="font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded">{variant.angle}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-500">Game Context</span>
                            <span className="font-medium text-slate-700">{variant.context}</span>
                        </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs text-slate-400 gap-1">
                        <Clock size={12} />
                        Generated {variant.status === 'ready' ? 'just now' : 'in queue'}
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default GenAIStudio;