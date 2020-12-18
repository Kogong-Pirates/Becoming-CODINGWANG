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