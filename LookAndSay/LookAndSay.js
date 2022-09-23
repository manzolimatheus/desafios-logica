const caracteres = "2231";

function main() {
  let numAtual = caracteres[0];
  let contador = 0;
  const arr = [];

  for (let i = 0; i < caracteres.length; i++) {
    //Se o caractere atual for igual ao caractere anterior, incrementa o contador
    if (caracteres[i] == numAtual) {
      contador += 1;
    } else {
      //Se o caractere atual for diferente do caractere anterior, adiciona o numero de vezes que o caractere apareceu
      arr.push(contador);
      arr.push(numAtual);
      numAtual = caracteres[i];
      contador = 1;
    }
  }
  //Adiciona o ultimo caractere
  arr.push(contador);
  arr.push(numAtual);

  console.log(`Input: ${caracteres}`);
  console.log(`Output: ${arr.join("")}`);
}

main();
