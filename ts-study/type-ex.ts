type MemberRole = "user" | "admin"

type User = {
    id: number,
    name: string,
    age?: number,
    role: MemberRole
}

const user1: User = {id: 1, name:"sam", role:"admin"}
const user2: User = {id: 1, name:"cal", age:24, role:"admin"}

console.log('회원1 - ID: ${user1.id}, 이름: $(user1.name'),
