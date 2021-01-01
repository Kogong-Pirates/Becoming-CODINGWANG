input your report here
* 블로깅으로 대체하셨다면 링크를 올려주세요
* 레포트를 md파일로 저장하실려면 이 내용들을 지우고 자유롭게 작성해주세요  
* 코드만 올리실땐 코드에 주석을 달아 설명을 적어주세요
const insertionSort = function (arr, callback) {
  // TODO: 여기에 코드를 작성합니다.
  let change
  if (callback) {
    for(let i = 1; i < arr.length; i++) {
      for(let j = i - 1; j > -1; j--) {
        if(Math.abs(arr[j]) > Math.abs(arr[j + 1])) {
          change = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = change;
        }
      }
    }
    return arr;
  }
  const result = [...arr];
  let len = result.length; 
  for (let i = 1; i < len; i++) {
    let temp = result[i];
    let aux = i - 1;
    while (aux >= 0 && result[aux] > temp) {
      result[aux + 1] = result[aux];
      aux--;
    }
    result[aux + 1] = temp;
  }
  return result;
};
