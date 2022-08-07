
const range = document.querySelector('#howmany');
const output = document.querySelector('#result');


output.textContent = range.value;

range.oninput = function()
{
    output.textContent = this.value;
}