exports.produtos = [
  { id: 1, nome: 'Arroz 5kg', valor: 20.00, qtd: 1 },
  { id: 2, nome: 'Feijão', valor: 6, qtd: 1 },
  { id: 3, nome: 'Açucar', valor: 4.25, qtd: 1 },
  { id: 4, nome: 'Batata', valor: 0.60, qtd: 12 },
  
]
exports.clientes = [
  {id: 1, nome: "Michael Jacson"},
  {id: 2, nome: "Beatriz"}
]
exports.maiorIdade = (dtNasc) => {
  console.log('Maior idade: ' + dtNasc)
}