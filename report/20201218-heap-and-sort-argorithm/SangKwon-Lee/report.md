input your report here

-   블로깅으로 대체하셨다면 링크를 올려주세요
-   레포트를 md파일로 저장하실려면 이 내용들을 지우고 자유롭게 작성해주세요
-   코드만 올리실땐 코드에 주석을 달아 설명을 적어주세요
    /\*

1. 선택 정렬 알고리즘.
   현재 위치에 들어갈 값을 찾아 정렬하는 배열 (i와 배열 전부)
   제자리 정렬 알고리즘의 하나. (제자리 정렬이란? 주어진 공간 외에 추가적인 공간을 사용하지 않는 정렬)
   선택 정렬 알고리즘은 최소 선택 정렬(오름차순)과 최대 선택 정렬(내림차순)으로 나뉜다.

특징
시간 복잡도 O(n2)
제자리 정렬이기 때문에 메모리가 절약된다.
알고리즘이 단순하고 직관적이다.
시간 복잡도가 오래 걸려 성능이 떨어진다.



\*/


2. 삽입 정렬 알고리즘
    현재 위치에서 그 전의 배열들을 비교하며(i와 i-1) 현재 위치가 들어갈 곳을 찾아 넣는 정렬 알고리즘.
    배열의 두 번째 위치부터 시작한다.
    EX) 두 번쨰 값은 첫 번째 값과 비교, 세 번째 값은 첫 번쨰와 두 번째 값을 비교.

특징
평균 시간 복잡도는 O(n2).
하지만 배열이 이미 정렬되어 있으면 1번만 순회를 하기에 O(n)이 된다.
대부분의 값들이 정렬되어 있을 경우 효율적이다.
제자리 정렬이기 때문에 메모리가 절약된다.

3. 버블 정렬 알고리즘
    i와 i+1를 계속 비교하며 값을 바꿔 정렬하는 알고리즘.
    1번 순회할 때마다 가장 큰 값이 배열의 마지막에 가게 된다.
    n번 반복할 때마다 (배열의 길이 - n)을 해주면 바꿔줬던 값을들 제외하고 비교 가능.

특징 
시간 복잡도는 O(n2).
제자리 정렬이기 때문에 메모리가 절약된다.
이미 정렬된 데이터라면 O(n)으로 줄일 수 있다.


4. 합병 정렬 알고리즘
    분할 정복 알고리즘 종류의 하나.
    분할 정복은 큰 문제를 반으로 쪼개 해결해 나가는 방식을 말함.
    병합 정렬은 최선의 경우에도, 최악의 경우에도 O(nlog₂n)의 시간이 소요되기 때문에 데이터 분포에 영향을 덜 받는다. 항상 동일한 시간이 소요되므로 어떤 경우에도 좋은 성능을 보장받을 수 있다.



5. 퀵 정렬 알고리즘
    분할 정복 알고리즘 종류의 하나.
    퀵 정렬은 기준점(pivot)을 정한다. 그 후, pivot보다 작으면 기준의 왼쪽, 크면 오른쪽에 넣는다.
    pivot 왼쪽에 놓여진 기준 원소보다 작은 배열에서 위와 같은 방법으로 다시 pivot을 설정하고 배열을 pivot을 기준으로 나눈다.
    이 방법을 반복하면 결국 기본 단계인 원소가 하나만 있는 배열이 남는다.

    구현 방법은 기준점이나, 왼쪽, 오른쪽으로 나누는 방법에 따라 다양하다.