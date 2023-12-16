const $backBtn = document.querySelector('#back-btn');
const $listName = document.querySelector('#list-name');
const $itemsList = document.querySelector('#items-list');

let listId;

function getList() {
  // get id of list
  const searchParams = new URLSearchParams(document.location.search.substring(1));
  listId = searchParams.get('id');
  console.log('List ID:', listId);

  // get list info
  fetch(`/api/lists/${listId}`)
    .then(response => {
      console.log('Response Status:', response.status); 
      if (!response.ok) {
        throw new Error({ message: 'Something went wrong!' });
      }

      return response.json();
    })
    .then(printList)
    .catch(err => {
      console.log(err);
      alert('Cannot find a list with this id! Taking you back.');
      window.history.back();
    });
};
// Call getList when the page loads
document.addEventListener('DOMContentLoaded', getList);

function printList(listData) {
  console.log(listData);

  listId = listData._id;

  const { listName, listItems } = listData;

  $listName.textContent = listName;
  $itemsList.innerHTML = listItems
    .map(item => `<span class="col-auto m-2 text-center btn">${item}</span>`)
    .join('');
}


$backBtn.addEventListener('click', function() {
  window.history.back();
});

