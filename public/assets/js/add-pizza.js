const $addItemBtn = document.querySelector('#add-item');
const $listForm = document.querySelector('#list-form');
const $customToppingsList = document.querySelector('#custom-item-list');

const handleAddTopping = event => {
  event.preventDefault();

  const itemValue = document.querySelector('#new-topping').value;

  if (!toppingValue) {
    return false;
  }

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'item';
  checkbox.value = itemValue;
  checkbox.id = itemValue
    .toLowerCase()
    .split(' ')
    .join('-');

  const label = document.createElement('label');
  label.textContent = itemValue;
  label.htmlFor = itemValue
    .toLowerCase()
    .split(' ')
    .join('-');

  const divWrapper = document.createElement('div');

  divWrapper.appendChild(checkbox);
  divWrapper.appendChild(label);
  $customItemList.appendChild(divWrapper);

  itemValue.value = '';
};

const handleListSubmit = event => {
  event.preventDefault();

  const listName = $listForm.querySelector('#list-name').value;
  const items = [...$listForm.querySelectorAll('[name=item]:checked')].map(item => {
    return item.value;
  });

  if (!listName || !items.length) {
    return;
  }

  const formData = { listName, items };
};

$listForm.addEventListener('submit', handleListSubmit);
$addItemBtn.addEventListener('click', handleAddItem);
