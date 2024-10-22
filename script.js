// Click Event Tracker
let clickCount = 0;
document.getElementById('clickButton').addEventListener('click', function () {
    clickCount++;
    document.getElementById('clickCount').innerText = `Click Count: ${clickCount}`;
    document.getElementById('clickCount').style.color = "green";

});

// Double Click Event
document.getElementById('doubleClickArea').addEventListener('dblclick', function () {
    document.getElementById('doubleClickStatus').innerText = 'Double-click detected!';
    document.getElementById('doubleClickStatus').style.color = "green";
});

// Load Event
window.addEventListener('load', function () {
    document.getElementById('loadStatus').innerText = 'Page fully loaded!';
    document.getElementById('loadStatus').style.color = "green";
});

// Mouse Movement Tracker
document.getElementById('mouseArea').addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    document.getElementById('mousePosition').innerText = `Mouse Position: (${x}, ${y})`;
    document.getElementById('mousePosition').style.color = "green";
});

// Keyboard Event Tracker
document.getElementById('keyboardInput').addEventListener('keydown', function (e) {
    document.getElementById('lastKey').innerText = `Last Key Pressed: ${e.key}`;
    document.getElementById('lastKey').style.color = "green";
});

// Copy Event
document.getElementById('copyText').addEventListener('copy', function () {
    document.getElementById('copyStatus').innerText = 'Text copied!';
    document.getElementById('copyStatus').style.color = "green";
});

// Paste Event
document.getElementById('pasteInput').addEventListener('paste', function (event) {
    let pastedData = (event.clipboardData || window.clipboardData).getData('text');
    document.getElementById('pasteStatus').innerText = `Pasted content: ${pastedData}`;
    document.getElementById('pasteStatus').style.color = "green";
});

// Focus and Blur Events
const focusInput = document.getElementById('focusInput');
focusInput.addEventListener('focus', function () {
    document.getElementById('focusStatus').innerText = 'Input is focused';
    document.getElementById('focusStatus').style.color = "green";
});
focusInput.addEventListener('blur', function () {
    document.getElementById('focusStatus').innerText = 'Input lost focus';
    document.getElementById('focusStatus').style.color = "red";
});

// Window Resize Event
window.addEventListener('resize', function () {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('windowSize').innerText = `Current Window Size: ${width}px x ${height}px`;
    document.getElementById('windowSize').style.color = "green";
});

// Touch Event (for mobile devices)
document.getElementById('touchArea').addEventListener('touchstart', function (e) {
    const touch = e.touches[0];
    document.getElementById('touchStatus').innerText = `Touch Coordinates: (${touch.clientX}, ${touch.clientY})`;
    document.getElementById('touchStatus').style.color = "green";
});

// Scroll Event
window.addEventListener('scroll', function () {
    document.getElementById('scrollStatus').innerText = `You have scrolled! Scroll Position: ${window.scrollY}px`;
    document.getElementById('scrollStatus').style.color = "green";
});

// Form Submit Event
document.getElementById('submitForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputValue = document.getElementById('formInput').value;
    document.getElementById('formStatus').innerText = `Form Submitted: ${inputValue}`;
    document.getElementById('formStatus').style.color = "green";
});

// input Event
document.getElementById('inputEvent').addEventListener('input', function (e) {
    document.getElementById('inputResult').innerText = `Current Value: ${e.target.value}`;
    document.getElementById('inputResult').style.color = "green";
});

// Drag and Drop Event
const dragArea = document.getElementById('dragArea');
const dropArea = document.getElementById('dropArea');

dragArea.addEventListener('dragstart', function () {
    document.getElementById('dragDropStatus').innerText = 'Dragging started';
    document.getElementById('dragDropStatus').style.color = "green";
});

dropArea.addEventListener('dragover', function (e) {
    e.preventDefault();
});

dropArea.addEventListener('drop', function () {
    document.getElementById('dragDropStatus').innerText = 'Dropped successfully!';
    document.getElementById('dragDropStatus').style.color = "green";
});

// Media Event
const media = document.getElementById('media');
media.addEventListener('play', function () {
    document.getElementById('mediaStatus').innerText = 'Media is playing';
    document.getElementById('mediaStatus').style.color = "green";
});
media.addEventListener('pause', function () {
    document.getElementById('mediaStatus').innerText = 'Media is paused';
    document.getElementById('mediaStatus').style.color = "red";
});
media.addEventListener('ended', function () {
    document.getElementById('mediaStatus').innerText = 'Media has ended';
    document.getElementById('mediaStatus').style.color = "red";
});