import handleValidate from "../functions/handleValidate.js";
import createTask from "../functions/createTask.js";

function handleClick(): void {
    const input = document.querySelector<HTMLInputElement>(".actions__input-task");

    if (input) {
        const isValid = handleValidate(input);

        if (isValid) {
            createTask(input.value);
            input.value = "";
        }
    }
}

export default handleClick;
