type TicTacToeChip = "❌" | "⭕";
type TicTacToeEndState = "❌ Won" | "⭕ Won" | "Draw";
type TicTacToeState = TicTacToeChip | TicTacToeEndState;
type TicTacToeEmptyCell = "  ";
type TicTacToeCell = TicTacToeChip | TicTacToeEmptyCell;
type TicTacToeYPositions = "top" | "middle" | "bottom";
type TicTacToeXPositions = "left" | "center" | "right";
type TicTacToePositions = `${TicTacToeYPositions}-${TicTacToeXPositions}`;
type TicTactToeBoard = TicTacToeCell[][];
type TicTacToeGame = {
  board: TicTactToeBoard;
  state: TicTacToeState;
};

type EmptyBoard = [["  ", "  ", "  "], ["  ", "  ", "  "], ["  ", "  ", "  "]];

type NewGame = {
  board: EmptyBoard;
  state: "❌";
};

interface XPosition {
  left: 0;
  center: 1;
  right: 2;
}

interface YPosition {
  top: 0;
  middle: 1;
  bottom: 2;
}

type InsertRow<
  R extends TicTacToeCell[],
  X extends TicTacToeXPositions,
  C extends TicTacToeChip
> = X extends "left"
  ? [C, R[1], R[2]]
  : X extends "center"
  ? [R[0], C, R[2]]
  : // "right"
    [R[0], R[1], C];

type AddToBoard<
  B extends TicTactToeBoard,
  Y extends TicTacToeYPositions,
  X extends TicTacToeXPositions,
  C extends TicTacToeChip
> = Y extends "top"
  ? [InsertRow<B[0], X, C>, B[1], B[2]]
  : Y extends "middle"
  ? [B[0], InsertRow<B[1], X, C>, B[2]]
  : // "bottom"
    [B[0], B[1], InsertRow<B[2], X, C>];

interface Lines<B extends TicTactToeBoard> {
  leftLine: [B[0][0], B[1][0], B[2][0]];
  centerLine: [B[0][1], B[1][1], B[2][1]];
  rightLine: [B[0][2], B[1][2], B[2][2]];
  topLine: [B[0][0], B[0][1], B[0][2]];
  middleLine: [B[1][0], B[1][1], B[1][2]];
  bottomLine: [B[2][0], B[2][1], B[2][2]];
  leftDiagonal: [B[0][0], B[1][1], B[2][2]];
  rightDiagonal: [B[0][2], B[1][1], B[2][0]];
}

type Won<B extends TicTactToeBoard, C extends TicTacToeChip> = {
  [K in keyof Lines<B>]: Lines<B>[K] extends [C, C, C] ? "win" : never;
}[keyof Lines<B>] extends never
  ? false
  : true;

type NextState<
  B extends TicTactToeBoard,
  S extends TicTacToeState
> = S extends "❌"
  ? Won<B, "❌"> extends true
    ? "❌ Won"
    : B extends TicTacToeChip[][]
    ? "Draw"
    : "⭕"
  : Won<B, "⭕"> extends true
  ? "⭕ Won"
  : B extends TicTacToeChip[][]
  ? "Draw"
  : "❌";

type TicTacToe<
  G extends TicTacToeGame,
  M extends string
> = G["state"] extends TicTacToeChip
  ? M extends `${infer Y extends TicTacToeYPositions}-${infer X extends TicTacToeXPositions}`
    ? G["board"][YPosition[Y]][XPosition[X]] extends TicTacToeEmptyCell
      ? {
          board: AddToBoard<G["board"], Y, X, G["state"]>;
          state: NextState<
            AddToBoard<G["board"], Y, X, G["state"]>,
            G["state"]
          >;
        }
      : G
    : never
  : never;
