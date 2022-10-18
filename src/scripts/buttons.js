import { Projects, projects } from "./storage";
import { listProjects, listTasks, selectNewProject, currentView } from './displayHandler';

export function defaultPage() {
    if (!localStorage.getItem("projects")) {
        console.log("empty");
        localStorage.setItem("projects", "[]");
    }
    else {
        const savedData = JSON.parse(localStorage.getItem("projects"));

        savedData.forEach((element) => {
            const restoreProject = Projects(element.name, element.list);
            projects.push(restoreProject);
        })
    }

    listProjects(projects);
    selectNewProject(projects);

    addProject();
    addTask();
}

function addProject() {
    const addProject = document.querySelector(".add-project");
    addProject.addEventListener("click", () => {
        addProject.style.display = "none";
        const parent = document.querySelector(".nav");

        const form = document.createElement("form");
        form.classList.add("project-form");
        const input = document.createElement("input");
        input.classList.add("project-input");
        input.type = "text";
        input.minLength = 1;
        input.maxLength = 12;
        input.required = true;
        input.placeholder = "Project Name";

        const add = document.createElement("button");
        add.classList.add("add-button");
        add.type = "submit";
        const cancel = document.createElement("button");
        cancel.classList.add("cancel-project");

        add.addEventListener("click", (event) => {
            event.preventDefault();
            if (input.reportValidity() === true) {
                const newProject = Projects(input.value);
                projects.push(newProject);
                localStorage.setItem("projects", JSON.stringify(projects));
                listProjects(projects);
                selectNewProject(projects);
                form.remove();
                addProject.style.display = "block";
            }
        })

        cancel.addEventListener("click", () => {
            form.remove();
            addProject.style.display = "block";
        })

        add.textContent = "Add";
        cancel.textContent = "Cancel";

        form.appendChild(input);
        form.appendChild(add);
        form.appendChild(cancel);

        parent.insertBefore(form, addProject);
    });
}

function addTask() {
    const addTask = document.querySelector(".add-task");
    const modal = document.querySelector(".modal");
    addTask.addEventListener("click", () => {
        modal.style.display = "block";
    });

    const add = document.querySelector(".task-button");
    const cancel = document.querySelector(".exit-task");

    const taskTitle = document.querySelector(".task-title");
    const taskDescription = document.querySelector(".task-description");
    const taskDate = document.querySelector(".task-date");
    const taskPriority = document.querySelector(".task-priority");

    const form = document.querySelector(".task-form");

    add.addEventListener("click", (event) => {
        if (taskTitle.reportValidity() === true) {
            event.preventDefault();
            modal.style.display = "none";
            projects[currentView].addList(taskTitle.value, taskDescription.value, taskDate.value, taskPriority.value);
            listTasks(projects[currentView].list, projects[currentView]);
            form.reset();
        }
    });

    cancel.addEventListener("click", (event) => {
        event.preventDefault();
        form.reset();
        modal.style.display = "none";
    });

    window.onclick = (event) => {
        if (event.target == modal) {
            const form = document.querySelector(".task-form");
            form.reset();
            modal.style.display = "none";
        }
    }
}