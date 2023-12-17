type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌🏽";

interface Outcome {
  "👊🏻": {
    "👊🏻": "draw";
    "🖐🏾": "win";
    "✌🏽": "lose";
  };
  "🖐🏾": {
    "👊🏻": "lose";
    "🖐🏾": "draw";
    "✌🏽": "win";
  };
  "✌🏽": {
    "👊🏻": "win";
    "🖐🏾": "lose";
    "✌🏽": "draw";
  };
}

type WhoWins<
  P extends RockPaperScissors,
  O extends RockPaperScissors
> = Outcome[P][O];
