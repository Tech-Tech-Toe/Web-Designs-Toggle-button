document.getElementById('toggle').addEventListener('change', function() {
    var box = document.getElementById('box');
    if (this.checked) {
        box.style.backgroundColor = '#333';
    } else {
        box.style.backgroundColor = 'white';
    }
});
