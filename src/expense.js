const productInput = document.querySelector('#expense-input');
const priceInput = document.querySelector('#expense-price');

const sumField = document.getElementById('sum');

export function onExpense(e) {
  if (productInput.value == '' || priceInput.value == '') {
    alert('Expense section fields required !');
    return;
  }

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

  let previousTotal = Number(sumField.textContent);
  let result = previousTotal - priceInput.valueAsNumber;

  sumField.textContent = result;

  productInput.value = '';
  priceInput.value = '';
}
