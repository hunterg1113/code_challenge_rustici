function adjacentShuffle(n, ...arrays) {
  let temp, i;

  while (n) {
    i = Math.floor(Math.random() * n--);

    arrays.forEach((array) => {
      temp = array[n];
      array[n] = array[i];
      array[i] = temp;
    });
  }
}

export function randomizeTest(test) {
  const { questions, answers, choices } = test;

  for (let i = questions.length - 1; i >= 0; i--) {
    adjacentShuffle(i, answers[i], choices[i]);
    adjacentShuffle(i, questions, answers, choices);
  }

  return test;
}
