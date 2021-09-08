// const e let são locais e só funcionam no escopo onde foi criada
// console.log('> existe y antes do bloco? ', y)
let y = 1

{
  y = 0
  console.log('> existe y ', y)
}

console.log('> existe y depois do bloco? ', y)

const x = 0

{
  const x = 1
  console.log('> existe x ', x)
}

console.log('> existe x depois do bloco? ', x)
