## class방식과 hook(함수형) 방식이 있으나 함수형으로 개발. 
- 개발자 편의를위해 혼용 가능함.

# Props
props는 이전 commponent에서 전달 하는 값들이 들어있음.

### Props class
```javascript
class Test extends React.Component{
    render() {
        return <>{this.props.변수명}</>
    }
}
```
### Props hook
```javascript
const Test = (props)=>{return <>{props.변수명}</>}
const Test = ({변수명1,변수명2})=>{return <>{변수명1}</>}
```

# State

jquery 에서는 특정 객체(a Tag, div Tag ) 접근하기위해서는 해당 객체의 ID, Class, Name 등의 방법으로 찾아서 
해당 객체의 value attr 값을 변경했습니다.

React 에서는 state가 아주 중요한 역활, 각 객체의 값, attr 컨트롤 등을 할수있는 변수로 생각하면됩니다.

### state 선언 class 방식 (가볍게 읽고 넘어감.)
```javascript
//선언
this.state = {객체}
//수정
this.setState(객체)


this.state = {a:1, b:2}
this.setState = {a:2}

//사용
render() {
    return <>{this.state.a}</>
}
```

### state 선언 hook 방식 주로 이용. 요즘 다 이걸로함.
```javascript
// const [setter,getter] = useState(initValue);

//선언
const [a,setA]= useState(1);
const [b,setB]= useState(2);
const [c,setC]= useState({a:1,b:2});

//값의 수정
setA(2)
setB(prevNum => prevNum+1)
setB((prevNum)=>{return prevNum+1})

let newC = {...c}
newC.a= c.a+1;
setC(newC);

```
