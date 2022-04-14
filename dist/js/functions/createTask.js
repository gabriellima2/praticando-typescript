const CLASS_TASK_COMPLETED = "list__task--completed";
function handleDoubleClick({ target }) {
    const itemList = target;
    if (itemList === null || itemList === void 0 ? void 0 : itemList.classList.contains(CLASS_TASK_COMPLETED)) {
        itemList === null || itemList === void 0 ? void 0 : itemList.classList.remove(CLASS_TASK_COMPLETED);
    }
    else {
        itemList === null || itemList === void 0 ? void 0 : itemList.classList.add(CLASS_TASK_COMPLETED);
    }
}
function createTask(value) {
    const list = document.querySelector(".list");
    const item = document.createElement("li");
    item.textContent = value;
    item.classList.add("list__task");
    item.addEventListener("dblclick", handleDoubleClick);
    list === null || list === void 0 ? void 0 : list.appendChild(item);
}
export default createTask;
