const createTaskForm = document.getElementById('create-task-form');
const input = document.getElementById('new-task-description');
const btn = document.getElementsByClassName('btn');


createTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // your code here
  let li = document.createElement('li');
  li.innerHTML = `<p>${input.value} <button class='btn'> Delete </button></p>`;
  document.getElementById("tasks").append(li)
  input.value = "";
});

btn.addEventListener('click', () => {
  let parent = btn.parentElement;
  parent.remove();
})
