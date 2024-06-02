
document.addEventListener('DOMContentLoaded', () =>{
  const newTaskInput = document.querySelector('#new-task');
  const addTaskBtn = document.querySelector('#add-task-btn');

  const lateral = document.querySelector('aside > h2')
  lateral.addEventListener('click', () => {
  })

  const taskList = document.querySelector('#task-list');
    const addTask = () => {/*Fução para executar a adição de tarefas */
      const textTask = newTaskInput.value.trim(); 
      if (textTask !== '') { /** se a nova tarefa não estiver vazia */
        const li = document.createElement('li'); /*Ela deve criar um elemento li e como o documento de html reconhece as tags o proprio documento edita para que <li>*/
        //const lista = document.querySelectorAll('li')
        if (lateral.id == 10){
          li.innerHTML = `<span class="${lateral.classList}">${textTask}</span><button class="delete-btn">Delete</button>`;
           
          for (item of taskList){
            if (li.classList != 'segunda') {
              li.style.display = 'none'
            }
            else if (li.classList == 'segunda') {
              li.style.display = 'flex'
            };
          }
        }
        else if (lateral.id == 20){
          li.innerHTML = `<span class="${lateral.classList}">${textTask}</span><button class="delete-btn">Delete</button>`;
          for (item of taskList){
            if (li.classList != 'terça') {
              li.style.display = 'none'
            }
            else if (li.classList == 'terça') {
              li.style.display = 'flex'
            }
          };
        }
        else if (lateral.id == 30){
          li.innerHTML = `<span class="${lateral.classList}">${textTask}</span><button class="delete-btn">Delete</button>`;
          for (item of taskList){
            if (li.classList != 'quarta') {
              li.style.display = 'none'
            }
            else if (li.classList == 'quarta') {
              li.style.display = 'flex'
            }
          };
        }
        else if (lateral.id == 40){
          li.innerHTML = `<span class="${lateral.classList}">${textTask}</span><button class="delete-btn">Delete</button>`;
          for (item of taskList){
            if (li.classList != 'quinta') {
              li.style.display = 'none'
            }
            else if (li.classList == 'quinta') {
              li.style.display = 'flex'
            }
          };
        }
        else if (lateral.id == 50){
          li.innerHTML = `<span class="${lateral.classList}">${textTask}</span><button class="delete-btn">Delete</button>`;
          for (item of taskList){
            if (li.classList != 'sexta') {
              li.style.display = 'none'
            }
            else if (li.classList == 'sexta') {
              li.style.display = 'flex'
            }
          };
        }
        else if (lateral.id == 60){
          li.innerHTML = `<span class="${lateral.classList}">${textTask}</span><button class="delete-btn">Delete</button>`;
          for (item of taskList){
            if (li.classList != 'sabado') {
              li.style.display = 'none'
            }
            else if (li.classList == 'sabado') {
              li.style.display = 'flex'
            }
          };
        }
        else if (lateral.id == 70){
          li.innerHTML = `<span class="${lateral.classList}">${textTask}</span><button class="delete-btn">Delete</button>`;
          for (item of taskList){
            if (li.classList != 'domingo') {
              li.style.display = 'none'
            }
            else if (li.classList == 'domingo') {
              li.style.display = 'flex'
            }
          };
        }
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
});


