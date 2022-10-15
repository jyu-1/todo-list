import './style.css';
import { Projects, projects } from "./scripts/storage.js";
import { listProjects } from './scripts/listItems.js';

const addProject = document.querySelector(".add-project");
addProject.addEventListener("click", () => {
    
    const proj = Projects("cool");
    projects.push(proj);
    listProjects(projects);
    console.log(projects);
})

const taskList = document.querySelector(".tasks");
const addTask = document.querySelector(".add-task");
addTask.addEventListener("click", () => {
    const navList = document.createElement("button");
    navList.classList.add("task-list");
    navList.innerText = "Project Test";
    taskList.appendChild(navList);
})

