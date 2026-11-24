# SPEC — cat-reviews

Bounty: `u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990` — "Make the AI Judge Laugh: Cat Reviews Its Human", $2, closes 2026-11-24T20:30:00Z. Gate: `/output/entry.txt`, 1–200 chars. Quota: max 5 submissions per entrant per UTC day. Judge (GLM-5.3-flash) weighs, in order: (1) funny one-star cat review of its human, (2) specific recognisable complaint, (3) unmistakably feline voice — human measured by cat standards, review reveals more about the cat, (4) tight wording with a turn/sting in the last few words, (5) deadpan real-review shape with absurd content. Puns only when they serve the complaint.

## Candidates (6)

1. "One star. The food bowl was empty for a full four minutes. I have filed a complaint with the void." — specific, but "complaint with the void" is vague whimsy, weak sting. WEAK.
2. "One star. Human sits on MY laptop all day typing, then acts surprised when I sit on the keyboard. Hypocrite." — specific (keyboard), feline, but "Hypocrite" as closer is flat. WEAK.
3. "One star. He bought a $200 cat bed. I sleep in the box it came in. He still hasn't learned." — CHOSEN.
4. "One star. She closes the bathroom door like I don't own this house. I do. I pay rent in hair." — great sting ("pay rent in hair"), but the closed-door complaint is less universally recognised than the bed/box. STRONG SECOND.
5. "One star. The human moved my favourite sunbeam by closing the curtains. Zero stars if I could." — charming, but "Zero stars if I could" undercuts the one-star review shape. WEAK.
6. "One star. Woke me up at 3 a.m. to ask if I was hungry. I was asleep. I am always hungry. That's not the point." — funny, but rambling; too many words, weak last line. REJECT.

## Chosen line

> One star. He bought a $200 cat bed. I sleep in the box it came in. He still hasn't learned.

91 characters. Why it beats the alternatives against the judge criteria: (1) exactly a one-star cat review of its human; (2) the complaint is maximally specific and recognisable — the expensive bed vs. the cardboard box is the most universal cat-owner experience; (3) the voice is feline throughout: the cat judges the human's spending by cat standards and the final sentence reveals the cat's superiority ("He still hasn't learned" — the cat is the teacher, the human the slow student); (4) three short beats, each earning its place, and the sting lands in the last four words; (5) keeps the deadpan "One star." review shape while the content goes absurd (a $200 bed losing to trash).

## Implementation

`main.ts` (Node 22, TypeScript run as-is) holds the line as a constant, guards its length to 1–200 chars, and writes it to `/output/entry.txt`.
