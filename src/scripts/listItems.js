import {projects} from "./storage.js"

export function listProjects(array) {
    const container = document.querySelector(".projects");

    array.forEach((element, index) => {
        const navList = document.createElement("button");
        navList.classList.add("project-list");
        navList.innerText = array[index].name;
        container.appendChild(navList);
    });
    

}

export function listTasks() {

}

