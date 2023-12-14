const $backBtn = document.querySelector('#back-btn');
const $listName = document.querySelector('#list-name');
const $itemsList = document.querySelector('#items-list');

let ListId;

function printList(listData) {
  console.log(listData);

  ListId = listData._id;

  const { listName, items } = listData;

  $listName.textContent = listName;
  $itemsList.innerHTML = items
    .map(item => `<span class="col-auto m-2 text-center btn">${item}</span>`)
    .join('');
}


$backBtn.addEventListener('click', function() {
  window.history.back();
});

