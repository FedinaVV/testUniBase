const image = document.getElementById("image-download");
const fileInput = document.getElementById("file");
const svgPath = document.getElementById("path-svg-download");
const textDownload = document.getElementById("label-download-text");
const btnClose = document.getElementById("download-close");

/**
 * Управление модальным окном формы вводимых данных
 */
document.addEventListener('DOMContentLoaded', () => {

    const callBackButton = document.getElementById('button');
    const modal = document.getElementById('modal');
    const closeButton = modal.getElementsByClassName('form__btnClose')[0];
    const tagBody = document.getElementsByTagName('body');

    callBackButton.onclick = function (e) {
        e.preventDefault();
        modal.classList.add('modal_active');
        tagBody[0].classList.add('hidden');
    }

    closeButton.onclick = function (e) {
        e.preventDefault();
        modal.classList.remove('modal_active');
        tagBody[0].classList.remove('hidden');
    }

    modal.onmousedown = function (e) {
        let modalContent = modal.getElementsByClassName('modal__content')[0];
        if (e.target.closest('.' + modalContent.className) === null) {
            this.classList.remove('modal_active');
            tagBody[0].classList.remove('hidden');
        }
    };

});

/**
 * Вставка картинки
 */
fileInput.addEventListener('change', () => {
    image.src = URL.createObjectURL(fileInput.files[0]);
    image.style.display = "block";
    btnClose.style.display = "flex"
    svgPath.style.display = "none";
    textDownload.style.display = "none";
    fileInput.value = "";
});

/**
 * Удаляет загруженную картинку
 */
function clearFileInput() {
    image.src = '';
    image.style.display = "none";
    btnClose.style.display = "none"
    svgPath.style.display = "block";
    textDownload.style.display = "block"
    fileInput.value = "";
}
