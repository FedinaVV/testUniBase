document.addEventListener('DOMContentLoaded', () => {

    let callBackButton = document.getElementById('button');
    let modal = document.getElementById('modal');
    let closeButton = modal.getElementsByClassName('form__btnClose')[0];
    let tagBody = document.getElementsByTagName('body');

    callBackButton.onclick = function (e) {
        e.preventDefault();
        modal.classList.add('modal_active');
        tagBody.classList.add('hidden');
    }

    closeButton.onclick = function (e) {
        e.preventDefault();
        modal.classList.remove('modal_active');
        tagBody.classList.remove('hidden');
    }

    modal.onmousedown = function (e) {
        let target = e.target;
        let modalContent = modal.getElementsByClassName('modal__content')[0];
        if (e.target.closest('.' + modalContent.className) === null) {
            this.classList.remove('modal_active');
            tagBody.classList.remove('hidden');
        }
    };

});

let image = document.getElementById("image-download");
let file = document.getElementById("file");
let svgPath = document.getElementById("path-svg-download");
let textDownload = document.getElementById("label-download-text");
let btnClose = document.getElementById("download-close");

file.addEventListener('change', function(){
    image.src = URL.createObjectURL(file.files[0]);
    image.style.display = "block";
    svgPath.style.fill = "white";
    textDownload.style.color = "#FFFFFF"
    btnClose.style.display = "flex"
});

/**
 * Удаляет загруженную картинку
 */
function clearFile() {
    image.src = '';
    image.style.display = "none";
    svgPath.style.fill = "black";
    textDownload.style.color = "#000000"
    btnClose.style.display = "none"
}