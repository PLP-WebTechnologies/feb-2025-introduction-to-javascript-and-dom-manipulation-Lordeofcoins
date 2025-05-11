// This file contains basic JavaScript functions for dynamic DOM manipulation.

document.addEventListener('DOMContentLoaded', () => {
    const changeTextButton = document.getElementById('change-text');
    const changeStyleButton = document.getElementById('change-style');
    const addElementButton = document.getElementById('add-element');
    const removeElementButton = document.getElementById('remove-element');
    const textElement = document.getElementById('text-element');
    const container = document.getElementById('element-container');

    changeTextButton.addEventListener('click', () => {
        textElement.textContent = 'Text has been changed!';
    });

    changeStyleButton.addEventListener('click', () => {
        textElement.style.color = 'blue';
        textElement.style.fontSize = '24px';
    });

    addElementButton.addEventListener('click', () => {
        const newElement = document.createElement('p');
        newElement.textContent = 'A new paragraph has been added!';
        container.appendChild(newElement);
    });

    removeElementButton.addEventListener('click', () => {
        const lastElement = container.lastElementChild;
        if (lastElement) {
            container.removeChild(lastElement);
        }
    });
});