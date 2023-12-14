const $groceryList = document.querySelector('#grocery-list');

const printList = ({ _id, listName, items}) => {
  const ListCard = `
    <div class="col-12 col-lg-6 flex-row">
      <div class="card w-100 flex-column">
        <h3 class="card-header">${listName}</h3>
        <div class="card-body flex-column col-auto">
          <h5 class="text-dark">Items</h5>
          <ul>
            ${items
              .map(item => {
                return `<li>${item}</li>`;
              })
              .join('')}
          </ul>
          <a class="btn display-block w-100 mt-auto" href="/lists?id=${_id}">See the list.</a>
        </div>
      </div>
    </div>
  `;

  $groceryList.innerHTML += ListCardCard;
};
