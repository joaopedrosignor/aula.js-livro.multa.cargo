var resultado = document.getElementById('resultado');
function calcular(){
    // var livros = parseInt(document.getElementById('numBooks').value);
    // if (livros>=7){
    //     var preco = 15;
    // } else{
    //     var preco = 22;
    // }
    // var total = preco*livros;
    // resultado.innerText = (`O total da sua compra de ${livros} livros será de ${total}R$.`)
    // var velocidade = parseInt(document.getElementById('velocidade').value);
    // if(velocidade>60){
    //     var multa = (velocidade - 60)*100
    //     resultado.innerText = (`Velocidade ultrapassada. Valor da multa: ${multa}R$.`)
    // }else{
    //     var multa = 0
    //     resultado.innerText = ("Velocidade não foi ultrapassada. Não há multa.")
    // }
    var cargo = document.getElementById('cargo').value;
    base = 3000
    switch (cargo){
        case 'junior':
            var salario = base;
            break;
        case 'pleno':
            var salario = base*2;
            break;
        case 'senior':
            var salario = base*3;
            break;
        case 'tech lead':
            var salario = base*4;
            break;
        case 'diretor':
            var salario = base*10;
            break;
        default:
            var salario = 0;
            break;
    }if (salario==0){
        resultado.innerText = (`Erro`)
    }else{
        resultado.innerText = (`Você é ${cargo} e seu salário é de ${salario}R$.`)
    }
    

}
