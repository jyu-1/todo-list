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
            currentView = index;
            listTasks(element.list, array[currentView]);
            navList.classList.add("active");
        });

        container.appendChild(navList);
    });
}

export function selectNewProject(array) {
    const container = document.querySelector(".tasks");
    const addButton = document.querySelector(".add-task");

    if (projects.length === 0) {
        container.textContent = "";
        addButton.disabled = true;
    }
    else {
        addButton.disabled = false;
        const allNav = document.querySelectorAll(".project-list");
        allNav.forEach((element) => {
            element.classList.remove("active");
        })
        currentView = array.length - 1;
        allNav[currentView].classList.add("active");
        listTasks(array[currentView].list, array[currentView]);
    }
}

export function listTasks(array, parentArray) {
    const container = document.querySelector(".tasks");
    container.textContent = "";


    const projectPanel = document.createElement("div");
    projectPanel.classList.add("project-panel");

    const projectName = document.createElement("span");
    const projectDelete = document.createElement("button");

    projectDelete.addEventListener("click", () => {
        projects.splice(projects.indexOf(parentArray), 1);
        listProjects(projects);
        selectNewProject(projects);
    })

    projectName.textContent = parentArray.name;
    projectDelete.textContent = "Delete Project";

    projectPanel.appendChild(projectName);
    projectPanel.appendChild(projectDelete);

    container.appendChild(projectPanel);

    array.forEach((element, index) => {
        const taskList = document.createElement("div");
        taskList.classList.add("task-list");

        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = element.title;

        const dued = document.createElement("div");
        dued.classList.add("dued");
        dued.textContent = element.dueDate;

        const checklist = document.createElement("button");
        checklist.classList.add("checklist");
        checklist.textContent = "Complete";

        const description = document.createElement("div");
        description.classList.add("description");
        description.textContent = element.description;

        taskList.appendChild(title);
        taskList.appendChild(dued);
        taskList.appendChild(checklist);
        taskList.appendChild(description);

        container.appendChild(taskList);

        checklist.addEventListener("click", () => {
            parentArray.removeList(index)
            taskList.remove();
        });
    });

}