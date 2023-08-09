# emotion-diary

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
        ``` const navigate = useNavigate();
            <button onClick={() => {navigate('/home')} >홈으로 이동</button> ```
        

## JavaScript

## CSS

