import { Projects, projects } from "./storage";
import { listProjects, listTasks, currentView } from './displayHandler';

export function defaultPage() {

    const defaultProject = Projects("Default");
    projects.push(defaultProject);
    listProjects(projects);

    addProject();

    const addTask = document.querySelector(".add-task");
    addTask.addEventListener("click", () => {
        projects[currentView].addList();
        listTasks(projects[currentView].list);
    });
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
                listProjects(projects);
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