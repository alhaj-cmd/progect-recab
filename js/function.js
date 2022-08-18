function getInputValue(inputId){
    const inputButton =document.getElementById(inputId);
    const inputvalue =inputButton.value;
    const innervalues =parseFloat(inputvalue);
    // gap value
    inputButton.value =' ';
    return innervalues;
}

function totalFild(totalfildid,depositeAmount){
    const depositeAdd =document.getElementById(totalfildid);
    const depositeText =depositeAdd.innerText;
    const depositeValues= parseFloat(depositeText) 
    depositeAdd.innerText=depositeValues+depositeAmount;
}

// balance not a add numbenr
function getCurrentBal(){
    const balanceTotal=document.getElementById('balance-total');
    const balancevalue =balanceTotal.innerText;
    const balances =parseFloat(balancevalue);
    return balances;
}


function updateBal(depositeAmount,isAdd){
     const balanceTotal=document.getElementById('balance-total');
    // const balancevalue =balanceTotal.innerText;
    // const balances =parseFloat(balancevalue);
    const balances = getCurrentBal();
    if (isAdd==true){
    balanceTotal.innerText =balances+depositeAmount;
    }
    else{
        balanceTotal.innerText =balances-depositeAmount;
    }
}


document.getElementById('deposite-button').addEventListener('click',function(){
    const depositeAmounts =getInputValue('deposite-input');
    if(depositeAmounts>0){
    totalFild('deposite', depositeAmounts);
    updateBal(depositeAmounts,true)
}
})

document.getElementById('withdrow-button').addEventListener('click',function(){
    const depositeAmount =getInputValue('withdrow-input');
    const currenBalance = getCurrentBal();
    if(depositeAmount > 0 && depositeAmount < currenBalance){
        totalFild('withdrow',depositeAmount);
        updateBal(depositeAmount,false);
    }
    // error message
    if (depositeAmount > currenBalance){
        alert('you can not withwraw more than what you have in your account')
    }
  
})