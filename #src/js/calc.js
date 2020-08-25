let tagsArr = document.querySelectorAll('.addPrice');
let calc = document.querySelector('.calc-order');
let output = document.querySelector('.price');
let outputQuanity = document.querySelector('.count');
let priceArr = [];
let result = 0;
let quanity = 1;

if(calc){
    calc.addEventListener('click', (event)=>{
        let target = event.target;
        tagsArr.forEach((item)=>{
            if(item.checked){
                priceArr.push(item.dataset.price);
            }
            result = priceArr.reduce((sum, current) => sum + +current,0);
        });
        priceArr.length = 0;
        
        if(target.tagName == 'DIV'){
            if(target.className == "plus-pizza") {quanity++;}
            else if(target.className == "minus-pizza" && quanity > 1) {quanity -= 1;}
        }
        outputQuanity.textContent = quanity;
        output.textContent = "$" + Math.round((result * quanity)*100)/100;
    });
}
