document.addEventListener('DOMContentLoaded', () =>{
  const newTaskInput = document.querySelector('#new-task');
  const addTaskBtn = document.querySelector('#add-task-btn');
  const taskList = document.querySelector('#task-list');

    const addTask = () => {/* */
      const textTask = newTaskInput.value.trim();
      if (textTask !== '') {
        const li = document.createElement('li');

        li.innerHTML = `<span>${textTask}</span><button class="delete-btn">Delete</button>`;
        taskList.appendChild(li);

        li.querySelector('.delete-btn').addEventListener('click', () => {
          li.remove();
        })
        li.addEventListener('click', () => {
          li.classList.toggle('completed');
        })

        newTaskInput.value = '';
      }
    };

    addTaskBtn.addEventListener('click', addTask);

    newTaskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    })
})
