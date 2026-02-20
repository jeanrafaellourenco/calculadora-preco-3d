const precoKg = document.getElementById('precoKg');
const pesoG = document.getElementById('pesoG');
const custoEl = document.getElementById('custo');
const varejoEl = document.getElementById('varejo');
const finalEl = document.getElementById('final');
const calcBtn = document.getElementById('calcBtn');
const clearBtn = document.getElementById('clearBtn');

function brl(n) {
  return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function calcular() {
  const kg = parseFloat((precoKg.value || '').replace(',', '.'));
  const g = parseFloat((pesoG.value || '').replace(',', '.'));
  if (isNaN(kg) || isNaN(g) || kg < 0 || g < 0) {
    custoEl.textContent = 'R$ 0,00';
    varejoEl.textContent = 'R$ 0,00';
    finalEl.textContent = 'R$ 0,00';
    return;
  }
  const custo = (kg / 1000) * g;
  const varejo = custo * 3;
  const final = custo * 5;
  custoEl.textContent = brl(custo);
  varejoEl.textContent = brl(varejo);
  finalEl.textContent = brl(final);
}

calcBtn.addEventListener('click', calcular);
[precoKg, pesoG].forEach((i) => i.addEventListener('input', calcular));

clearBtn.addEventListener('click', () => {
  precoKg.value = '';
  pesoG.value = '';
  calcular();
  precoKg.focus();
});

calcular();
