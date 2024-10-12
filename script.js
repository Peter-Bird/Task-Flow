// JavaScript Functionality

// Global Variables
let tasks = [];
const taskForm = document.getElementById('task-form');
const taskListSection = document.getElementById('task-list-section');
const userGuideSection = document.getElementById('user-guide-section');
const promptSection = document.getElementById('prompt-section');
const taskListLink = document.getElementById('task-list-link');
const userGuideLink = document.getElementById('user-guide-link');
const promptLink = document.getElementById('prompt-link');
const exportTasksLink = document.getElementById('export-tasks-link');
const importTasksLink = document.getElementById('import-tasks-link');
const replaceTasksLink = document.getElementById('replace-tasks-link');
const deleteAllTasksLink = document.getElementById('delete-all-tasks-link');
const hamburgerMenu = document.getElementById('hamburger-menu');
const dropdownMenu = document.getElementById('dropdown-menu');

// The AI Prompt content
const promptContentText = `
<h1>TaskFlow Web Application Specification</h1>
<p>Please build a task management web application called <strong>"TaskFlow"</strong> using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. The application should be <strong>user-friendly</strong>, <strong>responsive</strong>, and provide the following features:</p>

<h2>Header and Navigation</h2>
<ul>
    <li><strong>Header Title</strong>: Display a header with the title "<strong>TaskFlow</strong>" centered at the top of the page.</li>
    <li><strong>Hamburger Menu</strong>:
        <ul>
            <li>Include a hamburger menu icon (<strong>&#9776;</strong>) positioned at the top-right corner.</li>
            <li><strong>Dropdown Menu</strong>:
                <ul>
                    <li>When clicked, the hamburger menu should toggle a dropdown menu with the following options, aligned with text on the left and icons on the right:
                        <ul>
                            <li><strong>Navigation Links</strong>:
                                <ul>
                                    <li><strong>Task List</strong> (📋): Navigates to the main task management interface.</li>
                                    <li><strong>User Guide</strong> (❓): Displays a user guide explaining the application's features and how to use them.</li>
                                    <li><strong>Prompt</strong> (💡): Displays the AI prompt used to create the application.</li>
                                </ul>
                            </li>
                            <li><strong>Spacer</strong>: Use a horizontal line (&lt;hr&gt;) to separate navigation links from task management commands.</li>
                            <li><strong>Task Management Commands</strong>:
                                <ul>
                                    <li><strong>Export Tasks</strong> (⬇️): Exports the task list to the clipboard in JSON format.</li>
                                    <li><strong>Import Tasks</strong> (⬆️): Imports tasks from the clipboard and adds them to the existing task list.</li>
                                    <li><strong>Replace Tasks</strong> (🔄): Replaces the existing tasks with tasks from the clipboard.</li>
                                    <li><strong>Delete All Tasks</strong> (🗑️): Deletes all tasks from the task list after user confirmation.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><strong>Menu Alignment</strong>:
                        <ul>
                            <li>Align the menu item texts to the <strong>left</strong> and the icons to the <strong>right</strong>.</li>
                            <li>Group the menu options logically, using spacers to separate different groups of options.</li>
                        </ul>
                    </li>
                    <li><strong>Closing the Menu</strong>:
                        <ul>
                            <li>Clicking outside the menu should close the dropdown if it's open.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
</ul>

<h2>Task Addition Form</h2>
<p><strong>Form Fields:</strong></p>
<ul>
    <li><strong>Task Description</strong> (<code>text</code> field, required):
        <ul>
            <li>Input field with placeholder "<strong>Task Description *</strong>".</li>
            <li>This field is required and must not be empty.</li>
        </ul>
    </li>
    <li><strong>Group Name</strong> (<code>group</code> field, optional):
        <ul>
            <li>Input field with placeholder "<strong>Group Name (Optional)</strong>".</li>
        </ul>
    </li>
    <li><strong>Priority Level</strong> (<code>priority</code> field):
        <ul>
            <li>A dropdown (<code>&lt;select&gt;</code>) with options:
                <ul>
                    <li><strong>High</strong> (🔴)</li>
                    <li><strong>Medium</strong> (🟡) <em>(Default selection)</em></li>
                    <li><strong>Low</strong> (🔵)</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
<p><strong>Add Task Button:</strong></p>
<ul>
    <li>A submit button labeled with the add icon (<strong>➕</strong>).</li>
</ul>
<p><strong>Form Validation:</strong></p>
<ul>
    <li>Validate that the <strong>Task Description</strong> is provided before allowing submission.</li>
</ul>
<p><strong>Styling:</strong></p>
<ul>
    <li>Style the form for a clean and modern look, ensuring responsiveness on different screen sizes.</li>
</ul>

<h2>Task Display and Organization</h2>
<ul>
    <li><strong>Grouping Tasks</strong>:
        <ul>
            <li>Organize tasks into collapsible groups based on the <strong>Group Name</strong>.</li>
            <li><strong>Sort Groups Alphabetically</strong>.</li>
            <li><strong>Expand All Groups by Default</strong> when the page loads.</li>
        </ul>
    </li>
    <li><strong>Group Headers</strong>:
        <ul>
            <li>Each group should display:
                <ul>
                    <li>A toggle icon (<strong>−</strong> for expanded, <strong>+</strong> for collapsed).</li>
                    <li>The <strong>Group Name</strong> as the group title.</li>
                </ul>
            </li>
            <li>Clicking the group header toggles the visibility of the group's tasks.</li>
        </ul>
    </li>
    <li><strong>Task Sorting</strong>:
        <ul>
            <li>Within each group, <strong>sort tasks by priority</strong> in the order: <strong>High</strong>, <strong>Medium</strong>, <strong>Low</strong>.</li>
        </ul>
    </li>
</ul>

<h2>Task Items</h2>
<ul>
    <li><strong>Display Elements</strong>:
        <ul>
            <li><strong>Priority Icon</strong>: Indicates the task's priority level (🔴 for High, 🟡 for Medium, 🔵 for Low).</li>
            <li><strong>Completion Checkbox</strong>: To mark the task as complete or incomplete.</li>
            <li><strong>Task Description</strong>: The <code>text</code> field value.</li>
            <li><strong>Action Buttons</strong>:
                <ul>
                    <li><strong>Edit</strong> (✏️)</li>
                    <li><strong>Delete</strong> (🗑️)</li>
                </ul>
            </li>
        </ul>
    </li>
    <li><strong>Layout</strong>:
        <ul>
            <li>Align the <strong>edit</strong> and <strong>delete</strong> icons to the <strong>far right</strong> of the task item.</li>
            <li>The <strong>priority icon</strong>, <strong>checkbox</strong>, and <strong>task description</strong> should be aligned to the <strong>left</strong>.</li>
        </ul>
    </li>
    <li><strong>Completed Tasks</strong>:
        <ul>
            <li>When a task is marked as complete:
                <ul>
                    <li>Apply a strikethrough style to the task description.</li>
                    <li>Change the text color to indicate completion (e.g., green).</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>

<h2>Task Functionality</h2>
<ul>
    <li><strong>Adding Tasks</strong>:
        <ul>
            <li>Users can add new tasks using the <strong>Task Addition Form</strong>.</li>
        </ul>
    </li>
    <li><strong>Editing Tasks</strong>:
        <ul>
            <li>Clicking the <strong>edit icon</strong> (✏️) allows users to modify:
                <ul>
                    <li><strong>Task Description</strong> (<code>text</code>)</li>
                    <li><strong>Group Name</strong> (<code>group</code>)</li>
                    <li><strong>Priority Level</strong> (<code>priority</code>)</li>
                </ul>
            </li>
        </ul>
    </li>
    <li><strong>Deleting Tasks</strong>:
        <ul>
            <li>Clicking the <strong>delete icon</strong> (🗑️) prompts the user for confirmation before deleting the task.</li>
        </ul>
    </li>
    <li><strong>Marking Tasks as Complete</strong>:
        <ul>
            <li>Users can mark tasks as complete or incomplete using the <strong>completion checkbox</strong>.</li>
        </ul>
    </li>
    <li><strong>Persistent Storage</strong>:
        <ul>
            <li><strong>Tasks are saved in the browser's <code>localStorage</code></strong>, ensuring data persists across sessions.</li>
        </ul>
    </li>
</ul>

<h2>Export and Import Features</h2>
<ul>
    <li><strong>Export Tasks</strong>:
        <ul>
            <li>The <strong>Export Tasks</strong> option in the hamburger menu copies the task list to the clipboard in <strong>JSON format</strong>.</li>
            <li>Provide user feedback upon successful export or if an error occurs.</li>
        </ul>
    </li>
    <li><strong>Import Tasks</strong>:
        <ul>
            <li>The <strong>Import Tasks</strong> option reads tasks from the clipboard and <strong>adds</strong> them to the existing task list.</li>
            <li>Validate that the clipboard data is a valid JSON array of task objects.</li>
            <li>Provide user feedback on success or failure.</li>
        </ul>
    </li>
    <li><strong>Replace Tasks</strong>:
        <ul>
            <li>The <strong>Replace Tasks</strong> option reads tasks from the clipboard and <strong>replaces</strong> the current task list.</li>
            <li>Validate the clipboard data as with import.</li>
            <li>Provide user feedback on success or failure.</li>
        </ul>
    </li>
</ul>

<h2>Delete All Tasks</h2>
<ul>
    <li><strong>Functionality</strong>:
        <ul>
            <li>The <strong>Delete All Tasks</strong> option clears all tasks from the task list after user confirmation.</li>
            <li>Provide an alert to confirm the deletion action.</li>
        </ul>
    </li>
</ul>

<h2>User Guide</h2>
<ul>
    <li><strong>Access</strong>:
        <ul>
            <li>The <strong>User Guide</strong> is accessible from the hamburger menu.</li>
        </ul>
    </li>
    <li><strong>Content</strong>:
        <ul>
            <li>Provide instructions on how to use the application, including:
                <ul>
                    <li>Adding, editing, and deleting tasks.</li>
                    <li>Organizing tasks into groups.</li>
                    <li>Setting priority levels.</li>
                    <li>Marking tasks as complete.</li>
                    <li>Exporting, importing, replacing, and deleting all tasks.</li>
                    <li>Viewing the AI prompt.</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>

<h2>Prompt Display</h2>
<ul>
    <li><strong>Access</strong>:
        <ul>
            <li>The <strong>Prompt</strong> option in the hamburger menu displays the original AI prompt used to create the application.</li>
        </ul>
    </li>
    <li><strong>Display</strong>:
        <ul>
            <li>Show the full prompt content in a readable format within the application.</li>
        </ul>
    </li>
</ul>

<h2>Responsive Design and Styling</h2>
<ul>
    <li><strong>Responsiveness</strong>:
        <ul>
            <li>Ensure the application adjusts smoothly to different screen sizes, including mobile devices.</li>
        </ul>
    </li>
    <li><strong>Layout</strong>:
        <ul>
            <li>Use <strong>flexbox</strong> or other responsive layout techniques to manage the positioning and alignment of elements.</li>
        </ul>
    </li>
    <li><strong>Styling</strong>:
        <ul>
            <li>Apply a modern and clean aesthetic throughout the application.</li>
            <li>Use <strong>Unicode emojis</strong> for icons (e.g., priority indicators, action buttons).</li>
        </ul>
    </li>
    <li><strong>Hamburger Menu on Mobile</strong>:
        <ul>
            <li>Adjust the hamburger menu to be accessible and functional on smaller screens.</li>
        </ul>
    </li>
</ul>

<h2>Cross-Browser Compatibility</h2>
<ul>
    <li><strong>Ensure compatibility</strong> with the latest versions of major browsers:
        <ul>
            <li><strong>Chrome</strong></li>
            <li><strong>Firefox</strong></li>
            <li><strong>Edge</strong></li>
        </ul>
    </li>
</ul>

<h2>Additional Implementation Details</h2>
<ul>
    <li><strong>Data Model</strong>:
        <ul>
            <li>Use <code>text</code> as the property name for the <strong>Task Description</strong> in the data model and code.</li>
        </ul>
    </li>
    <li><strong>Code Organization</strong>:
        <ul>
            <li>Organize the code into three separate files:
                <ul>
                    <li><code>index.html</code></li>
                    <li><code>styles.css</code></li>
                    <li><code>script.js</code></li>
                </ul>
            </li>
        </ul>
    </li>
    <li><strong>Error Handling</strong>:
        <ul>
            <li>Provide appropriate error messages and user feedback throughout the application.</li>
            <li>Handle exceptions gracefully, especially during clipboard operations and JSON parsing.</li>
        </ul>
    </li>
</ul>

<h2>Local Storage</h2>
<ul>
    <li><strong>Persistent Data</strong>:
        <ul>
            <li>Utilize the browser's <strong><code>localStorage</code></strong> to store tasks locally.</li>
            <li>Load tasks from <code>localStorage</code> when the application starts.</li>
        </ul>
    </li>
</ul>

<h2>Testing and Validation</h2>
<ul>
    <li><strong>Validation</strong>:
        <ul>
            <li>Validate all user inputs in forms.</li>
        </ul>
    </li>
    <li><strong>Testing</strong>:
        <ul>
            <li>Thoroughly test the application to ensure all features work as intended.</li>
            <li>Test on different devices and screen sizes for responsiveness.</li>
        </ul>
    </li>
</ul>

<p>By following these specifications, create the <strong>"TaskFlow"</strong> web application that meets all the requirements, providing users with a comprehensive and intuitive task management tool.</p>

<p><strong>Note</strong>: Ensure all functionalities are implemented using only <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, without any external libraries or frameworks.</p>
`;

// Load Tasks from localStorage
window.onload = function() {
    loadTasks();
    renderTasks();
    showTaskList();
};

// Event Listeners
taskForm.addEventListener('submit', addTask);
hamburgerMenu.addEventListener('click', toggleDropdown);
taskListLink.addEventListener('click', showTaskList);
userGuideLink.addEventListener('click', showUserGuide);
promptLink.addEventListener('click', showPrompt);
exportTasksLink.addEventListener('click', exportTasks);
importTasksLink.addEventListener('click', importTasks);
replaceTasksLink.addEventListener('click', replaceTasks);
deleteAllTasksLink.addEventListener('click', deleteAllTasks);
document.addEventListener('click', closeDropdownOnClickOutside);

// Functions

// Toggle Dropdown Menu
function toggleDropdown(event) {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    event.stopPropagation();
}

// Close Dropdown When Clicking Outside
function closeDropdownOnClickOutside(event) {
    if (!dropdownMenu.contains(event.target) && event.target !== hamburgerMenu) {
        dropdownMenu.style.display = 'none';
    }
}

// Show Task List Section
function showTaskList(event) {
    if (event) event.preventDefault();
    userGuideSection.style.display = 'none';
    promptSection.style.display = 'none';
    taskListSection.style.display = 'block';
    dropdownMenu.style.display = 'none';
}

// Show User Guide Section
function showUserGuide(event) {
    event.preventDefault();
    taskListSection.style.display = 'none';
    promptSection.style.display = 'none';
    userGuideSection.style.display = 'block';
    dropdownMenu.style.display = 'none';
}

// Show Prompt Section
function showPrompt(event) {
    event.preventDefault();
    taskListSection.style.display = 'none';
    userGuideSection.style.display = 'none';
    promptSection.style.display = 'block';
    dropdownMenu.style.display = 'none';
    
    // Use innerHTML to insert HTML content correctly
    document.getElementById('prompt-content').innerHTML = promptContentText;
}

// Export Tasks to Clipboard
function exportTasks(event) {
    event.preventDefault();
    const tasksJson = JSON.stringify(tasks, null, 2); // Pretty print with indentation
    navigator.clipboard.writeText(tasksJson).then(function() {
        alert('Tasks have been copied to the clipboard.');
    }, function(err) {
        alert('Failed to copy tasks: ' + err);
    });
    dropdownMenu.style.display = 'none';
}

// Import Tasks from Clipboard and Add to Existing Tasks
function importTasks(event) {
    event.preventDefault();
    navigator.clipboard.readText().then(function(text) {
        try {
            const importedTasks = JSON.parse(text);
            if (Array.isArray(importedTasks)) {
                tasks = tasks.concat(importedTasks);
                saveTasks();
                renderTasks();
                alert('Tasks have been imported and added to your existing tasks.');
            } else {
                alert('Clipboard data is not a valid task list.');
            }
        } catch (e) {
            alert('Failed to parse tasks: ' + e.message);
        }
    }).catch(function(err) {
        alert('Failed to read clipboard: ' + err);
    });
    dropdownMenu.style.display = 'none';
}

// Replace Existing Tasks with Tasks from Clipboard
function replaceTasks(event) {
    event.preventDefault();
    navigator.clipboard.readText().then(function(text) {
        try {
            const importedTasks = JSON.parse(text);
            if (Array.isArray(importedTasks)) {
                tasks = importedTasks;
                saveTasks();
                renderTasks();
                alert('Your tasks have been replaced with the imported tasks.');
            } else {
                alert('Clipboard data is not a valid task list.');
            }
        } catch (e) {
            alert('Failed to parse tasks: ' + e.message);
        }
    }).catch(function(err) {
        alert('Failed to read clipboard: ' + err);
    });
    dropdownMenu.style.display = 'none';
}

// Delete All Tasks
function deleteAllTasks(event) {
    event.preventDefault();
    if (confirm('Are you sure you want to delete all tasks?')) {
        tasks = [];
        saveTasks();
        renderTasks();
        alert('All tasks have been deleted.');
    }
    dropdownMenu.style.display = 'none';
}

// Add Task
function addTask(event) {
    event.preventDefault();
    const text = document.getElementById('task-text').value.trim();
    const group = document.getElementById('task-group').value.trim() || 'Ungrouped';
    const priority = document.getElementById('task-priority').value;

    if (text === '') {
        alert('Task description is required.');
        return;
    }

    const task = {
        id: Date.now(),
        text,
        group,
        priority,
        completed: false
    };

    tasks.push(task);
    saveTasks();
    renderTasks();
    taskForm.reset();
}

// Save Tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load Tasks from localStorage
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

// Render Tasks
function renderTasks() {
    taskListSection.innerHTML = '';
    const groups = {};

    // Group Tasks
    tasks.forEach(task => {
        if (!groups[task.group]) {
            groups[task.group] = [];
        }
        groups[task.group].push(task);
    });

    // Get sorted group names
    const groupNames = Object.keys(groups).sort();

    // Render Each Group
    for (const groupName of groupNames) {
        const groupSection = document.createElement('div');
        groupSection.className = 'group';

        // Group Header
        const groupHeader = document.createElement('div');
        groupHeader.className = 'group-header';
        const toggleIcon = document.createElement('span');
        toggleIcon.textContent = '−'; // Expanded by default
        toggleIcon.className = 'toggle-icon';
        const groupTitle = document.createElement('h2');
        groupTitle.textContent = groupName;
        groupHeader.appendChild(toggleIcon);
        groupHeader.appendChild(groupTitle);
        groupSection.appendChild(groupHeader);

        // Task List
        const taskList = document.createElement('div');
        taskList.className = 'task-list';
        taskList.style.display = 'block'; // Displayed by default

        // Sort Tasks by Priority
        const sortedTasks = groups[groupName].sort((a, b) => {
            const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        });

        // Render Each Task
        sortedTasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            if (task.completed) taskItem.classList.add('completed');

            // Task Info Container (Left Side)
            const taskInfo = document.createElement('div');
            taskInfo.className = 'task-info';

            // Priority Icon
            const priorityIcon = document.createElement('span');
            priorityIcon.className = 'priority-icon';
            priorityIcon.textContent = getPriorityIcon(task.priority);
            taskInfo.appendChild(priorityIcon);

            // Checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => toggleComplete(task.id));
            taskInfo.appendChild(checkbox);

            // Task Description
            const taskText = document.createElement('span');
            taskText.className = 'task-text';
            taskText.textContent = task.text;
            taskInfo.appendChild(taskText);

            // Append taskInfo to taskItem
            taskItem.appendChild(taskInfo);

            // Action Buttons Container (Right Side)
            const actionButtons = document.createElement('div');
            actionButtons.className = 'action-buttons';

            // Edit Button
            const editBtn = document.createElement('button');
            editBtn.innerHTML = '✏️';
            editBtn.addEventListener('click', () => editTask(task.id, taskItem));
            actionButtons.appendChild(editBtn);

            // Delete Button
            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '🗑️';
            deleteBtn.addEventListener('click', () => deleteTask(task.id));
            actionButtons.appendChild(deleteBtn);

            // Append actionButtons to taskItem
            taskItem.appendChild(actionButtons);

            taskList.appendChild(taskItem);
        });

        groupSection.appendChild(taskList);
        taskListSection.appendChild(groupSection);

        // Toggle Group Tasks
        groupHeader.addEventListener('click', () => {
            const isVisible = taskList.style.display === 'block';
            taskList.style.display = isVisible ? 'none' : 'block';
            toggleIcon.textContent = isVisible ? '+' : '−';
        });
    }
}

// Get Priority Icon
function getPriorityIcon(priority) {
    switch (priority) {
        case 'High':
            return '🔴';
        case 'Medium':
            return '🟡';
        case 'Low':
            return '🔵';
        default:
            return '';
    }
}

// Toggle Task Completion
function toggleComplete(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });
    saveTasks();
    renderTasks();
}

// Edit Task
function editTask(id, taskItem) {
    const task = tasks.find(t => t.id === id);

    // Create Edit Form
    const editForm = document.createElement('form');
    editForm.className = 'edit-form';

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.value = task.text;
    editForm.appendChild(textInput);

    const groupInput = document.createElement('input');
    groupInput.type = 'text';
    groupInput.value = task.group;
    editForm.appendChild(groupInput);

    const prioritySelect = document.createElement('select');
    ['High', 'Medium', 'Low'].forEach(level => {
        const option = document.createElement('option');
        option.value = level;
        option.textContent = `${level} (${getPriorityIcon(level)})`;
        if (task.priority === level) option.selected = true;
        prioritySelect.appendChild(option);
    });
    editForm.appendChild(prioritySelect);

    const saveBtn = document.createElement('button');
    saveBtn.type = 'submit';
    saveBtn.textContent = 'Save';
    editForm.appendChild(saveBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => renderTasks());
    editForm.appendChild(cancelBtn);

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        task.text = textInput.value.trim();
        task.group = groupInput.value.trim() || 'Ungrouped';
        task.priority = prioritySelect.value;
        saveTasks();
        renderTasks();
    });

    // Replace Task Item with Edit Form
    taskItem.innerHTML = '';
    taskItem.appendChild(editForm);
}

// Delete Task
function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
    }
}
