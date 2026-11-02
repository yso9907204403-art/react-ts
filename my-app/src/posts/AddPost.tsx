import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type {Post} from "./Posts"

const AddPost = () => {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const navigate = useNavigate();

    // 로딩 상태 관리
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 로딩 시작
        setIsLoading(true);

        // 예외 처리: try ~ catch ~ finally
        // finally - 예외가 있는 없든 초기화 상태 유지
        try{
            // id는 자동 순번이므로 입력에서 제외
            const newPost: Omit<Post, 'id'> = {userId: 1, title, body};
            const response =
            await axios.post("https://jsonplaceholder.typicode.com/posts",
                newPost )
            console.log("게시글 생성됨: ", response.data);
            setTitle("");
            setBody("");
            alert("게시글이 성공적으로 등록되었습니다.");
            navigate('/'); //게시글 목록 페이지로 이동
        }catch(error){
            alert("게시글 등록 중 오류가 발생했습니다.");
        }finally{
            setIsLoading(false);
        }
    }

    return(
        <div>
            <h2>글쓰기</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        placeholder="제목을 입력하세요"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <textarea 
                        rows={5}
                        placeholder="내용을 입력하세요"
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "등록 중..." : "등록"}
                </button>
            </form>
        </div>
    )
}

export default AddPost;