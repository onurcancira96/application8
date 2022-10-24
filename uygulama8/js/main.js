if(document.getElementById('vitrin').textContent=='Document'){
    function loadInformation(){
        const xhr = new XMLHttpRequest();
        xhr.open('GET','JSON/information.json',true);
        xhr.onload=function(){
            var info = JSON.parse(this.responseText);
            let html =""; 
            var sayac = 0;
            info.data[0].number=0;
            info.data[1].number=0 ;
            info.data[2].number=0 ;
            info.data.forEach(element => {
                sayac+=1;
                html += 
                `
                <div class="eklenecek col-3 m-4">
                        <img class="resim col-12" src="/uygulama8/img/${element.pic}">
                        <div class="isim col-12 lead mt-2">${element.name}</div>
                        <div class="fiyat col-12 fw-semibold lead mt-2">${element.price}</div>
                        <div class="btn-group col-12 mt-3">
                            <input class="adet col-7" type="number" min="0">
                            <button  class="buton col-5 btn btn-success ms-2 ">Sepete Ekle</button>
                        </div>
                </div>
                `;
            });       
            document.querySelector('.urunler').innerHTML += html;
            var a=0;
            var b=0;
            var c=0;
            var d=0;
            const eklenceklerjs = document.querySelectorAll('.eklenecek');
            const adetjs = document.querySelectorAll('.adet');
            const butonjs = document.querySelectorAll('.buton');
            for (let i=0; i<eklenceklerjs.length; i++){
                butonjs[i].addEventListener("click", function(){
                    if(adetjs[i].value!=''){
                        console.log('dasdasd');
                        const jk =sessionStorage.setItem('jsonf',info.stok[0].pc);
                        console.log("buton"+i);
                        document.querySelector('.sepetSayi').textContent=parseInt(document.querySelector('.sepetSayi').textContent)+parseInt(adetjs[i].value) ;
                        // ekleme
    
    
                        if(butonjs[i]==butonjs[0]){
                            a = a + parseInt(adetjs[i].value);
                            info.stok[0].pc=a;
                            //info['data'].push({"pic":""+adetjs[i].value+".png","name":"Mac Pro","price":"30.000 TL","number":1});
                            console.log(info);
                            sessionStorage.setItem('jsonf1',info.stok[0].pc);
                        }
                        else if(butonjs[i]==butonjs[1]){
                            b = b + parseInt(adetjs[i].value);
    
                            info.stok[0].mobil=b;
    
                            //info['data'].push({"pic":""+adetjs[i].value+".png","name":"Apple 13","price":"20.000 TL","number":2});
                            console.log(info);
                            sessionStorage.setItem('jsonf2',info.stok[0].mobil);
    
    
                        }
                        else if(butonjs[i]==butonjs[2]){
                            c = c + parseInt(adetjs[i].value);
                            info.stok[0].watch=c;
                            //info['data'].push({"pic":""+adetjs[i].value+".png","name":"Apple Watch","price":"10.000 TL","number":3});
                            console.log(info);
                            sessionStorage.setItem('jsonf3',info.stok[0].watch);
                        }
                        d = a+b+c;
                        sessionStorage.setItem('adet',d);
                    }
                    else{

                    }

                })

            }
        }
        xhr.send();
    }
    loadInformation();
}
else{
    document.querySelector('.sepetSayi').textContent=sessionStorage.getItem('adet');
        const xhr = new XMLHttpRequest();
        xhr.open('GET','JSON/information.json',true);
            function loadInformation(){    
        xhr.onload=function(){
            var info = JSON.parse(this.responseText);
            let html =""; 
            info.data[0].number=parseInt(sessionStorage.getItem('jsonf1')) ;
            info.data[1].number=parseInt(sessionStorage.getItem('jsonf2')) ;
            info.data[2].number=parseInt(sessionStorage.getItem('jsonf3')) ;

            info.data.forEach(element => {
                console.log(info);  
                html +=
                `
                <div class="urun col-12 bg-white  mt-4  rounded-2 overflow-hidden ">
                    <img class="resim1 col-1 ms-2" src="/uygulama8/img/${element.pic}">
                    <div class="isim col-2 lead fs-2 mt-2">${ element.name}</div>
                    <div class="adet col-1 lead mt-2">${element.number}x</div>
                    <div class="fiyat col-2 fw-semibold lead mt-2">${parseInt(element.price)*parseInt(element.number) } TL</div>
                    <button class="sil fs-5 btn btn-danger me-2"><i class="bi bi-trash"></i></button>
                </div>
                `;
            });       
            document.querySelector('.urunler').innerHTML += html;

        var silme=document.querySelectorAll('.sil');
        var adetjs = document.querySelectorAll('.adet');
        var fiyatjs = document.querySelectorAll('.fiyat');
        var urunjs = document.querySelectorAll('.urun');


        for(let i = 0; i < silme.length; i++)
        {silme[i].addEventListener('click', silmejs)
        function silmejs(){
            var adeteksi = sessionStorage.getItem('adet');
            var hesap = parseInt(adeteksi)-1;
            sessionStorage.setItem('adet',hesap);
            if(document.querySelector('.sepetSayi').textContent!=0)
            document.querySelector('.sepetSayi').textContent=String(sessionStorage.getItem('adet'))

        if(info.data[i].number==1){urunjs[i].remove();
        }
        else{        info.data[i].number -=1;
            sessionStorage.setItem(`json${i+1}`,info.data[i].number);
            adetjs[i].textContent=`${info.data[i].number}x`;
            fiyatjs[i].textContent=`${info.data[i].price * info.data[i].number} TL`;
        }
        }}

        }
        xhr.send();
        //------

    }
    loadInformation();




    }


    



