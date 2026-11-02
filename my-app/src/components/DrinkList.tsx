// 음료 리스트 컴포넌트 정의
const DrinkList = ({drinks}: {drinks: string[]}) => {

  return(
    <div>
      <ul>
        {drinks.map((drink, index) => (
            <li key={index}>{drink}</li>
        ))}
    </ul>
    </div>
  )
}

export default DrinkList;