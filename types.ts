export type Tab = 'upload' | 'studio' | 'results';

export interface CampaignData {
  name: string;
  gameGenre: string;
  personas: string[];
}

export interface AdVariant {
  id: string;
  title: string;
  angle: string;
  context: string;
  status: 'scripting' | 'rendering' | 'ready';
  thumbnail: string;
}

export interface AdPerformance {
  id: string;
  variantName: string;
  angle: string;
  context: string;
  impressions: number;
  hookRate: number;
  status: 'active' | 'paused';
  isWinner: boolean;
}
