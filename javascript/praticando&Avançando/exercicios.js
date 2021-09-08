// 1. Declare uma variável de nome weight

// let weight;

// 2. Que tipo de dado é a variável acima?

// console.log(typeof weight)

/* 
  3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (interger)
    * stars: Number (float)
    * isSubscribed: Boolean
*/
// let name, age, stars, isSubscribed;
// name = 'Bruno'
// age = 25
// stars = 7.5
// isSubscribed = true

/*
  4. A variável student abaixo é de que tipo de dado?

  4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

  4.2 Mostre no console a seguinte mensagem:
    
    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name>, <age> e <weight> pelos valores de cada propriedade do objeto
*/

/*
let student = {
  name: 'Bruno',
  age: 25,
  weight: 74.5,
  isSubscribed: true
};

console.log(typeof student)

console.log(`
    ${student.name} tem a idade de ${student.age} e 
    pesa ${student.weight}Kg
`)
*/

/* 
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/
/*
let students = [];
*/

/* 
    6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
*/
/*
students = [ student ]
console.log(students)
*/

/* 
  7. coloque no console o valor da posição zero do Array acima
*/
/*
console.log(students[0])
*/
/*
  8. Crie um novo estudent e coloque na posição 1 do array students
*/
/*
const student_new = {
  name: 'Felipe',
  age: 27,
  weight: 92.5,
  isSubscribed: false
}
students_new[1] = student_new
console.log(students_new)
*/

/*
  9. Sem rodar o código responda qual é a respota do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

  console.log(a)
  var a = 1

  A resposta do código será undefined, por que a variável var irá sofrer o Hosting(elevação)
*/

console.log(a)
var a = 1       // undefined

