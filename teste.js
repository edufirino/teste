console.log("frase de entrada arrumem - tabela de comandos")
var prompt = require("prompt");

//comando obrigatorio da biblioteca de entrada de dados
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(["op", "n1", "n2"], function (err, result) {
  //
  // Log the results.
  //

  let { op, n1, n2 } = result;
  let resultado;
  n1 = +n1;
  n2 = +n2;

  console.log("Command-line input received:");
  console.log("  op: " + op);
  console.log("  n1: " + n1);
  console.log("  n2: " + n2);

  if (op == "+") {
      resultado = n1 + n2;
      console.log("A soma de " +n1+" e "+ n2 +" é "+resultado)
    } else if (op == "-") {
      resultado = n1 - n2;
      console.log("A subtração de " +n1+" e "+ n2 +" é "+resultado)
  } else if (op == "*") {
    resultado = n1 * n2;
    console.log("A multiplicação de " +n1+" e "+ n2 +" é "+resultado)
  } else if (op == "/") {
    resultado = n1 / n2;
    console.log("A divisão de " +n1+" e "+ n2 +" é "+resultado)
  } else if (op == "**") {
        resultado = n1 ** n2;
        console.log("O número base " +n1+" elevado a potência "+ n2 +" é "+resultado)
  } else {
    console.log("Não foi possível calcular");
  }
});
