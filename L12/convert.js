let container = document.querySelector('#result');
let b1 = document.querySelector('button');
let field = document.querySelector('#usdAmount');
b1.addEventListener("click",
    ()=>{
        let str = field.value;
        let num = parseFloat(str);
        if(!num || num<0){
            alert("Enter a valid number ");
            return;
        }
        fetch("https://api.exchangerate-api.com/v4/latest/USD")
        .then((response) => response.json())
        .then((data)=>{
            let{rates}=data;
            let total=rates.INR*num;
            container.textContent=`${num}$ =Rs ${total}`;
        })
        .catch((error)=>console.log(error));
    }
)