export let currentView = 0;

export function listProjects(array) {
    const container = document.querySelector(".projects");
    container.innerText = "";

    array.forEach((element, index) => {
        const navList = document.createElement("button");
        navList.classList.add("project-list");
        navList.innerText = element.name;
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
    container.innerText = "";
    array.forEach((element) => {
        const taskList = document.createElement("div");
        taskList.classList.add("task-list");

        const priority = document.createElement("div");
        priority.classList.add("priority");
        priority.innerText = element.priority;

        const title = document.createElement("div");
        title.classList.add("title");
        title.innerText = element.title;

        const dued = document.createElement("div");
        dued.classList.add("dued");
        dued.innerText = element.dueDate;

        const checklist = document.createElement("div");
        checklist.classList.add("checklist");
        checklist.innerText = element.checklist;

        const description = document.createElement("div");
        description.classList.add("description");
        description.innerText = element.description;

        taskList.appendChild(priority);
        taskList.appendChild(title);
        taskList.appendChild(dued);
        taskList.appendChild(checklist);
        taskList.appendChild(description);

        container.appendChild(taskList);
    });
}
