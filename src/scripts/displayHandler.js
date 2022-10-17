import { projects } from "./storage";

export let currentView = 0;

export function listProjects(array) {
    const container = document.querySelector(".projects");
    container.textContent = "";

    array.forEach((element, index) => {
        const navList = document.createElement("button");
        navList.classList.add("project-list");
        navList.textContent = element.name;
        navList.addEventListener("click", () => {
            const allNav = document.querySelectorAll(".project-list");

            allNav.forEach((element) => {
                element.classList.remove("active");
            });
            listTasks(element.list);
            currentView = index;
            navList.classList.add("active");
        });

        const allNav = document.querySelectorAll(".project-list");

        allNav.forEach((element) => {
            element.classList.remove("active");
        });
        listTasks(element.list);
        currentView = index;
        navList.classList.add("active");

        container.appendChild(navList);
    });
}

export function listTasks(array) {
    const container = document.querySelector(".tasks");
    container.textContent = "";
    array.forEach((element) => {
        const taskList = document.createElement("div");
        taskList.classList.add("task-list");

        const priority = document.createElement("div");
        priority.classList.add("priority");
        priority.textContent = element.priority;

        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = element.title;

        const dued = document.createElement("div");
        dued.classList.add("dued");
        dued.textContent = element.dueDate;

        const checklist = document.createElement("div");
        checklist.classList.add("checklist");
        checklist.textContent = element.checklist;

        const description = document.createElement("div");
        description.classList.add("description");
        description.textContent = element.description;

        taskList.appendChild(priority);
        taskList.appendChild(title);
        taskList.appendChild(dued);
        taskList.appendChild(checklist);
        taskList.appendChild(description);

        container.appendChild(taskList);
    });
}
