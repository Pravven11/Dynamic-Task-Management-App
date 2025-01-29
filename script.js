let input = document.querySelector('#input-text');
let addItem = document.querySelector('.form .bx');
let list = document.querySelector('#list');
let nothing = document.querySelector('.form .nothing');

nothing.style.display = "block"; // Initially show 'List is empty!'

addItem.addEventListener('click', () => {
  if (input.value != "") {
    nothing.style.display = "none"; // Hide 'List is empty!'
    let li = document.createElement('li');
    let item = document.createElement('p');
    li.className = "lists";
    item.className = 'para';
    li.appendChild(item);
    item.innerText = input.value;
    list.appendChild(li);
    input.value = "";
  }
});
