function gerar(pdf = false, print = false) {
    // for (let i = 1; i <= 4; i++)
    //   document.getElementById(`r${i}`).textContent = document.getElementById(`c${i}`).value;

    if(document.getElementById('c1').value === "PEDIGREE Ração Nutrição Essencial"){
      valorProduto1 = 124.99
      produto1 = "PEDIGREE Ração Nutrição Essencial - 10.1kg"
    }else if(document.getElementById('c1').value === "Ração GranPlus Choice Frango e Carne"){
      valorProduto1 = 109.90
      produto1 = "Ração GranPlus Choice Frango e Carne - 10.1kg"
    }else if(document.getElementById('c1').value === "Ração Golden Formula Frango e Arroz"){
      valorProduto1 = 199.80
      produto1 = "Ração Golden Formula Frango e Arroz - 15KG"
    }

    if(document.getElementById('c2').value === "Ração Golden Special Sabor Frango e Carne"){
      valorProduto2 = 144.14
      produto2 = "Ração Golden Special Sabor Frango e Carne - 10.1kg"
    }else if(document.getElementById('c2').value === "Ração GranPlus Choice Sabor Frango e Carne"){
      valorProduto2 = 125.79
      produto2 = "Ração GranPlus Choice Sabor Frango e Carne - 10.1kg"
    }else if(document.getElementById('c2').value === "Whiskas Para Gatos Adultos Castrados Sabor Carne"){
      valorProduto2 = 179.99
      produto2 = "Whiskas Para Gatos Adultos Sabor Peixe - 10.1kg"
    }
    
    //Impressão dos dados


    const hoje = new Date();

    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
    const ano = hoje.getFullYear();

    const dataHoje = `${dia}/${mes}/${ano}`;

    
    document.getElementById('data').innerHTML = "<strong>Data de emissão: </strong> " + dataHoje

    document.getElementById('endereco').innerHTML = "<strong>Endereço: </strong>" + document.getElementById('endereco1').value +", " + document.getElementById('endereco3').value + " - " + document.getElementById('endereco2').value + " - " + document.getElementById('endereco4').value


    document.getElementById('cliente').innerHTML = "<strong>Solicitante: </strong>" + document.getElementById('solicitante').value

    document.getElementById('pedido1cat1').innerHTML = document.getElementById('qntC1').value
    document.getElementById('pedido1cat2').innerHTML = produto1
    document.getElementById('pedido1cat3').innerHTML = valorProduto1

    valorTotalProduto1 = valorProduto1 * document.getElementById("qntC1").value
    
    document.getElementById('pedido1cat4').innerHTML = valorTotalProduto1.toFixed(2)


    document.getElementById('pedido2cat1').innerHTML = document.getElementById('qntC2').value
    document.getElementById('pedido2cat2').innerHTML = produto2
    document.getElementById('pedido2cat3').innerHTML = valorProduto2

    valorTotalProduto2 = valorProduto2 * document.getElementById("qntC2").value
    
    document.getElementById('pedido2cat4').innerHTML = valorTotalProduto2.toFixed(2)
    
    valorTotal = valorTotalProduto1 + valorTotalProduto2

    document.getElementById('totalCompra').innerHTML = "R$" + valorTotal.toFixed(2)

    document.getElementById('obsBox').innerHTML = "<strong>Observações: </strong>" + document.getElementById("observacoes").value


    const relatorio = document.getElementById('relatorio');
    relatorio.style.visibility = 'visible';
    relatorio.style.position = 'static';

    if (pdf) html2pdf().from(relatorio).save();
    else if (print) window.print();
  }