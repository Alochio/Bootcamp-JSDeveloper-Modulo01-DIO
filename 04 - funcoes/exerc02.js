function isMaiorIdade(idade){
    if(idade < 18){
        console.log("Não eh maior!");
    }else{
        console.log("eh maior!");
    }
}

function main(){
    let idade = 18;
    isMaiorIdade(idade);
}

main();