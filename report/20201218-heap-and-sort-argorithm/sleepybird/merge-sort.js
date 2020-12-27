// 오름차순 된 배열을 합쳐주는 함수
function merge (arr1, arr2){
  // 결과배열을 선언한다.
  // 두 배열모두 길이가 0이 아닐동안  
    // 각배열의 0번째 인덱스를 비교한다.  
    // 더 작은값을 *꺼내서 (shift해야됨) 결과배열에 푸쉬한다.  
  
  // arr1의 길이가 0이 아닐동안  
    // 각 배열의 0번째 인덱스를 꺼내서 결과배열에 푸쉬한다.

  // arr2의 길이가 0이 아닐동안
    // 마찬가지로 각 배열의 0번째 인덱스를 꺼내서 결과배열에 푸쉬한다.
  
  // 합쳐진 결과배열을 리턴한다.  

  const result = [];
  while(arr1.length && arr2.length){
    if(arr1[0] < arr2[0]){
      result.push(arr1.shift())
    }else{
      result.push(arr2.shift())
    }
  }

  while(arr1.length){
    result.push(arr1.shift())
  }

  while(arr2.length){
    result.push(arr2.shift())
  }

  return result;
}

//test
console.log(merge([1, 3, 4], [2, 5, 9]))

function mergeSort (arr){
  // 만약 배열의 길이가 1이면 배열을 리턴한다.
  if(arr.length === 1)return arr;
  // 배열을 두동강 내서 좌 우로 구분시킨다.  
  const standard = parseInt(arr.length / 2);
  const left = arr.slice(0, standard);
  const right = arr.slice(standard);
  // 좌 우 각각 mergeSort시키고 merge한 값을 리턴한다.
  return merge(mergeSort(left), mergeSort(right));
}

//test
console.log(mergeSort([5, 9, 4, 1, 6, 3, 2, 8, 7]))