const inputs = document.querySelectorAll('.filters input');

function filterUpdate() {
    const units = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + units);
}

inputs.forEach(input => input.addEventListener('change', filterUpdate));
inputs.forEach(input => input.addEventListener('mousemove', filterUpdate));
