import { useEffect, useState } from "react";
import type {Post} from './Posts'  // type 명시
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PostDetail = () => {
    //  posts/2 - '2'는 문자열임
    const {id} = useParams<{id: string}>();
    // Post | null - null도 자료형이므로 필수 기입함
    const [post, setPost] = useState<Post | null>(null);
    const navigate = useNavigate();

    // 해당 id의 글 가져오기
    useEffect(() => {
        const fetchPost = async () => {
            try{
                const response =
                    await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                setPost(response.data);
            }catch(error){
                alert("게시글을 가져오는 중 오류가 발생했습니다.");
            }
        };
        fetchPost(); //호출
    }, [id])

    // 로딩되지 않았을때 메시지 표시
    if(!post) return <div>로딩 중....</div>

    // 삭제 함수
    const deletePost = async (id: number) => {
        try{
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            alert("게시글이 삭제되었습니다.");
            navigate('/');
        }catch(err){
            alert("게시글 삭제 중 오류가 발생했습니다.")
        }
    }

    return(
        <div>
            <h2>게시글 내용</h2>
            <p>번호: {post.id}</p>
            <p>작성자 ID: {post.userId}</p>
            <p>제목: {post.title}</p>
            <p>내용: {post.body}</p>

            {/* navigate(-1) 도 가능 */}
            <button onClick={() => navigate('/')}>뒤로 가기</button>
            <button onClick={() => deletePost(post.id)}>삭제</button>
        </div>
    )
}

export default PostDetail;