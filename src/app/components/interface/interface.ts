// Interface for BcfBoard
export interface BcfBoard {
  id: number;
  name: string;
  createdAt: string;
}

// Interface for Bcf
export interface Bcf {
  id: number;
  name: string;
  createdAt: string;
  bcfBoards: BcfBoard[];
}

// Interface for Board
export interface Board {
  id: number;
  name: string;
  createdAt: string;
  bcfs: Bcf[];
}

// Interface for the fetched data
export interface Data {
  boards: Board[];
}
