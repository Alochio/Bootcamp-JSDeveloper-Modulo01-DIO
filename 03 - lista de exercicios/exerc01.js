// Calcular a média a partir de 3 notas

let nota1 = 8;
let nota2 = 9;
let nota3 = 7;

let media = (nota1 + nota2 +nota3) / 3;

if(media > 7){
    console.log("Sua nota foi: " + media.toFixed(2) + " -> Aprovado!");
} else if (media >= 5 && media <= 7){
    console.log("Sua nota foi: " + media.toFixed(2) + " -> Recuperação!");
} else{
    console.log("Sua nota foi: " + media.toFixed(2) + " -> Reprovado!");
}
