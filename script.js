let massaEl = document.querySelector('#massa');
let potenciaEl = document.querySelector('#potencia');
let temperaturaEl = document.querySelector('#temperatura');
let botaoEl = document.querySelector('button');
let respostaEl = document.querySelector('#resposta');



botaoEl.addEventListener('click', calcular);

function calcular()
{
    let m = massaEl.value; //Valor da massa
    let p = potenciaEl.value; //Valor da potência
    let t = temperaturaEl.value; //Valor da temperatura

    if(p == 0)
    {
        respostaEl.innerHTML = 'A água não será capaz de variar sua temperatura.';
        return;
    }

    const calorEspecifico = 1; //Calor específico da água (constante)

    let q = m * calorEspecifico * t; //Cálculo para descobrir a quantidade de calor (em calorias) para variar em "t" uma determinada massa "m" de água

    q *= 4; //Transformando calorias para joules

    let tempo = q / p; //O tempo é o trabalho (gasto de energia -> calor é uma forma de energia) dividido pela potência

    respostaEl.innerHTML = '';
    respostaEl.innerHTML = `${Math.round(tempo)} segundos.`;
}