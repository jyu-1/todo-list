export const projects = [];

export const Projects = (name) => {
    let list = [];

    const addList = (title, description, dueDate, priority, checklist) => {
        const newItem = List(title, description, dueDate, priority, checklist);
        list.push(newItem);
    };

    const removeList = () => {
        list.splice(0, 1);
    }
    return { name, list, addList, removeList };
};

const List = (title, description, dueDate, priority, checklist) => {
    return { title, description, dueDate, priority, checklist };
};
