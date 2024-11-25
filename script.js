// Select DOM elements
const taskInput = document.getElementById('taskInput');
const detailsInput = document.getElementById('detailsInput');
const dateInput = document.getElementById('dateInput');
const locationInput = document.getElementById('locationInput');
const prioritySelect = document.getElementById('prioritySelect');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Add task event listener
addButton.addEventListener('click', addTask);

// Function to add a task
function addTask() {
  const taskName = taskInput.value.trim();
  const taskDetails = detailsInput.value.trim();
  const taskDate = dateInput.value;
  const taskLocation = locationInput.value.trim();
  const taskPriority = prioritySelect.value;

  if (taskName === '') {
    alert('Please enter a task name');
    return;
  }

  // Create a new task item
  const taskItem = document.createElement('li');
  taskItem.classList.add(taskPriority); // Add priority as a class

  // Add task name
  const taskNameElement = document.createElement('span');
  taskNameElement.textContent = taskName;
  taskItem.appendChild(taskNameElement);

  // Add task details
  if (taskDetails) {
    const taskDetailsElement = document.createElement('div');
    taskDetailsElement.classList.add('task-details');
    taskDetailsElement.textContent = `Details: ${taskDetails}`;
    taskItem.appendChild(taskDetailsElement);
  }

  // Add due date
  if (taskDate) {
    const taskDateElement = document.createElement('div');
    taskDateElement.classList.add('task-due-date');
    taskDateElement.textContent = `Due: ${new Date(taskDate).toLocaleString()}`;
    taskItem.appendChild(taskDateElement);
  }

  // Add location
  if (taskLocation) {
    const taskLocationElement = document.createElement('div');
    taskLocationElement.classList.add('task-location');
    taskLocationElement.textContent = `Location: ${taskLocation}`;
    taskItem.appendChild(taskLocationElement);
  }

  // Add task priority
  const taskPriorityElement = document.createElement('div');
  taskPriorityElement.classList.add('task-priority');
  taskPriorityElement.textContent = `Priority: ${taskPriority}`;
  taskItem.appendChild(taskPriorityElement);

  // Create a delete button for the task
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => taskItem.remove());
  taskItem.appendChild(deleteButton);

  // Add task item to the task list
  taskList.appendChild(taskItem);

  // Clear the input fields
  taskInput.value = '';
  detailsInput.value = '';
  dateInput.value = '';
  locationInput.value = '';
}

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
