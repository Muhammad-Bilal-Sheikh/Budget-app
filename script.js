let totalAmount= document.getElementById("total-amount");
let userAmount= document.getElementById("user-amount")
const checkAmountButton=document.getElementById("check-amount");
const TotalAmountButton=document.getElementById("total-amount-button");
const productTitle=document.getElementById("product-title");
const errorMessage=document.getElementById("budget-error");
const productTitleError=document.getElementById("product-title-error");
const productCostError=document.getElementById("product-cost-error");
const Total=document.getElementById("amount");
const expenditureValue=document.getElementById("expenditure-value");
const balanceValue=document.getElementById("balance-amount");
const list=document.getElementById("list");
let tempAmount=0;

TotalAmountButton.addEventListener("click" ,() => {
    tempAmount=totalAmount.value;

        if(tempAmount ===""|| tempAmount < 0){
    errorMessage.classList.remove("hide");
}
else{
    errorMessage.classList.add("hide");
}
    amount.innerHTML = tempAmount;

    balanceValue.innerHTML=tempAmount - expenditureValue.innerText;
    totalAmount.value=""
});

const disableButton=(bool)=>{
    let editButtons=document.getElementsByClassName("edit");
    Array.from(editButtons).forEach(element=>{element.disabled=bool;
    });
};


const modifyElement=(element,edit=false)=>{
    let parentDiv=element.parentElement;
    let currentBalance=balanceValue.innerText;
    let currentExpenses=expenditureValue.innerText;
    let parentAmount=parentDiv.queryselector("amount").innerText;
    if(edit){
        let parentText=parentDiv.queryselector("product").innerText;
        productTitle.value=parentText;
        userAmount.value=parentAmount;
        disableButtons(true);

    }
       balanceValue.innerText=parseInt(currentBalance)+ parseInt(parentAmount);
       expenditureValue.innerText=parseInt(currentExpense)-parseInt(parentAmount);
       parentDiv.remove();
    };



    const listCreator=(expense,expansesValue) =>{
        let sublistContent= document.createElement("div");
        sublistContent.classList.add("sublist-content","flex-space");
        list.appendChild(sublistContent);
        sublistContent.innerHTML='<p class="product">$ {expenseName} </p<><p class="amount">${expanseValue} </p>'
        let editButton=document.createElement(button);
        editButton.classList.add("fa-solid","fa-pen-to-squre","edit");
        editButton.style .fontsize= "20px"
        editButton.addEventListener("click" , ()=>{
            modifyElement(editButton,true);
        });
        let deleteButton=document.createElement("button");
        deleteButton.classList.add("fa-solid" ,"fa-trash-can","delete");
        deleteButton.style.fontSize="20px"
        deleteButton.addEventListener("click",() => {
            modifyElement(deleteButton);
        });

        sublistContent.appendChild(editButton);
        sublistContent.appendChild(deleteButton);
        document.getElementById("list").appendChild(sublistContent)
    };



    checkAmountButton.addEventListener("click",()=>{
        if (!userAmount.value || ! productTitle.value){
            productTitleError.classList.remove("hide");
            return false;
        }


        disableButton(false);
    

        let expenditure=parseInt(userAmount.value);
        let sum =parseInt(expenditureValue.innerHTML)+expenditure;
        expenditureValue.innerText=sum;
        const totalBalance=tempAmount-sum;
        balanceValue.innerText=totalBalance;
        listCreator(productTitle.value,userAmount.value);
        productTitle.value="";
        userAmount.value="";

    });