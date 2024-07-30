const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const head = document.getElementById('head');
const desc = document.getElementById('desc');

let a = localStorage.getItem('todoCount') ? parseInt(localStorage.getItem('todoCount')) : 0;

// Function to save a task to localStorage
function saveTask(id, task) {
    localStorage.setItem(`todo${id}`, JSON.stringify(task));
    localStorage.setItem('todoCount', a);
}

// Function to load tasks from localStorage
function loadTasks() {
    for (let i = 1; i <= a; i++) {
        const task = JSON.parse(localStorage.getItem(`todo${i}`));
        if (task) {
            taskList.innerHTML += `
                <li id="item-${i}" class="py-4">
                    <div class="flex justify-between items-center w-full">
                        <input id="todo${i}" name="todo${i}" type="checkbox"
                            class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded">
                        <label for="todo${i}" class="ml-3 block text-gray-900">
                            <span class="text-lg font-medium">${task[0]}</span>
                            ${task[1] ? `<br><span class="text-sm font-light text-gray-500">${task[1]}</span>` : ''}
                        </label>
                        <button id="deleteBtn-${i}" class="w-8 ml-5 hover:opacity-60">
                            <img class="h-full w-full object-cover pointer-events-none" src="./delete.png" alt="">
                        </button>
                    </div>
                </li>`;
        }
    }
}

// Load tasks on page load
window.addEventListener('DOMContentLoaded', loadTasks);

function addTask(){
    if (head.value != '' && desc.value == '') {
        a += 1;
        const task = [head.value];
        saveTask(a, task);
        taskList.innerHTML += `
                <li id="item-${a}" class="py-4">
                    <div class="flex justify-between items-center w-full">
                        <input id="todo${a}" name="todo${a}" type="checkbox"
                            class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded">
                        <label for="todo${a}" class="ml-3 block text-gray-900">
                            <span class="text-lg font-medium">${head.value}</span>
                        </label>
                        <button id="deleteBtn-${a}" class="w-8 ml-5 hover:opacity-60">
                            <img class="h-full w-full object-cover pointer-events-none" src="./delete.png" alt="">
                        </button>
                    </div>
                </li>`;
        head.value = '';
    } else if (desc.value != '' && head.value != '') {
        a += 1;
        const task = [head.value, desc.value];
        saveTask(a, task);
        taskList.innerHTML += `
                <li id="item-${a}" class="py-4">
                    <div class="flex justify-between items-center w-full">
                        <input id="todo${a}" name="todo${a}" type="checkbox"
                            class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded">
                        <label for="todo${a}" class="ml-3 block text-gray-900">
                            <span class="text-lg font-medium">${head.value}</span>
                            <br>
                            <span class="text-sm font-light text-gray-500">${desc.value}</span>
                        </label>
                        <button id="deleteBtn-${a}" class="w-8 ml-5 hover:opacity-60">
                            <img class="h-full w-full object-cover pointer-events-none" src="./delete.png" alt="">
                        </button>
                    </div>
                </li>`;
        head.value = '';
        desc.value = '';
    } else if (desc.value != '' && head.value == '') {
        alert('Please add a task');
    }
};
addButton.addEventListener('click',addTask)
head.addEventListener('keydown',e=>{
    console.log(e.key);
    if (e.key == 'ArrowDown') {
        desc.focus()
    }
    if(e.key == 'Enter'){
        desc.focus()
    }
})
desc.addEventListener('keydown',e=>{
    if (e.key == 'ArrowUp'){
        head.focus()
    }
    if(e.key == 'Enter'){
        addTask()
    }
})

taskList.addEventListener('click', e => {
    if (e.target.closest('button') && e.target.closest('button').id.startsWith('deleteBtn')) {
        const li = e.target.closest('li');
        if (li) {
            localStorage.setItem(`todoCount`, `${a -= 1}`)
            const id = li.id.split('-')[1];
            localStorage.removeItem(`todo${id}`);
            li.remove();
        }
    }
});