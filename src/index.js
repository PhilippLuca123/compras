const moment = require('moment')
const { exibeTela, calculaValor } = require('../lib/funcoesComuns.lib')
const { produtos } = require('../model/dados')
exports.principal = () => {
  exibeTela('-------- Mercado DH --------')
  const data = moment().format('DD/MM/YYYY hh:mm')
  exibeTela('---- Lista Produtos - ' + data + ' ----')
  let valorTotal = 0;
  for (let i=0; i < produtos.length; i++) {
  valorTotal += calculaValor(produtos[i].qtd, produtos[i].valor)
  exibeTela(`${produtos[i].id} - ${produtos[i].nome} - ${produtos[i].qtd}`)
}
exibeTela('---> Total R$: ' + valorTotal)

}
