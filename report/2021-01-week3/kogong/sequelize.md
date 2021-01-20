## **title: 'Sequelize 개념 정리를 스프린트로 해보자'**

## **date: 2021-01-19 11:15:30**

---

이번에는 Sequelize에 대한 개념을  
스프린트를 통해 복습하려고 한다.

내가 복습하려고 쓰는 글이기에  
나만 이해할 수 있을 글이 될 것 같다.

하하하

---

# **Sequelize란?**

나는 저번에 mysql을 배우면서 raw Query을 작성했다.
sequelize는 NodeJs 환경에서 raq Query문을 사용하지 않고 더 쉽게 다룰 수 있도록 도와주는 라이브러리!

스프린트를 보여 하나씩 해보자.

# **Sequelize 설치 및 시작 단계**

```js
$ npm install --save sequelize
```

요 문구를 통해 sequelize를 설치할 수 있다.
그리고

```js
npm install --save-dev sequelize-cli
```

요 문구를 통해 cli도 설치하자.
위 명령어는 마이그레이션을 할 수 있도록 돕는 툴로, CLI에서 모델을 생성해주거나, 스키마 적용을 할 수 있도록 돕는다.

여기서 끝이 아니다.

```js
npx sequelize-cli init
```

이것도 해야 한다.  
bootstraping라는 것으로 프로젝트 초기 단계를 자동으로 설정할 수 있도록 도와주는 일.  
위 명렁어를 성공적으로 입력하면

- config/config.json
- models/
- migrations/
- seeders/
  요렇게 폴더와 파일이 생긴다. 이러면 진짜 시작할 수 있다.

---

# **mysql에 접속하기**

![image](/assets/img/sample/seq1.png)

config.json에 들어가면 이렇게 작성이 자동으로 되어있다.  
위에서

```js
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
```

요 부분을 통해 우리는 database를 하나 만들어 줄 수 있다.

```js
npx sequelize db:create
```

터미널에 이렇게 입력하면 데이터 베이스가 하나 만들어진다. 비밀번호는 root 비밀번호를 적어주자!
이후 mysql에 접속해서 보면 확인 가능 !

---

# **Model 생성하기**

```js
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

위 명령어는 sequelize 공식 문서에 나와 있다.  
위에 처럼 작성하면 User라는 테이블이 만들어지고, 그 안에 firstName,lastName,email이 생성된다.  
각자 필요한 이름과 열을 만들어 주자.

![image](/assets/img/sample/seq2.png)

하고 나면 models 폴더에 자동으로 url.js가 만들어진 모습을 볼 수 있다.  
초기값을 따로 설정하고 싶다면

```js
{
	url: DataTypes.STRING,
	title: DataTypes.STRING,
	visits: {
	    type: DataTypes.INTEGER,
	    defaultValue: 0,
			},
},
```

이렇게 적으면 visits의 초기값을 0으로 정할 수 있다.

---

# **마이그레이션 실행**

이후 위에서 만든 모델을 데이터베이스에 입력을 해줘여 한다. 그런 작업을 마이그레이션이라고 한다.
데이터베이스와 위에서 만든 모델으 연결시켜주는 명령어가 있다.

```js
npx sequelize-cli db:migrate
```

이렇게 하면 마이그레이션에 폴더와 파일이 생긴다.  
만약 마이그레이션을 수정하고 싶다면 새로 만들고, 이전에 만들었던 마이그레이션을 undo 명령어를 통해 지워줘야 한다.  
모든 마이그레이션은 SequelizeMeta라는 곳에 저장이 된다. 실제로 database에 접속해 보면 있다.

![image](/assets/img/sample/seq3.png)

한 번 들어가 봤다.
저 곳에 우리가 입력한 모든 마이그레이션이 있다.  
만약 똑같은 마이그레이션을 적용한다면 이미 적용했다고 저곳에서 알려주고, 막아준다.

---

# **Controller 작성 및 Router 연결**

Controller를 따로 관리해주기 위하여 Controller라는 폴더 안에 links라는 폴더를 만들고 그 안에 index.js를 만들었다.
여기에는 post, get 메소드가 들어갈 예정이다.

![image](/assets/img/sample/seq4.png)

현재는 기본 틀만 이렇게 잡아주었다.

![image](/assets/img/sample/seq5.png)

routes에서 연결은 위에 처럼 해주었다.

---

# **Controller 함수 작성**

먼저, 스프린트(과제)에서 요구하는 것은 Post 요청을 했을 때 url과 title을 받아오는 것이다.
또한, 요구사항으로 modules/utils.js에 있는 getUrlTitle이라는 함수를 가져와서 이것을 통해 Title을 받아오라고 한다.

```js
const { getUrlTitle } = require('../../modules/utils.js');
```

그래서 Controller.js 제일 위에 요 문구를 적어 주었다. 이제 사용가능 !
getUrlTitle은 어떤 함수일까?

![image](/assets/img/sample/seq6.png)

이렇게 생겼다.  
대충 첫 번째 인자로 url을 넣으면 걔를 콜백으로 넘긴다.  
콜백의 인자를 보면 (err, title)이 오는 것을 알 수 있다.

![image](/assets/img/sample/seq7.png)

이렇게 포스트 요청을 과제 요구사항대로 만들어 주었다.

![image](/assets/img/sample/seq8.png)

get요청을 했을 때

![image](/assets/img/sample/seq9.png)

getId요청을 했을 때.

대략적인 설명은 주석을 통해 달았다.  
아직 완벽하게 이해하지 못한 부분도 있어서 더 복습이 필요하다.

이렇게 스프린트 리뷰 끝.
