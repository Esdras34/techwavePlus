let carrinho = [];

// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(id, nome, preco, imagem) {
    // Verificar se o item já está no carrinho
    const itemExistente = carrinho.find((item) => item.id === id);
    if (itemExistente) {
        // Incrementa a quantidade se o item já existir
        itemExistente.quantidade += 1;
    } else {
        // Adiciona um novo item ao carrinho
        carrinho.push({ id, nome, preco, quantidade: 1, imagem });
    }
    alert(`${nome} foi adicionado ao carrinho!`);
}

// Função para atualizar o modal do carrinho
function atualizarModalCarrinho() {
    const itensCarrinho = document.getElementById("itensCarrinho");
    const totalCarrinho = document.getElementById("totalCarrinho");
    itensCarrinho.innerHTML = ""; // Limpa os itens anteriores
    let total = 0;

    // Adiciona cada item do carrinho ao modal
    carrinho.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        li.innerHTML = `
            <div>
                <img src="${item.imagem}" alt="${item.nome}" style="width: 50px; margin-right: 10px;">
                <strong>${item.nome}</strong>
                <small class="text-muted">x ${item.quantidade}</small>
            </div>
            <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
        `;
        itensCarrinho.appendChild(li);
        total += item.preco * item.quantidade;
    });

    // Atualiza o total
    totalCarrinho.innerText = total.toFixed(2);
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    alert("Compra finalizada com sucesso!");
    carrinho = []; // Limpa o carrinho
    atualizarModalCarrinho(); // Atualiza o modal
}
