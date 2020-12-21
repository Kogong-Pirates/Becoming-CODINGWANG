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


///////// Selection Sort /////////

/*

    Selection Sort 오름차순 수도코드
    1. 배열을 반복하여 가장 작은 값의 위치와 값을 찾자.
    2. 그 값을 배열의 제일 첫 번쨰 (arr[0])과 바꿔준다.
    3. 맨 앞(바꿔준 값)을 제외하고 다시 배열에서 가장 작은 값을 찾는다.
    4. 그 값을 2번(순서)의 다음 값으로 바꿔준다. (arr[1])
    5. 1~4를 배열의 길이만큼 반복한다.

*/

function selectionSort(array) {                        // [5,3,1,2,7] 배열이 들어간다고 가정하자.
    let minIndex = 0;                                  // 가장 작은 값의 위치를 찾기 위한 녀석
    let swap = 0;                                      // 바꿀 값을 저장해 주는 녀석
                
    for (let i = 0; i < array.length; i++) {           // 배열을 반복
        minIndex = i;                                  // i = 0 array[0] ==> 5 부터 시작하자. 그리고 minIndex에 i를 담자.
                                                       // 2번 째 반복할 때는 다시 i = 1 = minIndex가 된다. 
                                                       // 그러면 이미 정렬된 위치는 안 보고 시작.

        for (let j = i + 1; j < array.length; j++) {   // j를 i 보다 1 크게 해서 i를 제외하고 비교하자.
            if (array[minIndex] > array[j]) {          // 가장 작은 값 반복문으로 찾기
                minIndex = j                           // minIndex에 가장 작은 값의 위치를 저장
                                                       // 그러면 현재 minIndex는 1이 있던 2 
            }
        }

        if (minIndex !== i) {                         // 가장 작은 값의 위치가 i랑 다르면 바꾼다.
            swap = array[minIndex]                    // 먼저 가장 작은 값을 저장. swap = 1
            array[minIndex] = array[i]                // 가장 작은 값이 있던 곳에 array[0] = 5 를 넣어주자.
            array[i] = swap                           // array[0]에 가장 작은 값인 1을 넣어주자.
        }
    }                                                 // 위의 행동을 배열의 길이만큼 반복한다. 
    return array                                      // 배열 리턴.
}
console.log(selectionSort([1, 2, 5, 6, 10]))


///////// insertion Sort /////////

/*

    insertion Sort 오름차순 수도코드
    1. 반복문을 통해 배열의 두 번째 값을 시작으로 하자.
    2. 두 번째 값과 첫 번째 값을 비교하여, 두 번째 값이 더 작으면 서로 바꿔주자.
    3. 세 번째 값을 할 때는 두 번째 값과 비교 후 교체, 다시 두 번째 값을 첫 번째 값과 비교 후 교체.
    4. 2~3을 반복.. 네 번째는 세 번째와 비교.. 다시 세 번째와 두 번째를 비교..
    5. 배열의 길이 만큼 반복시켜 주자.


*/


function insertionSort(arr) {      
    let swap                                 // 바꿀 값을 할당할 녀석
    for (let i = 1; i < arr.length; i++) {   // 배열의 두 번째 부터 시작한다.
        for (let j = i - 1; j > -1; j--) {   // 바로 전 녀석과 비교하기 때문에 j = i-1, 그리고 중요한건 j--
                                             // 선택 정렬은 배열의 처음부터 비교하는 것이 아니라
                                             // 전 위치와 비교하기 때문에 순회하는 순서가 거꾸로다.
            
            if (arr[j] > arr[j + 1]) {       // j = i-1 이며, j +1 = i 이다.
                swap = arr[j + 1];           // if가 성립하면, 현재 위치를 저장
                arr[j + 1] = arr[j]          // 현재 위치에 전 위치의 값을 넣고
                arr[j] = swap                // 전 위치에는 현재 값을 넣는다.
            }
        }

    }
    return arr
}

console.log(insertionSort([, 5, 1, 7, 2, 9]))


///////// bubble Sort /////////

/*

    bubble Sort 오름차순 수도코드
    1. 반북문을 통해 j와 j+1을 비교해주자.
    2. 비교해서 큰 값을 j+1로 바꿔주자.
    3. 배열의 전체 길이 만큼 1~2를 반복하자
    4. n번 째 반복할 때는  j의 크기 제한을 (전체길이-n)로 해주자.   
    5. 값이 바뀔 때 마다 count를 하여, 이미 정렬된 배열이라면 반복을 1번만 해주자.

*/

function bubbleSort(arr) {
    let swap
 
    for (let i = 0; i < arr.length; i++) {           // 배열의 길이 만큼 밑의 행동을 반복한다.
         let count = 0;                              // 값이 바뀌고 반복이 다시 시작한다면 count를 초기화.
        for (let j = 0; j < arr.length -i; j++) {   
            if (arr[j] > arr[j + 1]) {               // j와 j+1 친구만 비교한다.
                count ++                             // 버블이 일어나면 카운트!
                swap = arr[j]                        
                arr[j] = arr[j + 1]                 // j가 더 크면 j+1와 서로 바꿔주자.
                arr[j + 1] = swap
       
            }
        }    console.log(count)
    
        if (count === 0) {                          //만약 배열이 이미 정렬되어 있다면 count는 0
            break;
        }
    }
    return arr
}

console.log(bubbleSort([3, 2, 1, 5, 4]))


///////// merge Sort /////////

/*

    merge Sort 오름차순 수도코드
    1. 주어진 배열을 가운데를 기준으로 반으로 나누는 코드를 짠다.
    2. 배열을 더 이상 나눌 수 없을 때까지 나눈다.
    3. 반으로 나눈 배열을 합쳐주는 배열의 인자로 넣는다.
    4. 두 값을 비교하여 작은 값을 빈 배열에 넣고 합친다.

*/


function merge(left, right) {
    let result = []                                        // 새로운 배열 
    while (left.length !== 0 && right.length !== 0) {      // 더 이상 배열이 들어오지 않으면 멈춘다.
        if (left[0] < right[0]) {                          // 제일 작은 값이 앞에 오기 때문에 앞의 값만 비교.
            result.push(left.shift())                      // 작은 값을 빈 배열에 넣고, 기존 배열에서는 제거 해주자.
            
        } else {
            result.push(right.shift())
        }
    }
    return result.concat(left.slice(0), right.slice(0))   // 최종 합치기.
}

function mergeSort (arr) {
    if (arr.length === 1) {                               // 배열을 나눌 수 없으면 그만.
        return arr
    }
    let mid = Math.floor(arr.length / 2)                  // 배열을 가운데를 기준으로 나누는 과정.
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))       // 나눈 배열을 위에 합치는 배열에 넣는다.
                                                          // 재귀처럼 넣어준다. 
}

console.log(mergeSort([5, 4, 3, 2, 1, 5, 7, 9, 10, 2, 3, 6, 4]))


///////// quick Sort /////////

/*

    quick Sort 오름차순 수도코드
    1. 먼저 기준점인 pivot을 정한다.
    2. pivot보다 작으면 left에 넣고, 크면 right에 넣는다.
    3. 비교 도중 i와 pivot을 비교하게 되면  

*/

function quickSort(array) {
    
    if (array.length < 2) {                     // 재귀의 탈출 조건
    return array;   
    }

    const pivot = [array[0]];                  // 기준점
    const left = [];  
    const right = [];

    for (let i = 1; i < array.length; i++) {      
        if (array[i] < pivot) {               //기준점 보다 작으면 
            left.push(array[i]);              //왼쪽에 넣고
        } else if (array[i] > pivot) {        //기준점 보다 높으면
            right.push(array[i]);             //오른쪽에 넣고
        }
        else {
            pivot.push(array[i]);            // 기준점과 같은 값은 따로 저장. 
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));   // 작은 left를 기준으로 concat을 해준다.
}

console.log(quickSort([1,3,5,7,9,1,2,4,10]))