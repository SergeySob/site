const chapterDiv = document.querySelector('.chapterDiv');
const fontSizeInput = document.getElementById('fontSizeInput');
const lineHeightInput = document.getElementById('lineHeightInput');
const widthInput = document.getElementById('widthInput');
const fontSelect = document.getElementById('fontSelect');
const bgColorInput = document.getElementById("bgColorInput");
const textColorInput = document.getElementById("textColorInput");
const fontSizeValue = document.getElementById('fontSizeValue');
const lineHeightValue = document.getElementById('lineHeightValue');
const widthValue = document.getElementById('widthValue');



function updateStyles() {
    let fontSize = parseInt(fontSizeInput.value);
    let lineHeight = parseFloat(lineHeightInput.value);
    let width = parseInt(widthInput.value);

    chapterDiv.style.fontSize = fontSize + "px";
    chapterDiv.style.lineHeight = lineHeight;
    chapterDiv.style.width = width + "%";

    fontSizeValue.textContent = fontSize + "px";
    lineHeightValue.textContent = lineHeight;
    widthValue.textContent = width + "%";
}

fontSizeInput.addEventListener('input', updateStyles);
lineHeightInput.addEventListener('input', updateStyles);
widthInput.addEventListener('input', updateStyles);

fontSelect.addEventListener('change', () => {
    chapterDiv.style.fontFamily = fontSelect.value;
});

bgColorInput.addEventListener("input", () => {
    chapterDiv.style.backgroundColor = bgColorInput.value;
});

textColorInput.addEventListener("input", () => {
    chapterDiv.style.color = textColorInput.value;
});

updateStyles();

function disableScroll() {
    document.body.classList.add('no-scroll'); 
}

function enableScroll() {
    document.body.classList.remove('no-scroll'); 
}

document.getElementById('toggleSettings').addEventListener('change', function() {
    if (this.checked) {
        disableScroll(); 
    } else {
        enableScroll();  
    }
});

document.getElementById('toggleCheckbox').addEventListener('change', function() {
    if (this.checked) {
        disableScroll();
    } else {
        enableScroll(); 
    }
});

document.querySelectorAll('.replyBtn').forEach(button => {
    button.addEventListener('click', function () {
        const comment = this.closest('.comment');  
        const replyForm = comment.querySelector('.replyForm');  
        replyForm.style.display = replyForm.style.display === 'block' ? 'none' : 'block';  
    });
});



