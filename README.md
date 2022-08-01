# React 교육용 프로젝트

## 최고의 선생님 [https://ko.reactjs.org/](https://ko.reactjs.org/)

### React 구조
- spa(Single Page Application) : 웹 사이트의 전체 페이지를 하나의 페이지에 담아 동적으로 화면을 바꿔가며 표현하는 것이 SPA이다. 뭔가를 클릭하거나 스크롤하면, 상호작용 하기 위한 최소한의 요소만 변경이 일어난다. 페이지 변경이 일어난다고 보여지는 것 또한 최초 로드된 자바스크립트를 통해 미리 브라우저에 올라간 템플릿만 교체되는 것이다.
- public 폴더 :  index.html 이 있는 폴더. 실제 빌드 되어서 출력 될 폴더
- node_modules : npm 에서 다운 받은 컨포넌트
- index.js 설명 :  index.html 파일의 root div 내용을 채우는 용도.  portal 개념하고 비슷하지만 다름.
- app.js 설명 :  index.js에서 호출되는 컴포넌트

1. react 설치 ```npx create-react-app```
2. Hello World 찍어보기.
3. 함수 생성관련 설명 [함수관련.md](함수%20생성관련.md)
4. class, css, style 적용
   - class : className 으로 사용
   - css : 일반적인 css 인식
   - style : ``` style={{color:red,marginTop:20px}}``` camel 형식으로 입력
5. Router (Next.js에서는 다른방식이라 넘어가도 무관)
<details>
<summary> Router 예시 </summary>

```javascript
5.x버전 문법
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

    <> 
        <BrowserRouter> 
            <div id="wrap"> 
                <Route path="/" component={}/> 
                <Switch> 
                    <Route path='/page1' component={}/> 
                    <Route path='/page2' component={} /> 
                    <Route exact path="/" component={} /> 
                    <Redirect path="*" to="/" /> 
                </Switch> 
            </div> 
        </BrowserRouter>
    </>   

6.0.2 문법
<BrowserRouter> 
  <div id="wrap"> 
      <Routes> 
          <Route path="*" element={<Header/>}/> 
      </Routes> 
      <Routes> 
          <Route path='/page1' element={<Page1/>}/> 
          <Route path='/page3' element={<Page3/>}/> 
          <Route path='/page2' element={<Page2/>}/> 
          <Route 
              path="*" 
              element={<Page1/>} 
          /> 
      </Routes> 
  </div> 
</BrowserRouter>

파라미터 수신법 
    let navigate = useNavigate(); 
    let params = useParams(); 
    const noticeId = params.noticeId
```
- install react-router-dom
- BrowserRouter : 라우터들 묶는 역활 정도로 생각
- Router : 실제 호출할 컴포넌트
    - path에 :변수명 으로 특정 변수 전달가능
    - exact가 True 이면 path가 정확할 경우 실행
- Switch : 특정 path에 따라 보여줄 컴포넌트 설정
- Redirect : Router에 해당되지 않는 경우 특정 path로 전달
</details>

5. State 설명 [State&Props.md](State%20&%20props.md)
6. 생명주기 설명 [lifeCycle.md](lifeCycle.md)
7. 리스트 형식 출력해보기.
   - 목록 : http://b-tour.kr/block-tour-front/api/cmmn/noticelist
   - 상세 : http://b-tour.kr/block-tour-front/api/cmmn/noticeview?noticeId=N12