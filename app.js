let amigos = [];

function adicionarAmigo() {
   const input = document.querySelector('input');
   const nome = input.value.trim();
    
    if (nome === "") {
        alert("Insira um nome.");
    } else {
        alert("Amigo inserido.");
    }

    amigos.push(nome);
    console.log(amigos);

    atualizarLista();

    input.value = '';
    input.focus();

}

function atualizarLista( ){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement("li");    
            item.textContent = amigos[i];              
            lista.appendChild(item);                  
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let numeroSorteado = Math.floor(Math.random() * amigos.length)
        let nomeSorteado = amigos[numeroSorteado];
        console.log(nomeSorteado);
        
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = ''; 

        const item = document.createElement("li");
        item.textContent = `Amigo sorteado: ${nomeSorteado}`;
        resultado.appendChild(item);

    }
    else {
        alert ("A lista está vazia.")
    }
}
    


