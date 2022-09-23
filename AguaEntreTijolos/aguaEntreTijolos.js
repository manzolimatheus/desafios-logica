function main(arr) {
  let contador_agua = 0;
  let MaiorBlocoAtual = arr[0];
  const maiorValor = Math.max(...arr);
  const IndexUltimoMaiorValor = arr.lastIndexOf(maiorValor);

  for (let i = 0; i < arr.length; i++) {
    //Se o index atual for menor que o index do último maior valor e o valor atual for menor que o maior valor até o momento
    //Soma o valor do maior bloco atual - o valor do bloco atual ao contador de água
    //Senão, muda o valor do maior bloco para o valor atual
    if (i < IndexUltimoMaiorValor && arr[i] < MaiorBlocoAtual) {
      contador_agua += MaiorBlocoAtual - arr[i];
    } else {
      MaiorBlocoAtual = arr[i];
    }
  }

  console.log(
    `Após uma chuva intensa, ficariam armazenados ${contador_agua} litros de água entre os tijolos.`
  );
}

main([0, 1, 2, 3, 4, 2, 4, 3, 2]);
main([2, 1, 0, 3, 1, 2, 2, 3, 2]);
