# emotion-diary
    - winterlood 이정환님 강의 내용을 바탕으로 공부한 내용입니다.
    - 출처 : 한입크기로 잘라먹는 리액트 - 이정환(winterlood)
## Study

## React

### React-dom
- 페이지 라우팅 2 - React Router 응용
    1. path variable => useParams => Diary 컴포넌트에 연습
        - Route path에 경로입력 시 "/path/:변수" 로 입력 
        - 이 경우 '/path' 와 '/:id'를 무조건 받겠다는 의미로 해석, :id가 없으면 console에 'no match...' 경고 발생
        - useParams Hook이라는 custom Hook을 사용하며, 반환 값은 url에 전달되어 들어오는 path variable을 객체로 모아서 가져다 줌
        - ex. {id} = useParams(); // react-router-dom의 custom hook이기 때문에 import해야 함
    2. Query String => useSearchParams => Edit 컴포넌트에 연습
        - query -> '?id=10&mode=dark' 페이지에 데이터를 전달하는 가장 간단한 방법
        - 페이지 렌더링에 영향을 주지 않음 => path variable 과 다른점
        - [searchParams, setSearchParams] = useSearchParmas();
        - useSearchParmas(); 함수가 리턴하는 값은 배열이며, 첫번째 반환받는 인덱스는 get()을 통해 꺼내쓸 수 있음
        - useState의 구조와 유사함. setSearchParams => searchParams를 바꾸는 상태관리 인덱스
    3. Page Moving = useNavigate => Edit 컴포넌트에 연습
        - useNavigate Hook은 페이지이동시키는 기능을 하는 함수를 반환
        - 반환받은 페이지 이동 함수의 매개변수로 경로를 입력하면 해당 경로의 페이지로 이동할 수 있음
        - 로그인 되지 않은 사용자가 로그인 페이지로 가려고 할때, 로그인 값을 검사해서 로그인 되지 않았으면, 강제로 로그인 화면으로 이동시킬 때 사용
        -페이지 이동 함수의 매개변수에 '-1'을 넣으면 뒤로 가기
        - ex.
        ```
        const navigate = useNavigate();
        <button onClick={() => {navigate('/home')} >홈으로 이동</button>
        ```
        
## 프로젝트 기초공사 1 (2023-08-15, 화)
1. 폰트 세팅(폰트 사용 시 라이센스 확인 필수!)
    - 구글 폰트 사용(nanum pen script / yeon sung) => 구글폰트 웹사이트에서 선택
    - @import로 변경하여, <style>내용만 복사</style> - App.css 최상단에 붙여넣기
    - CSS rules 복사하여, .App {붙여넣기} > font-family 속성은 가장 뒤에 적힌 속성을 따른다. 단, 같은 라인에 여러 폰트가 있는 경우에는 가장 왼쪽 속성을 따른다.

2. 레이아웃 세팅
    - 모든페이지에 반영되는 레이아웃을 세팅한다.
    - 모든 페이지에 공통적으로 적용되는 레이아웃(뒷배경 색상, 실제 서비스가 사용하는 면적, 폰트 등)
    - @media 키워드를 이용해서 특정 조건을 만족했을 때 적용되는 css 속성을 정의할 수 있다.
    - ex. @media(min-width: 600px){최소 너비가 600px일 때만 중괄호 내에 css 속성이 적용된다.}

3. 이미지 에셋 세팅
    - 감정 이미지들을 프로젝트에서 불러와 사용할 수 있는 환경 세팅
    - <img src={process.env.PUBLIC_URL + '/assets/파일명'} />
    - process.env.PUBLIC_URL 는 어떤 위치에 있든 /public 을 가리키게 됨
    - 렌더가 되지 않을 때는 return문 위에 아래와 같이 입력한다.
    - ```const env = process.env;``` ```env.PUBLIC_URL = env.PUBLIC_URL || "";```
    
4. 공통 컴포넌트 세팅
    - 모든 페이지에 공통으로 사용되는 버튼, 헤더 컴포넌트 생성
    - 유사하거나 똑같은 요소는 컴포넌트로 생성하여 재사용한다.
    - UI요소가 어떤 기준으로 얼마만큼 변화하게 되는지를 발견해서 패턴화하는 것이 필요하다.
    1. button
        - 버튼의 색깔과 역할을 고려하기!
        - 버튼이 가지게 될 prop을 정의하고 컴포넌트에 전달해주기
    2. header
        - 페이지별로 header를 가지며, 공통적인 사항이 발견됨
        - header 컴포넌트는 leftChild / headText / rightChild 세가지 prop에 의해 변화되게 만들면 된다.
        - prop을 전달할 때에는 컴포넌트 자체를 전달해도 된다. => 전달되는 prop의 개수를 줄일 수 있는 방법이다.
        - ```<MyHeader leftChild={<MyButton prop={prop}/>} />```

## 프로젝트 기초공사 2 (2023. 08. 17, 목)
1. 상태관리 세팅
    - 프로젝트 전반적으로 사용될 일기 데이터 State 관리 로직 작성
    - 각각의 페이지에서 요구하는 데이터가 다름 이에 App.js 에서 일기 데이터를 관리할 수 있는 일기 데이터 State를 작성
    <App/>
    |_<ReactRouter/>
        |_<Home/> - 일기 리스트 데이터 필요
        |_<New/> - 일기 생성 로직 필요
        |_<Edit/> - 일기 수정 로직 필요
        |_<Dairy/> - 일기 하나의 데이터 필요

2. 프로젝트 State Context 세팅
    - 일기 데이터 State를 공급할 Context를 생성하고 Provider로 공급하기

3. 프로젝트 Dispatch Context 세팅
    - 일기 데이터 State의 Dispatch함수들을 공급할 Context를 생성하고 Provider로 공급하기
