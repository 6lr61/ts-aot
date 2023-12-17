type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌🏽";

interface Win {
  "👊🏻": "🖐🏾";
  "🖐🏾": "✌🏽";
  "✌🏽": "👊🏻";
}

type WhoWins<
  P extends RockPaperScissors,
  O extends RockPaperScissors
> = P extends O ? "draw" : O extends Win[P] ? "win" : "lose";
