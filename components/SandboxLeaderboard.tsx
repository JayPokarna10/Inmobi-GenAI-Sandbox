import React from 'react';
import { Trophy, TrendingUp, AlertCircle, Download, Share2, Filter } from 'lucide-react';
import { AdPerformance } from '../types';

const MOCK_DATA: AdPerformance[] = [
  { id: 'V-001', variantName: 'Emotional_Border_v1', angle: 'Emotional Relief', context: 'Puzzle Border', impressions: 45200, hookRate: 42.5, status: 'active', isWinner: true },
  { id: 'V-003', variantName: 'Social_Reward_v2', angle: 'Social Status', context: 'Reward Screen', impressions: 38100, hookRate: 38.2, status: 'active', isWinner: true },
  { id: 'V-002', variantName: 'Logical_LevelUp_v1', angle: 'Logical Challenge', context: 'Level Overlay', impressions: 41000, hookRate: 24.8, status: 'active', isWinner: false },
  { id: 'V-005', variantName: 'Fail_Recovery_Fast', angle: 'Loss Aversion', context: 'Gameplay', impressions: 12500, hookRate: 18.5, status: 'paused', isWinner: false },
  { id: 'V-004', variantName: 'Narrative_Intro_Long', angle: 'Narrative', context: 'Intro Scene', impressions: 8900, hookRate: 12.1, status: 'paused', isWinner: false },
];

const SandboxLeaderboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* KPI Header */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Total Impressions</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">145,700</h3>
            <span className="text-green-600 text-xs font-medium flex items-center mt-2">
                <TrendingUp size={12} className="mr-1" /> +12.5% vs yesterday
            </span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Avg. Hook Rate</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">27.2%</h3>
            <span className="text-slate-500 text-xs mt-2">Benchmark: 22.0%</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm border-l-4 border-l-inmobi-red">
            <p className="text-xs font-semibold text-inmobi-red uppercase tracking-wide">Top Performer</p>
            <h3 className="text-lg font-bold text-slate-900 mt-1 truncate">Emotional_Border_v1</h3>
            <span className="text-slate-500 text-xs mt-2">42.5% Hook Rate</span>
        </div>
         <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-5 rounded-xl border border-slate-800 shadow-sm text-white flex flex-col justify-between">
            <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Ready for Export</p>
                <h3 className="text-2xl font-bold mt-1">2 Variants</h3>
            </div>
            <button className="self-start text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded transition-colors">
                Export to Meta Ads
            </button>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-lg font-bold text-slate-900">Sandbox Leaderboard (Test Flight Results)</h2>
            <div className="flex gap-2">
                <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200">
                    <Filter size={18} />
                </button>
                <button className="px-3 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 flex items-center gap-2">
                    <Download size={16} /> Export CSV
                </button>
            </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-slate-50/50 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                        <th className="px-6 py-4">Ad Variant Name</th>
                        <th className="px-6 py-4">Angle / Persona</th>
                        <th className="px-6 py-4">Game Context</th>
                        <th className="px-6 py-4 text-right">Impressions</th>
                        <th className="px-6 py-4 text-right">Hook Rate (3s)</th>
                        <th className="px-6 py-4 text-center">Status</th>
                        <th className="px-6 py-4"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {MOCK_DATA.map((row) => (
                        <tr key={row.id} className={`group transition-colors ${row.isWinner ? 'bg-green-50/40 hover:bg-green-50' : 'hover:bg-slate-50'}`}>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${row.isWinner ? 'bg-green-500' : 'bg-slate-300'}`}></div>
                                    <div>
                                        <p className="font-medium text-slate-900">{row.variantName}</p>
                                        <p className="text-xs text-slate-400">{row.id}</p>
                                    </div>
                                    {row.isWinner && (
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wide border border-green-200">
                                            <Trophy size={10} /> Winner
                                        </span>
                                    )}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-xs font-medium">
                                    {row.angle}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600">
                                {row.context}
                            </td>
                            <td className="px-6 py-4 text-right text-sm font-mono text-slate-600">
                                {row.impressions.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <span className={`text-sm font-bold font-mono ${row.hookRate > 30 ? 'text-green-600' : row.hookRate < 20 ? 'text-red-500' : 'text-slate-700'}`}>
                                        {row.hookRate}%
                                    </span>
                                    <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full rounded-full ${row.hookRate > 30 ? 'bg-green-500' : 'bg-slate-400'}`} 
                                            style={{ width: `${row.hookRate}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                                    ${row.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-600'}`}>
                                    {row.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="p-2 text-slate-400 hover:text-inmobi-red hover:bg-red-50 rounded-full transition-colors">
                                    <Share2 size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex justify-center items-center gap-2">
            <AlertCircle size={12} />
            Data updated in real-time. Last sync: 32 seconds ago.
        </div>
      </div>
    </div>
  );
};

export default SandboxLeaderboard;