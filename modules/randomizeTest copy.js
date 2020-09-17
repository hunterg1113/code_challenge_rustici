function adjacentShuffle(...arrays) {
  const n = arrays[0].length;

  for (let i = n - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    arrays.forEach((array) => {
      const temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    });
  }
}

export function randomizeTest(test) {
  const { questions, answers, choices } = test;

  for (let i in questions) {
    adjacentShuffle(answers[i], choices[i]);
  }

  adjacentShuffle(questions, answers, choices);

  return test;
}
