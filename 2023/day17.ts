type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌🏽";

interface Outcome {
  "👊🏻": {
    "🖐🏾": "win";
    "✌🏽": "lose";
  };
  "🖐🏾": {
    "👊🏻": "lose";
    "✌🏽": "win";
  };
  "✌🏽": {
    "👊🏻": "win";
    "🖐🏾": "lose";
  };
}

type WhoWins<P extends RockPaperScissors, O extends keyof Outcome> = P extends O
  ? "draw"
  : O extends keyof Outcome[P]
  ? Outcome[P][O]
  : never;
