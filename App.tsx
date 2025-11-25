import React, { useState } from 'react';
import { 
  LayoutGrid, 
  UploadCloud, 
  BarChart3, 
  Hexagon
} from 'lucide-react';
import AssetPortal from './components/AssetPortal';
import GenAIStudio from './components/GenAIStudio';
import SandboxLeaderboard from './components/SandboxLeaderboard';
import { Tab, CampaignData } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('upload');
  
  // Simulated state for campaign data to show persistence across tabs conceptually
  const [campaignData, setCampaignData] = useState<CampaignData | null>(null);

  const handleGenerate = (data: CampaignData) => {
    setCampaignData(data);
    // Simulate API delay slightly for UX
    setTimeout(() => setActiveTab('studio'), 400);
  };

  const handleProceedToResults = () => {
    setActiveTab('results');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'upload':
        return <AssetPortal onGenerate={handleGenerate} />;
      case 'studio':
        return <GenAIStudio onProceed={handleProceedToResults} />;
      case 'results':
        return <SandboxLeaderboard />;
      default:
        return <AssetPortal onGenerate={handleGenerate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col fixed h-full z-10 transition-all">
        <div className="p-6 flex items-center gap-3 text-white border-b border-slate-800">
          <div className="bg-inmobi-red p-1.5 rounded-lg">
            <Hexagon size={20} fill="currentColor" strokeWidth={0} />
          </div>
          <span className="font-bold text-lg tracking-tight">InMobi GenAI Sandbox</span>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-3 mt-4">Campaign Workflow</div>
          
          <button 
            onClick={() => setActiveTab('upload')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${activeTab === 'upload' ? 'bg-inmobi-red text-white' : 'hover:bg-slate-800'}`}
          >
            <UploadCloud size={18} />
            <span className="font-medium">1. Asset Portal</span>
          </button>

          <button 
            onClick={() => campaignData && setActiveTab('studio')}
            disabled={!campaignData}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${activeTab === 'studio' ? 'bg-inmobi-red text-white' : campaignData ? 'hover:bg-slate-800' : 'opacity-50 cursor-not-allowed'}`}
          >
            <LayoutGrid size={18} />
            <span className="font-medium">2. GenAI Studio</span>
          </button>

          <button 
             onClick={() => campaignData && setActiveTab('results')}
             disabled={!campaignData}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${activeTab === 'results' ? 'bg-inmobi-red text-white' : campaignData ? 'hover:bg-slate-800' : 'opacity-50 cursor-not-allowed'}`}
          >
            <BarChart3 size={18} />
            <span className="font-medium">3. Leaderboard</span>
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="mt-2 flex items-center gap-3 px-3">
             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-inmobi-red to-orange-500 border-2 border-slate-800"></div>
             <div className="text-sm">
                <p className="text-white font-medium">Jay Pokarna</p>
                <p className="text-xs text-slate-500">Enterprise Plan</p>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        
        {/* Dynamic Page Content */}
        <div className="p-8 flex-1 overflow-y-auto">
            {renderContent()}
        </div>

      </main>

    </div>
  );
};

export default App;