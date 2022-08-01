
import { useParams} from "react-router-dom"
import {useEffect, useState} from "react";

const Page2 = () =>{
    let params = useParams();
    const noticeId = params.noticeId

    const [item,setItem] = useState({})

    useEffect(()=>{
        if(noticeId !== undefined) {
            const url = `http://b-tour.kr/block-tour-front/api/cmmn/noticeview?noticeId=${noticeId}`

            fetch(url).then(res => res.json())
                .then((obj)=>{
                    if(obj.success){
                        setItem(obj.noticeBass);
                    }
                })
        }
    },[noticeId])

    if(noticeId === undefined){
        return <>not found page</>
    }else{
        return (<>{item.noticeId} | {item.noticeSj}
            <div dangerouslySetInnerHTML={ {__html: item.noticeDetail} }/>
        </>)
    }
}

export default Page2