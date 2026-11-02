import { useEffect, useState } from "react";

const Memo = () => {
    const [memo, setMemo] = useState<string>(() => {
        // 저장된 메모를 가져옴(없으면 빈 문자열 초기화)
        return localStorage.getItem("memo") ?? "";
    });

    // memo가 바뀔 때마다 저장
    useEffect(() => {
        localStorage.setItem("memo", memo);
    }, [memo]);

    // 입력값 변경 함수
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMemo(e.target.value);
    }

    return(
        <div>
            <h2>메모장</h2>
            <textarea  
                value={memo}
                onChange={handleChange}
                placeholder="메모를 입력하세요"
                rows={5}
                cols={40}
            />
            <p>글자수: {memo.length}</p>
            <button onClick={() => setMemo("")}>메모 초기화</button>
        </div>
    )
}

export default Memo;    