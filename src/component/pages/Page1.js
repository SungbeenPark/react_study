import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const Page1 = () =>{
    const [list,setList] = useState([])

    useEffect(()=>{
        const url = 'https://www.b-tour.kr/block-tour-front/api/cmmn/noticelist'
        fetch(url).then(res => res.json())
            .then((obj)=>{
                if(obj.success){
                    setList(obj.result)
                }
            })
    },[])

    //== 보다 ===를 사용. react 권장 ==는 유연 === 는 타입까지 체크
    if(list === null){
        return "loading.."
    }else{
        return (<>
            {list.map((item)=>(
                <div key={item.noticeId}>
                    <Link to={`/page2/${item.noticeId}`}>
                    {item.noticeId} | {item.noticeSj}
                    </Link>
                </div>
            ))}
        </>)
    }
}

export default Page1