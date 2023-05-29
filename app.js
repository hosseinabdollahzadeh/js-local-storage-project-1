// Default UI Variables
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-tasks');

// Load all event listener
loadEventListeners();

// Load all event listener
function loadEventListeners() {

    // Add task event
    form.addEventListener('submit', addTask);

    // Remove task event
    taskList.addEventListener('click', removeTask);

    // Clear tasks
    clearBtn.addEventListener('click', clearTasks);

    // Filter tasks
    filter.addEventListener('keyup', filterTasks);
}

// Add task
function addTask(e) {
    if (taskInput.value === '') {
        alert('برای افزودن تسک در ابتدا تسک را وارد کنید')
    } else {
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'list-group-item d-flex align-items-center';
        // Create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create i element
        const i = document.createElement('i');
        // Add class
        i.className = 'fas fa-times text-danger mr-auto delete-item';
        // Append the i to li
        li.appendChild(i);

        // Append li to ul
        taskList.appendChild(li);

        //Clear input
        taskInput.value = '';

        e.preventDefault();
    }
}

// Remove Task
function removeTask(e) {
    if (e.target.classList.contains('delete-item')) {
        if (confirm('آیا برای حذف تسک مطمئن هستید؟')) {
            e.target.parentElement.remove();
        }
    }
}

// Clear tasks
function clearTasks() {
    taskList.innerHTML = '';
}

// Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    // console.log(text);
    document.querySelectorAll('.list-group-item').forEach(function (task) {
        // console.log(task);
        const item = task.textContent;
        // console.log(item);
        if (item.toLowerCase().indexOf(text) != -1) {
            task.classList.add('d-flex');
        } else {
            task.classList.remove('d-flex');
            task.style.display = 'none';
        }
    });
}