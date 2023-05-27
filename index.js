function atualizarClientes() {
    const ul = document.getElementById('listaClientes')
    ul.innerHTML = ''
    
    const clientes = fetch('https://exemplo-api-teste-seft.onrender.com/cliente')
.then(resposta => resposta.json())
.then(clientesDados => {
    clientesDados.forEach(cliente => {
        const li = document.createElement('li')
        li.innerText = `${cliente.nome} - ${cliente.email}`

// Botão deletar
const btnDelete = document.createElement('button')
btnDelete.innerText = "Remover"
btnDelete.className = "btn btn-danger"
btnDelete.addEventListener('click',() => deletarCliente(cliente.id))
li.appendChild(btnDelete)


        const ul = document.getElementById('listaClientes')
        ul.appendChild(li)
    })

    
})

}
atualizarClientes()

const formCadastro = document.getElementById('formCliente')
formCadastro.addEventListener('submit',(event) => {
    event.preventDefault()
    cadastrarCliente(event)
})

function cadastrarCliente(form){
    const clienteNovo = {
        nome: form.target.nome.value,
        email: form.target.email.value,
        telefone: form.target.telefone.value,
        senha: form.target.senha.value,
    }
    fetch('https://exemplo-api-teste-seft.onrender.com/cliente',{
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(clienteNovo)

    })
    .then(resposta => {
        if(resposta.status != 201){
            alert('Erro ao cadastrar!')
            return
        }

           
        alert('Cadastro com sucesso!')
        atualizarCliente()
    })
}

function deletarCliente(id){
    fetch(`https://exemplo-api-teste-seft.onrender.com/cliente'/${id}`,{
        method: 'DELETE'
    })
    .then(resposta => {
        if(resposta.status != 200){
            alert('Erro ao excluir')
        }
        atualizarClientes()
    })

}





function atualizarFornecedores() {
    const u2 = document.getElementById('listaFornecedores')
    u2.innerHTML = ''

const fornecedores = fetch('https://exemplo-api-teste-seft.onrender.com/fornecedor')
.then(resposta => resposta.json())
.then(fornecedoresDados => {
    fornecedoresDados.forEach(fornecedor => {
        const li2 = document.createElement('li')
        li2.innerText = `${fornecedor.nome} - ${fornecedor.email}`

        //botão deletar
        const btnDelete = document.createElement('button')
btnDelete.innerText = "Remover"
btnDelete.className = "btn btn-danger"
btnDelete.addEventListener('click',() => deletarFornecedor(fornecedor.id))
li.appendChild(btnDelete)


        const u2 = document.getElementById('listaFornecedores')
        u2.appendChild(li2)
    })

    
})

}

atualizarFornecedores()

const formCadastro2 = document.getElementById('formFornecedor')
formCadastro2.addEventListener('submit',(event) => {
    event.preventDefault()
    cadastrarFornecedor(event)
})

function cadastrarFornecedor(form2){
    const fornecedorNovo = {
        nome: form.target.nome.value,
        email: form.target.email.value,
        telefone: form.target.telefone.value,
        endereco: form.target.endereco.value,
    }
    fetch('https://exemplo-api-teste-seft.onrender.com/fornecedor',{
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(fornecedorNovo)

    })
    .then(resposta => {
        if(resposta.status != 201){
            alert('Erro ao cadastrar!')
            return
        }

          
        alert('Cadastro com sucesso!')
        atualizarFornecedor()
    })
}

function deletarFornecedor(id){
    fetch(`https://exemplo-api-teste-seft.onrender.com/fornecedor'/${id}`,{
        method: 'DELETE'
    })
    .then(resposta => {
        if(resposta.status != 200){
            alert('Erro ao excluir')
        }
        atualizarFornecedores()
    })

}



function atualizarProdutos() {
    const u3 = document.getElementById('listaProdutos')
    u3.innerHTML = ''


const produtos = fetch('https://exemplo-api-teste-seft.onrender.com/produto')
.then(resposta => resposta.json())
.then(produtosDados => {
    produtosDados.forEach(produto => {
        const li3 = document.createElement('li')
        li3.innerText = `${produto.nome} - ${produto.email}`

        const btnDelete = document.createElement('button')
        btnDelete.innerText = "Remover"
        btnDelete.className = "btn btn-danger"
        btnDelete.addEventListener('click',() => deletarProduto(produto.id))
        li.appendChild(btnDelete)


        const u3 = document.getElementById('listaProdutos')
        u3.appendChild(li3)
    })

    
})

}

atualizarProdutos()

const formCadastro3 = document.getElementById('formProdutos')
formCadastro3.addEventListener('submit',(event) => {
    event.preventDefault()
    cadastrarProduto(event)
})

function cadastrarProduto(form3){
    const produtoNovo = {
        descricao: form3.target.descricao.value,
        preco: form3.target.preco.value,
        quantidade: form3.target.quantidade.value
    }
    fetch('https://exemplo-api-teste-seft.onrender.com/produto',{
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(produtoNovo)

    })
    .then(resposta => {
        if(resposta.status != 201){
            alert('Erro ao cadastrar!')
            return
        }

        
        alert('Cadastro com sucesso!')
        atualizarProdutos()
    })
}

function deletarCliente(id){
    fetch(`https://exemplo-api-teste-seft.onrender.com/cliente/produto'/${id}`,{
        method: 'DELETE'
    })
    .then(resposta => {
        if(resposta.status != 200){
            alert('Erro ao excluir')
        }
        atualizarClientes()
    })

}
