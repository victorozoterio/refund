// Seleciona os elementos do formulário
const amount = document.getElementById('amount');

 amount.oninput = () => {
    const value = amount.value.replace(/\D/g, "");
    amount.value = value;
 }