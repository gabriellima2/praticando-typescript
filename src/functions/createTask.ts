const CLASS_TASK_COMPLETED = "list__task--completed";

function handleDoubleClick({ target }: MouseEvent) {
    const itemList: HTMLElement = target as HTMLElement;

    if (itemList?.classList.contains(CLASS_TASK_COMPLETED)) {
        itemList?.classList.remove(CLASS_TASK_COMPLETED);
    } else {
        itemList?.classList.add(CLASS_TASK_COMPLETED);
    }
}

function createTask(value: string): void {
    const list = document.querySelector<HTMLElement>(".list");

    const item = document.createElement("li");
    item.textContent = value;
    item.classList.add("list__task");
    item.addEventListener("dblclick", handleDoubleClick);

    list?.appendChild(item);
}

export default createTask;
