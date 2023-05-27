function atualizarClientes() {
    const clientes = fetch('http://localhost:3000/cliente')
.then(resposta => resposta.json())
.then(clientesDados => {
    clientesDados.forEach(cliente => {
        const li = document.createElement('li')
        li.innerText = `${cliente.nome} - ${cliente.email}`
        const ul = document.getElementById('listaClientes')
        ul.appendChild(li)
    })

    
})

}
atualizarClientes()

function atualizarFornecedores() {
const fornecedores = fetch('http://localhost:3000/fornecedor')
.then(resposta => resposta.json())
.then(fornecedoresDados => {
    fornecedoresDados.forEach(fornecedor => {
        const li = document.createElement('li')
        li.innerText = `${fornecedor.nome} - ${fornecedor.email}`
        const ul = document.getElementById('listaFornecedores')
        ul.appendChild(li)
    })

    
})

}

atualizarFornecedores()


function atualizarProdutos() {
const produtos = fetch('http://localhost:3000/produto')
.then(resposta => resposta.json())
.then(produtosDados => {
    produtosDados.forEach(produto => {
        const li = document.createElement('li')
        li.innerText = `${produto.nome} - ${produto.email}`
        const ul = document.getElementById('listaProdutos')
        ul.appendChild(li)
    })

    
})

}

atualizarProdutos()
