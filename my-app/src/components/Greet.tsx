// {name}: {name: string} => 속성: 타입 정의
const Greet = ({name, age}: {name: string, age: number}) => {

    return(
        <div>
            <h3>이름: {name}</h3>
            <h3>나이: {age}</h3>
        </div>
    )
}

export default Greet;