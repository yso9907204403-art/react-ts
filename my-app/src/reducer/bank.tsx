import { useReducer, useState } from "react";

// state 타입 정의
interface BankState{ 
    balance: number;
    history: string[];  //거래 내역(transaction_history)
};

// Action 타입 정의 - 입금, 출금, 초기화 - Union 타입
type BankAction = 
    | {type: "DEPOSIT"; amount: number} 
    | {type: "WITHDRAW"; amount: number}
    | {type: "RESET"}

// 초기값 정의
const initialState: BankState = {
    balance: 0,
    history: []  //빈 배열로 초기화
};

// 입력: (state: BankState, action: BankAction), 반환자료형: BankState
const bankReducer = (state: BankState, action: BankAction): BankState => {
    switch(action.type){
        case "DEPOSIT":  //입금
            return {
                balance: state.balance + action.amount,
                history: [...state.history, `입금 ${action.amount.toLocaleString()}`]
            }
        case "WITHDRAW": //출금
            if(action.amount > state.balance){
                return state;
            }
            return {
                balance: state.balance - action.amount,
                history: [...state.history, `출금 ${action.amount.toLocaleString()}`]
            }
        case "RESET":    //초기화  
            return initialState;
        default:
            return state;    
    }
}

const Bank = () => {
    const [state, dispatch] = useReducer(bankReducer, initialState);
    const [amount, setAmount] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value));  //숫자형으로 변환
    }

    const handleWithdraw = () => {
        if(amount > state.balance){
            alert("잔액이 부족합니다.");
            return;  //즉시 종료
        }
        dispatch({type: "WITHDRAW", amount});
    }

    return(
        <div>
            <h2>은행 입, 출금</h2>
            <h3>잔액: {state.balance.toLocaleString()}원 </h3>
            <input 
                type="number" 
                value={amount}
                step={1000}
                onChange={handleChange}
            />
            <button onClick={() => 
                dispatch({type: "DEPOSIT", amount})}>입금</button>
            <button onClick={handleWithdraw}>출금</button>
            <button onClick={() => dispatch({type: "RESET"})}>초기화</button>

            {/* 거래 내역 조회 */}
            <ul>
                {state.history.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Bank;