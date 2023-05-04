const productInput = document.querySelector('input[type="text"]');
const priceInput = document.querySelector('input[type="number"]');

export function onExpense(e) {
  const tr = document.createElement('tr');
  let tdProduct = document.createElement('td');
  tdProduct.textContent = productInput.value;
  let tdPrice = document.createElement('td');
  tdPrice.textContent = priceInput.valueAsNumber;
  let tdAction = document.createElement('td');
  tdAction.textContent = document.getElementById('expense').textContent;
  let tdDate = document.createElement('td');
  tdDate.textContent = new Date().toLocaleString('bg');

  tr.appendChild(tdProduct);
  tr.appendChild(tdPrice);
  tr.appendChild(tdAction);
  tr.appendChild(tdDate);
  document.querySelector('.expenses-table tbody').appendChild(tr);

  let previousTotal = Number(document.getElementById('sum').textContent);
  if (previousTotal == 0) {
    return;
  }

  let result = previousTotal - priceInput.valueAsNumber;
  console.log(result);
  document.getElementById('sum').textContent = result;
}
