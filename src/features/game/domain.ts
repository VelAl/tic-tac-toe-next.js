export type T_Player = {
  id: string;
  login: string;
  rating: number;
};

export type T_GameIdle = {
  id: string;
  creator: T_Player;
  status: "IDLE";
};

export type T_GameProgress = {
  id: string;
  players: T_Player[];
  field: T_Field;
  status: "IN_PROGRESS";
};

export type T_GameOver = {
  id: string;
  players: T_Player[];
  field: T_Field;
  status: "GAME_OVER";
  winner: T_Player;
};

export type T_GameOverDraw = {
  id: string;
  players: T_Player[];
  field: T_Field;
  status: "GAME_OVER_DRAW";
};

export type T_Game = T_GameIdle | T_GameProgress | T_GameOver | T_GameOverDraw;

export type T_Field = T_Cell[];
export type T_Cell = T_GameSymbol | null;
export type T_GameSymbol = string;
