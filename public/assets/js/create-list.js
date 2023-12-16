const $addItemBtn = document.querySelector('#add-item');
const $listForm = document.querySelector('#list-form');
const $customItemList = document.querySelector('#custom-item-list');

const handleAddItem = event => {
  event.preventDefault();

  const itemValue = document.querySelector('#new-item').value;

  if (!itemValue) {
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
  fetch('/api/lists', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(postResponse => {
    alert('List created successfully!');
    console.log(postResponse);
  })
  .catch(err => {
    console.log(err);
  });
};

$listForm.addEventListener('submit', handleListSubmit);
$addItemBtn.addEventListener('click', handleAddItem);
