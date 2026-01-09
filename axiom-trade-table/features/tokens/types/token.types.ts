export type TokenStatus = "new" | "finalStretch" | "migrated";

export interface Token {
  id: string;
  name: string;
  ticker: string;
  imageUrl: string;
  marketCap: number;
  volume: number;
  fdv: number;
  age: string;
  ageInSeconds: number;
  holders: number;
  transactions: number;
  priceChangePercentages: {
    "5m": number;
    "1h": number;
    "6h": number;
    "24h": number;
  };
  isPaid: boolean;
  warnings: string[];
  status: TokenStatus;
  createdAt: Date;
  lastUpdated: Date;
}

export interface PriceUpdate {
  tokenId: string;
  newMarketCap: number;
  newVolume: number;
  priceChange: number;
  timestamp: Date;
}

export interface WebSocketMessage {
  type: "PRICE_UPDATE" | "NEW_TOKEN" | "STATUS_CHANGE";
  data: PriceUpdate | Token;
}