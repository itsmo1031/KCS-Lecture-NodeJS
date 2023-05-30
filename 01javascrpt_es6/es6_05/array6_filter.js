//(예) 여러 점수가 저장된 scores 배열에서 85점 이상만 골라서 highScores 배열을 만들려면

let scores = [90, 35, 64, 88, 45, 92];
highScores = scores.filter((score) => score >= 85); // [90, 88, 92]

console.log(highScores);

//(예) scores 배열에서 85점 이상의 값을 찾으면서 인덱스도 같이 알고 싶다면

let scores2 = [90, 35, 64, 88, 45, 92];
let highScores2 = scores2.filter((score, index) => {
  if (score >= 85) {
    console.log(`index : ${index}, score : ${score}`);
    return score;
  }
});

console.log(highScores2);
