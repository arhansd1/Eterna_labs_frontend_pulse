import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "../types/token.types";

interface TokensState {
  tokens: Token[];
  selectedToken: Token | null;
  sortBy: "marketCap" | "volume" | "age";
  sortOrder: "asc" | "desc";
  isWebSocketConnected: boolean;
}

const initialState: TokensState = {
  tokens: [],
  selectedToken: null,
  sortBy: "marketCap",
  sortOrder: "desc",
  isWebSocketConnected: false,
};

const tokensSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<Token[]>) => {
      state.tokens = action.payload;
    },
    updateToken: (state, action: PayloadAction<Token>) => {
      const index = state.tokens.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.tokens[index] = action.payload;
      }
    },
    setSelectedToken: (state, action: PayloadAction<Token | null>) => {
      state.selectedToken = action.payload;
    },
    setSortBy: (state, action: PayloadAction<"marketCap" | "volume" | "age">) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<"asc" | "desc">) => {
      state.sortOrder = action.payload;
    },
    setWebSocketConnected: (state, action: PayloadAction<boolean>) => {
      state.isWebSocketConnected = action.payload;
    },
  },
});

export const {
  setTokens,
  updateToken,
  setSelectedToken,
  setSortBy,
  setSortOrder,
  setWebSocketConnected,
} = tokensSlice.actions;

export default tokensSlice.reducer;