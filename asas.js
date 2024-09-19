let destino = "sul";               // Variável que armazena o destino da viagem
let passageirosAdultos = 3;        // Número de passageiros adultos
let classes = "e";                 // Classe da viagem (econômica ou executiva)
let passageiros = 5;               // Número total de passageiros (adultos + crianças)
let custoTotal = 0;                // Variável para armazenar o custo total da viagem

// Verifica se o destino é "sul" e a classe é "e" (executiva)
if (destino == "sul" && classes == "e") {
    custoTotal = 4000 * passageiros;  // Calcula o custo total para todos os passageiros
} 

// Verifica se o destino é "Sul" e a classe é "eco" (econômica)
else if(destino == "sul" && classes == "eco") {
    custoTotal = 3000 * passageiros;  // Calcula o custo total para todos os passageiros
}

// Verifica se o destino é "norte" e a classe é "e" (executiva)
if (destino == "norte" && classes == "e") {
    // Cálculo para classe executiva no norte, com desconto de 20% para adultos e 10% para crianças
    custoTotal = (passageirosAdultos * (2500 * 0.2)) + (passageirosCriancas * (1800 * 0.1));
} 

// Verifica se o destino é "norte" e a classe é "eco" (econômica)
else if(destino == "norte" && classes == "eco") {
    // Cálculo para classe econômica no norte
    custoTotal = (passageirosAdultos) * 2500 + (passageirosCriancas) * 1800;
}

// Verifica se o destino é "asia" e a classe é "e" (executiva)
if (destino == "asia" && classes == "e") {
    custoTotal = 6000 * passageiros;  // Cálculo para classe executiva na Ásia
} 

// Verifica se o destino é "asia" e a classe é "eco" (econômica)
else if(destino == "asia" && classes == "eco") {
    custoTotal = 4600 * passageiros;  // Cálculo para classe econômica na Ásia
}

// Verifica se o destino é "europa" e a classe é "e" (executiva)
if (destino == "europa" && classes == "e") {
    custoTotal = 7300 * passageiros;  // Cálculo para classe executiva na Europa
} 

// Verifica se o destino é "europa" e a classe é "eco" (econômica)
else if(destino == "europa" && classes == "eco") {
    custoTotal = 5800 * passageiros;  // Cálculo para classe econômica na Europa
}

// Verifica se o destino é "africa" e a classe é "e" (executiva)
if (destino == "africa" && classes == "e") {
    custoTotal = 6900 * passageiros;  // Cálculo para classe executiva na África
} 

// Verifica se o destino é "africa" e a classe é "eco" (econômica)
else if(destino == "africa" && classes == "eco") {
    custoTotal = 4200 * passageiros;  // Cálculo para classe econômica na África
}

// Exibe o custo total e outras informações no console
console.log("* O custo total do seu pacote é: *");
console.log("\nQuantidade de passageiros adultos:", passageirosAdultos);
console.log("\nQuantidade de passageiros crianças:", passageirosCriancas);
console.log("\nDestino escolhido:", destino);
console.log("\nCusto total viagem: R$" + custoTotal);
console.log("\n** Fim do programa ***");
