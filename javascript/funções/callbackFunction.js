// callback function

function sayMyName(name) {
  console.log('antes de executar a funcao callback\n')

  name()

  console.log('\ndepois de executar a funcao callback')
} 

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)