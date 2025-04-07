const inputs= document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value.trim() !== '') {
            input.classList.add('texto')
        } else {
            input.classList.remove('texto')
        }
    })
})