export const projects = [];

export const Projects = (name, list) => {
    if (list === undefined){
        list = [];
    }

    const addList = (title, description, dueDate, priority) => {
        const newItem = List(title, description, dueDate, priority);
        list.push(newItem);
        localStorage.setItem("projects", JSON.stringify(projects));
    };

    const removeList = (index) => {
        list.splice(index, 1);
        localStorage.setItem("projects", JSON.stringify(projects));
    }
    return { name, list, addList, removeList };
};

const List = (title, description, dueDate, priority) => {
    if (title === undefined) {
        title = "default";
    }
    if (description === undefined) {
        description = "";
    }
    if (dueDate === undefined) {
        dueDate = "2022";
    }
    if (priority === undefined) {
        priority = "1";
    }
    return { title, description, dueDate, priority };
};
