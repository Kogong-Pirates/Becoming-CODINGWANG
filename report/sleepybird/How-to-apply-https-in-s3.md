# AWS s3에서 https적용하는법

우선 s3에 버킷을 만들고 빌드한 프로젝트를 넣으면,  
엔드포인트를 제공해주는데, 이 엔드포인트는 기본적으로 __https를 제공하지않는다.__  
그런데 요즘 시대에 https로 되어있지 않은 사이트를 찾는게 더 힘들다.  
그래서 서버도 https통신을 써야하는것은 물론, 클라이언트도 반드시 사용을해줘야,  
중간자공격을 막을 수 있다.  
다행히도 s3은 매우쉬운방법으로 https통신을 쓰도록 만들 수 있다.  
버킷설정은 생략하겠다.
  
## 도메인 발급받기  
우선 https를 사용하기 위해선,  
aws에서 적당한 도메인을 생성해줘야한다.  
서비스 검색을 통해 __Route53__ 을 가보자.  
<a href="https://imgur.com/yaPR7tX"><img src="https://i.imgur.com/yaPR7tX.png" title="source: imgur.com" /></a>

도메인 등록을 눌러준다.  
<a href="https://imgur.com/IRkc0fk"><img src="https://i.imgur.com/IRkc0fk.png" title="source: imgur.com" /></a>

제일 싼 click으로 해주자...  
예행연습이니까 뭐..  
<a href="https://imgur.com/W1Y3WTy"><img src="https://i.imgur.com/W1Y3WTy.png" title="source: imgur.com" /></a>

눈물을 머금고 결제해준다.  
<a href="https://imgur.com/pF8Uedb"><img src="https://i.imgur.com/pF8Uedb.png" title="source: imgur.com" /></a>
여차저차 구매를 하고,  
<a href="https://imgur.com/BA0Dnen"><img src="https://i.imgur.com/BA0Dnen.png" title="source: imgur.com" /></a>

이거는 선택사항인것임  

<a href="https://imgur.com/C3dFNQ1"><img src="https://i.imgur.com/C3dFNQ1.png" title="source: imgur.com" /></a>
좀기다리면 이런이메일이 올것이다.
바로 밑에있는 링크 클릭하면된다  

등록된 도메인을 확인하면, 자신의 도메인이 등록된걸 볼 수 있다.  
도메인 등록까지 시간이 조금 걸린다.  

자신의 도메인에 들어가서 설정을 해줘야한다.  
<a href="https://imgur.com/6xxXeZa"><img src="https://i.imgur.com/6xxXeZa.png" title="source: imgur.com" /></a>

호스팅 영역으로 가주자.  
<a href="https://imgur.com/LMoazYj"><img src="https://i.imgur.com/LMoazYj.png" title="source: imgur.com" /></a>

레코드 생성을 눌러주고,  
<a href="https://imgur.com/yrfh9Lf"><img src="https://i.imgur.com/yrfh9Lf.png" title="source: imgur.com" /></a>

<a href="https://imgur.com/S8z3fVF"><img src="https://i.imgur.com/S8z3fVF.png" title="source: imgur.com" /></a>

마법사로 전환해준다.  
<a href="https://imgur.com/7AGrXmw"><img src="https://i.imgur.com/7AGrXmw.png" title="source: imgur.com" /></a>

단순라우팅 선택  

<a href="https://imgur.com/eQ1475y"><img src="https://i.imgur.com/eQ1475y.png" title="source: imgur.com" /></a>

단순 레코드 정의 선택  
<a href="https://imgur.com/iJLhM43"><img src="https://i.imgur.com/iJLhM43.png" title="source: imgur.com" /></a>

위그림의 설명과 같다.  
레코드 유형은 IP주소유형에따라 달리선택해주면 된다.  
  
그리고 레코드 생성을 눌러주자.  
<a href="https://imgur.com/7MdB2IW"><img src="https://i.imgur.com/7MdB2IW.png" title="source: imgur.com" /></a>

그럼 내가 생성한 버킷이 만든 레코드이름으로 접속이 가능한걸 볼 수있다.  

## 인증서 발급하기

https는 알다시피 key.pem과 cert.pem파일이 필요하다.  
그런데 mkcert로 발급받은걸 쓸려고하면 aws는 그딴건 안받는다고 한다.  
그래서 AWS는 자체적으로 인증서를 발급하는  Certificate Manager 가 존재한다.  
우선 이동하면,  
<a href="https://imgur.com/PqwNc7K"><img src="https://i.imgur.com/PqwNc7K.png" title="source: imgur.com" /></a>

이런 화면이 뜬다. **인증서 프로비저닝**을 선택해주자.  
<a href="https://imgur.com/VHaNZb3"><img src="https://i.imgur.com/VHaNZb3.png" title="source: imgur.com" /></a>  

공인인증서 요청을 선택하고 넘어간다.  
<a href="https://imgur.com/kyELOzw"><img src="https://i.imgur.com/kyELOzw.png" title="source: imgur.com" /></a>  

이런식으로 발급받은 도메인앞에 *.를 쓴다면, 모든서브도메인을 보호할 수 있다.  
<a href="https://imgur.com/HfQSEjy"><img src="https://i.imgur.com/HfQSEjy.png" title="source: imgur.com" /></a>

DNS검증을 선택해준다.  

<a href="https://imgur.com/e8HUHk6"><img src="https://i.imgur.com/e8HUHk6.png" title="source: imgur.com" /></a>

그럼 우선 검증보류라고 뜨는데, 밑에 Route53에서 레코드 생성이보인다.  
자동으로 추가해주자.  
<a href="https://imgur.com/zfY0B6y"><img src="https://i.imgur.com/zfY0B6y.png" title="source: imgur.com" /></a>

검증을 하기위한 레코드로 따로 생성이 된거같은데,  
저렇게 버튼을 눌러주면 자동으로 생성된다.  
그리고 도메인을 확인할때까지 한숨 자자.  

<a href="https://imgur.com/Vbxl2yR"><img src="https://i.imgur.com/Vbxl2yR.png" title="source: imgur.com" /></a>

조금 기다리면 발급이 완료됐다고 뜬다.  

## Cloudfront 설정
로컬에서는 **인증서 경로를 직접 불러와서** 진행해줬다.  
이역시 aws에서는 경로를통해 발급받은 인증서를 활용할 수 없기에,  
Cloudfront를 설정해줘야한다.  
  
우선 (Cloudfront)[https://console.aws.amazon.com/cloudfront/home?#]로 드가자.  
createDistribution을 누르면,  
<a href="https://imgur.com/MTzrqVr"><img src="https://i.imgur.com/MTzrqVr.png" title="source: imgur.com" /></a>

위와같은 창이 뜰것이다. start해주자.  
<a href="https://imgur.com/qrylaX1"><img src="https://i.imgur.com/qrylaX1.png" title="source: imgur.com" /></a>

Origin Domain Name 에는 자신의 버켓중 하나가 뜰것이다.  
인증서를 추가해주기 원하는 버켓을 선택하자.  
<a href="https://imgur.com/CbohNUQ"><img src="https://i.imgur.com/CbohNUQ.png" title="source: imgur.com" /></a>

저 밑줄친 부분을 Redirect HTTP to HTTPS 로 해준다.  
그 외에는 신경쓸 부분은 없고, Distribution Settings 부분이 보일거다.  
Altername Domain Names에는 구매한 도메인명을 넣어주고,  
Cutom SSL Certificate를 선택한 후, Default Root Object에 index.html을 넣어준다.  

<a href="https://imgur.com/bWDjvAR"><img src="https://i.imgur.com/bWDjvAR.png" title="source: imgur.com" /></a>

<a href="https://imgur.com/S2yCFJS"><img src="https://i.imgur.com/S2yCFJS.png" title="source: imgur.com" /></a>

status가 deployed가 될때까지 무수히 기다린다(좀걸림)  

Deployed가 됐다면,  
Route 53으로 다시가서 레코드의 별칭을 CloudFront로 바꿔준다.  
<a href="https://imgur.com/iCtDICa"><img src="https://i.imgur.com/iCtDICa.png" title="source: imgur.com" /></a>

<a href="https://imgur.com/7DK4FBf"><img src="https://i.imgur.com/7DK4FBf.png" title="source: imgur.com" /></a>

짜잔 그럼 https를 성공적으로 적용시킬 수 있다.