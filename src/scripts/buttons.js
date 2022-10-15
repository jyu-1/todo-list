import { Projects, projects } from "./storage";
import { listProjects, listTasks, currentView } from './displayHandler';

export function defaultPage() {

    const defaultProject = Projects("Default");
    projects.push(defaultProject);
    listProjects(projects);

    const addProject = document.querySelector(".add-project");
    addProject.addEventListener("click", () => {
        const newProject = Projects("test");
        projects.push(newProject);
        listProjects(projects);
    });

    const addTask = document.querySelector(".add-task");
    addTask.addEventListener("click", () => {
        projects[currentView].addList("title", "description", "dueDate", "priority", "checklist");
        listTasks(projects[currentView].list);
    });
}