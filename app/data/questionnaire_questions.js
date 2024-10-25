import Question from "../models/question";

const options = ["never", "rarely", "sometimes", "frequently", "always"];

export const QUESTIONNAIRE = [
  new Question(1, "Have cramped fingers on writing tool?", options),
  new Question(2, "Have slant and inconsistent letter formations?", options),
  new Question(3, "Have a decreased or very slow speed of writing?", options),
  new Question(4, "Have messy handwriting?", options),
  new Question(5, "Reverses numbers? (e.g., 81 for 18)", options),
  new Question(6, "Write letters backwards?", options),
  new Question(
    7,
    "Have a frequent need for verbal cues and use of subvocalizing?",
    options
  ),
  new Question(8, "Writes a mixture of upper- and lowercase letters?", options),
  new Question(9, "Resist writing tasks?", options),
  new Question(10, "Have difficulty copying text?", options),
  new Question(
    11,
    "Have difficulty with fine motor skills, such as buttoning a shirt or using scissors?",
    options
  ),
  new Question(
    12,
    "Fully relies on vision to monitor what the hand is doing during writing?",
    options
  ),
  new Question(
    13,
    "Does your child frequently confuse similar-looking letters, such as 'b' 'd' ?",
    options
  ),
  new Question(
    14,
    "Have difficulty remembering how to spell easy words they know verbally?",
    options
  ),
];
