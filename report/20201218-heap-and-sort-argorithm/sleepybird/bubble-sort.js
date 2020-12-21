const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 배열이 정렬이 덜됐는지 확인해주는 boolean타입값을 true로 선언한다.
  // 순서대로 정렬되어 있을 때 까지 반복한다 boolean이 true일때
    //boolean값을 false로 설정한다.
    //배열의 길이만큼 반복한다
      //i번째 인덱스가 i + 1 번째 인덱스보다 크면
      //자리를 바꾼다
      //boolean값을 true로 설정한다.
  // 정렬된 배열을 리턴한다.

  let notYet = true;

  while(notYet){
    notYet = false;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > arr[i + 1]){
        let swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
        notYet = true;
      }
    }
  }
  return arr;
};