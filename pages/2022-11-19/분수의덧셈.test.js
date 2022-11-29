const solution = require("./분수의덧셈.js");
const answer = {
  arr1: [5, 4],
  arr2: [29, 6],
};
test("각 분수의 합(5, 4)이 나와야 합니다.", () => {
  expect(solution(1, 2, 3, 4)).toStrictEqual(answer.arr1);
});

test("각 분수의 합(29, 6)이 나와야 합니다.", () => {
  expect(solution(9, 2, 1, 3)).toStrictEqual(answer.arr2);
});
