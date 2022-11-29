/* 문제 설명
첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1,
두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다.
두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
0 <denum1, num1, denum2, num2 < 1,000
입출력 예
denum1	num1	denum2	num2	result
1	    2	    3	    4	    [5, 4]
9	    2	    1	    3	    [29, 6]

입출력 예 설명
입출력 예 #1
1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.
입출력 예 #2

9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.
*/
function solution(denum1, num1, denum2, num2) {
  var answer = [];
  /*
  denum = 분자 (문자뒤에 오는 숫자는 첫번째분수, 두번째분수를 나타낸다.)
  num = 분모
  1. 분모의 곱을 이용해 각 denum1, num1에 num2를 곱해준다.
  2. denum2, num2 에도 num1을 곱해준다.
  3. 곱한 분수1과 분수2를 더해주고 2로 나눳을 때 나누어 떨어지지 않을때까지 나눠준다.
  4. 더이상 나누어 떨어지지 않는다면 분모,분자순으로 배열에 담아준다.
  */

  let Dsum1 = denum1 * num2;
  let Dsum2 = denum2 * num1;
  let sum1 = num1 * num2;

  let el1 = Dsum1 + Dsum2;

  while (el1 % 2 === 0 && sum1 % 2 === 0) {
    el1 = el1 / 2;
    sum1 /= 2;
  }
  answer[0] = el1;
  answer[1] = sum1;
  console.log(answer);
  return answer;
}
solution(9, 2, 1, 3);
module.exports = solution;
