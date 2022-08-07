
const range = document.querySelector('howmany');
const output = document.querySelector('result');
range.addEventListener('input',(event)=>{
    output.textContent = range.value;
})