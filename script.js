const students = [
    {
    name: "João", 
    gradeOne: 8,
    gradeTwo: 7,
    },
    {
    name: "José", 
    gradeOne: 5.5,
    gradeTwo: 6,
    },
    {
    name: "Maria", 
    gradeOne: 9,
    gradeTwo: 8.5,
    },
    {
    name: "Pedro", 
    gradeOne: 4.5,
    gradeTwo: 7.5,
    },
]

for(let student of students) {
    let average = ((student.gradeOne + student.gradeTwo) / 2).toFixed(1)

    if(average >= 7) {
        alert(`
        A média do(a) aluno(a) ${student.name} é: ${average}
        Parabéns, ${student.name}! Você foi aprovado(a) no concurso.
        `)
    } else {
        alert(`
        A média do(a) aluno(a) ${student.name} é: ${average}
        Não foi dessa vez, ${student.name}. Tente novamente.
        `)
    }
}


