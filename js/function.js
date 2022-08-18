function getInputValue(){
    const inputButton =document.getElementById('deposite-input');
    const inputvalue =inputButton.value;
    const innervalues =parseFloat(inputvalue);
    // gap value
    inputButton.value =' ';
    return innervalues;
}
document.getElementById('deposite-button').addEventListener('click',function(){
    const innervalues =getInputValue();
})