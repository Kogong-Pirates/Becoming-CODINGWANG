function getRandomArr(minNum, maxNum, arrLength){
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }
  let test = [];
  for(let i = 0; i < arrLength; i++){
    test.push(getRandomInt(minNum, maxNum))
  }

  return test;
}

/*

****GOD 지상이 만든 랜덤배열 생성기 사용법****

1. getRandomArr() 인자에는 최소값, 최댓값, 배열의 길이가 들어간다.
2. if 1, 100, 50 을 넣게 된다면
3. 1~100까지의 숫자를 무작위로 50개를 뽑아 배열로 만들어 준다.
4. 배열에는 크기에 상관없이 무작위로 담긴다.
5. 끝.

*/