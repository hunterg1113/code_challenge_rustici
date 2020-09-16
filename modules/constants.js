const questions = [
  "What can you find in Rustici Software's office?",
  'All of Rustici Software employees are expected to work no more than ____ hours per week.',
  "The end users of Rustici Software's products number in the _________",
  'Rustici Software is a (choose all that apply):',
  'Tim likes to wear:'
];

const choices = [
  [
    'Dart Board',
    'Ping Pong Table',
    'Cubicles',
    'Laptops with dual monitors',
    'TPS reports, ummm yeah'
  ],
  ['80', '40', '50', '60'],
  ['Tens', 'Hundreds', 'Thousands', 'Millions', 'Billions'],
  [
    'Great place to work',
    'Respected leader in its field',
    "Place where people don't matter, just results"
  ],
  ['Capri pants', 'Goth attire', 'Sport coat', 'T-shirt and shorts']
];

const answers = [
  [1, 1, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0],
  [0, 0, 0, 1, 0]
];

export { questions, choices, answers };
