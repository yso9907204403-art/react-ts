interface GreetProps{
    name: string
    age: number
}

const Greet2 = ({name, age}: GreetProps) => {
    return(
        <div>
            <h3> 이름: {name}</h3>
            <h3> 나이: {age}</h3>
            <button onclick={doclick}> 클락</button>
        </div>
    )
}

export default Greet2/*type GreetProps = {
    name: string,
    age: number
    doClick: () => void
}*/

// 객체 정의(Props)
interface GreetProps{
    name: string,
    age: number
    doClick: () => void
}

const Greet2 = ({name, age, doClick}: GreetProps) => {

    return(
        <div>
            <h3>이름: {name}</h3>
            <h3>나이: {age}</h3>
            <button onClick={doClick}>클릭</button>
        </div>
    )
}

export default Greet2;