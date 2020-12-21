function insertionSort(arr){
  // 1번째 인덱스부터 순회한다.
    //바꿀값을 i인덱스값으로 설정한다.
    //j는 i - 1 부터 시작한다 바꿀값이 j번째 인덱스값보다 작을 때 까지 순회한다.
    //j는 1씩 줄어든다.
      //j인덱스 값을 오른쪽으로 밀어낸다(j+1번째 인덱스값에 j번째 인덱스값을 할당한다.)
    //j + 1번째 인덱스 값에 i번째 인덱스값을 할당한다.
  let i, j;
  for(i = 1; i < arr.length; i++){
    let key = arr[i];
    for(j = i - 1; j >= 0 && key < arr[j]; j--){
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
  return arr;
}