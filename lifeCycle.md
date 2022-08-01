
# 생명주기 class(읽기만)
```javascript
class TestCommponent extends React.Component{
    //생성시 최초 1회 실행
    constructor(props){
        //보통 state의 초기값 선언.
        this.state = {count:1,isLoading:null}
    }

    // Mount  : 컴포넌트가 실행될때 단위
    // state의 값 정의
    componentDidMount() {
        this.setState = {isLoading:true}
    }

    //state 값의 변경이 발생하면 실행
    componentDidUpdate() {
        //state의 count,isLoading값이 변경되면 실행딤
    }

    //state값 사용 완료
    componentWillUnmount() {
        this.setState = {isLoading:false}
    }

    render() {
        if(this.state.isLoading === null){
            return 'isLoading'
        }

        return <>{this.state.isLoading}</>
    }
}
```

# 생명주기 useEffect
```javascript

const test = ()=>{
    const [page ,setPage] = useState(1);
    
    //page값이 변경될때마다 아래 effect 영역 실행.
    useEffect(()=>{
        const uri = `www.test.com/list/endpoint/{page}`;
        fatch(uri)
            .then(response => response.json())
            .then((obj)=>{console.log(obj)});
    },[page])
    //[page]  page값이 변경될때마다 실행되도록 처리
    // [] 최초 1회 실행
    // useEffect(()=>{} ), useEffenct를 사용시 두번째 인자를 전달하지 않으면 랜더링이 계속일어남
}

```