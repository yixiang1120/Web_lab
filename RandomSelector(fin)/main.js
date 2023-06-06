var lastNumber = 10;
var numberOfListItem = document.querySelectorAll('.food-item').length;

$(function(){
    $("input").on("click",function(){
        document.getElementById(`result`).classList.add('start');
        document.getElementById(`result`).style.transform = 'none';

        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        while(lastNumber === randomChildNumber){
            randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        }

        setTimeout(() => {
            document.getElementById(`result`).classList.remove('start');
            document.getElementById(`result`).style.transform = `translateY(${-randomChildNumber * 10}%)`;
            var obj = document.getElementById("food");
    
            if(randomChildNumber === 0)
                obj.src = "https://storage.googleapis.com/www-cw-com-tw/article/202101/article-5ff76e12dff12.jpg";
            else if(randomChildNumber === 1)
                obj.src = "https://tokyo-kitchen.icook.network/uploads/recipe/cover/391516/4a15cb3a501a0c4e.jpg";
            else if(randomChildNumber === 2)
                obj.src = "https://cc.tvbs.com.tw/img/program/_data/i/upload/2021/07/22/20210722125231-fa5baab1-me.jpg";
            else  if(randomChildNumber === 3)
                obj.src = "https://content.shopback.com/tw/wp-content/uploads/2018/05/07102514/RFO-1400x919-Jimmys-Steak-for-two-73e9d0dc-02fa-43c3-af20-6a32fc86d1e9-0-1400x919.jpg";
            else if(randomChildNumber === 4)
                obj.src = "https://angelala.tw/wp-content/uploads/2021/12/chu1.jpg";
            else if(randomChildNumber === 5)
                obj.src = "https://www.papagofood.com.tw/archive/images/product/cover/AMD3A004_1.jpg";
            else  if(randomChildNumber === 6)
                obj.src = "https://candylife.tw/wp-content/uploads/20220513134806_42.jpg";
            else if(randomChildNumber === 7)
                obj.src = "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/87313402-94AE-4BE4-8A24-41A1FE682662/Derivates/4D02510C-5168-4AF7-9523-325FE2CFB0EE.jpg";
            else if(randomChildNumber === 8)
                obj.src = "https://www.buygood.com.tw/images/n01-L.jpg";
            else if(randomChildNumber === 9)
                obj.src = "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/95E418CD-10D2-4C77-8508-D1089175C2C4/Derivates/4b3587f1-790e-45bc-ab31-0635f8868db9.jpg";
            else
                obj.src = dinner.png;
            lastNumber = randomChildNumber;
        }, 1500);
        
    });
});
