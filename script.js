let disp=document.getElementById('dis');
        let min=document.getElementById('minus');
        let pl=document.getElementById('plus');
        let tp=document.getElementById('totalPrice');
        let qty=1;
        let price=76000;
        function totalPrice(){
            let totp=price*qty;
            tp.innerHTML=totp+'<i class="bi bi-currency-rupee"></i>';
        }
        function increment(){
            qty++;
            disp.textContent=qty;
            totalPrice();
        }
        function decrement(){
            if(qty>1){
                qty--;
                disp.textContent=qty;
                totalPrice();
            }
        }
        pl.addEventListener('click',increment);
        min.addEventListener('click',decrement);