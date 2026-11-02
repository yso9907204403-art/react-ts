import type {ReactNode} from 'react'

// children: 컴포넌트 태그 사이에 넣은 내용
// ReactNode: 문자열, 숫자, 배열등 모든 것
interface CardProps{
    title: string;
    children: ReactNode;
}

const Card = ({title, children}: CardProps) => {

    return(
        <div>
            <h3>{title}</h3>
            <div>{children}</div>
        </div>
    )
}

export default Card;