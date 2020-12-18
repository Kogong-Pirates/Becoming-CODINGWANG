function selectionSort (arr){
  //초기값 i를 설정한다 시작값0 (배열순회)
    //최솟값을 설정한다 기본값은 i
    //초기값 j를 설정한다 시작값은 i + 1(i + 1부터 배열순회)
      //arr[min]이 arr[j]보다 크면 
        //최소값은 j가된다.
    //최소값과 i값을 바꿔준다.
  for(let i = 0; i < arr.length; i++){
    let min = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[min] > arr[j])min = j;
    }
    let dummy = arr[min];
    arr[min] = arr[i];
    arr[i] = dummy;
  }
  //정렬된 배열을 리턴한다.
  return arr;
}
