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
        taskList.innerText = element.title;
        container.appendChild(taskList);
    });
}
