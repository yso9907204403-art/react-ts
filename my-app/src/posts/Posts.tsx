import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// 객체 타입 정의
export interface Post{
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    // jsonplaceholder에서 데이터 가져오기
    useEffect(() => {
        // 비동기 처리 - async / await
        const fetchPosts = async () => {
            try{
                const response = 
                    await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(response.data);
            }catch(error){
                alert("게시글 목록을 가져오는 중 오류가 발생했습니다.");
            }
        } // 닫기
        fetchPosts();  //호출
    }, []);

    return(
        <div>
            <h2>게시글 목록</h2>
            <h4><Link to="/posts/add">글쓰기</Link></h4>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                       <Link to={`/posts/${post.id}`}>{post.id}. {post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts;