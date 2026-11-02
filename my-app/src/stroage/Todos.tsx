import { useEffect, useState } from "react";

// 할 일 타입 정의
type Todo = {
    id: number;
    text: string;  
    completed: boolean;
}

// 브라우저 저장된 할 일 목록 가져오기
const loadTodos = (): Todo[] => {
    try{
        const saved = localStorage.getItem("todos");
        // 저장된 데이터(json 타입)를 자바스크립트 객체로 파싱
        return saved ? (JSON.parse(saved) as Todo[]) : [];
    }catch{
        return [];  //할 일 목록이 비어있음
    }
}

const Todos = () => {
    const [inputValue, setInputValue] = useState<string>("");
    // 초기화 할때 브라우저에 저장된 데이터 불러옴
    const [todos, setTodos] = useState<Todo[]>(loadTodos);

    // todos가 바뀔 때마다 JSON 문자열로 저장
    useEffect(() => {
        // JSON.stringify(todos): 객체 -> json 데이터
        localStorage.setItem("todos", JSON.stringify(todos));
    })

    // 할 일 추가
    const addTodo = () => {
        if(!inputValue.trim()){
            alert("할 일을 입력해 주세요");
            return;
        }
        // 할 일 추가됨
        setTodos([...todos, {
            id: Date.now(),  //자동(날짜와 시간) 
            text: inputValue,
            completed: false
        }])
        setInputValue(""); // 입력값 초기화 
    }

    return(
        <div>
            <h2>할 일 목록</h2>
            <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="할 일을 입력하세요"
            />
            <button onClick={addTodo}>추가</button>
            {/* 목록 출력 */}
            <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
            </ul>
        </div>
    )
}

export default Todos;