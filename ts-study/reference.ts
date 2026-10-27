interface Course {
    courseId: number,
    courseName: string,
    grade: 'A' | 'B' | 'C' | 'D' | 'F'
}

interface Student {
    id: number,
    name: string,
    subjects: Course[]
}

let std1: Student = {
    id: 1,
    name: "김선회",
    subjects: [
        { courseId: 101, courseName: "수학", grade: 'A' },
        { courseId: 107, courseName: "영어", grade: 'B' }
    ]
}

std1.subjects.forEach(subject =>
    console.log(`과목명: ${subject.courseName}, 학점: ${subject.grade}`));