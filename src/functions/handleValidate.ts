const CLASS_ERROR = "actions__input-task--empty"

function handleValidate(input: HTMLInputElement): boolean {
    if (!input.value) {
        input.classList.add(CLASS_ERROR);
        input.addEventListener("focus", () => input.classList.remove(CLASS_ERROR));
        return false;
    }
    return true;
}

export default handleValidate;
