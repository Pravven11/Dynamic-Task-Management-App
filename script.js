let input = document.querySelector('#input-text');
let addItem = document.querySelector('.form .bx');
let list = document.querySelector('#list');
let nothing = document.querySelector('.form .nothing');
let completed = document.querySelector('.completed-task');
let complete = document.querySelector('.completed-list');
let clear = document.querySelector('.clear');

nothing.style.display = "block"; // Initially show 'List is empty!'

addItem.addEventListener('click', () => {
  if (input.value != "") {
    nothing.style.display = "none"; // Hide 'List is empty!'

     // Create list item and its components
    let li = document.createElement('li');
    let select = document.createElement('input');
    let item = document.createElement('p');
    
    li.className = "lists";
    item.className = 'para';
    select.setAttribute('type', 'checkbox');

    // Append item and select (checkbox) to the list item
    li.appendChild(select);
    li.appendChild(item);
    item.innerText = input.value;

    // Append the list item to the main list
    list.appendChild(li);
    input.value = "";

    // Handle checkbox click (mark task as completed)
    select.addEventListener('click', (e) => {
      let remove = e.target.parentElement;
      list.removeChild(remove);

      // Show the completed section and move the item there
      completed.style.display = "block";
      complete.appendChild(li);
      li.appendChild(select);
      li.appendChild(item);
    });

    clear.addEventListener('click', () => {
      while (list.childElementCount !== 0) {
        list.removeChild(list.firstChild);
      }
      while (complete.childElementCount !== 0) {
        complete.removeChild(complete.firstChild);
      }
      completed.style.display = "none"; // Hide the completed section if empty
    });
  }
});
