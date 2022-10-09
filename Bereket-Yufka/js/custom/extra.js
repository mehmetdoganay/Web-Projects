

//html ögeleri yüklendiğinde navbarNobile() fonksiyonunu çalıştır.
window.addEventListener("DOMContentLoaded", event => {
    var navbarMobile = function() {
        // nCollapsed değişkenine mainNavbarı eşledik
        const nCollapsed = document.body.querySelector("#mainNavbar");
        //boyle bi etiket bulunmadıysa değişken boşsa return ettitdik
        if(!nCollapsed) {
            return;
        }
        // ekran y ekseninde yani aşağı doğru bir hareket yoksa bi değişiklik olmasın 
        else if(window.scrollY === 0) {
            nCollapsed.classList.remove("navbar-mobile");
        }
        //eğer aşağı hareket varsa classı ekledik dedik
        else {
            nCollapsed.classList.add("navbar-mobile");
        }
    }
    navbarMobile();
    // Eğer scroll olayı gerçekleşirse navbarMobile fonksiyonunu çağır diyoruz
    document.addEventListener("scroll",navbarMobile)

    const myNavbar = document.querySelector("#mainNavbar");
    if(myNavbar){
        new bootstrap.ScrollSpy(document.body,{
            target:"#mainNavbar",
            offset: 74,

        })
    }
})


var btnCanvas = document.querySelectorAll(".btn-close-canvas");
for(let i = 0; i < btnCanvas.length; i++) 
{   
    btnCanvas[i].addEventListener("click", function (){
        // Canvası kapatma butonu canvas acık değilken kapatma aktif olmaması için bir kontrol eklendi
        // sadece canvas açık olduğunda eklenen show classı control değişkenine atıldı
        var control =document.querySelector(".offcanvas-end.show")
        if(!control)
        {
            return;
        }else {
            document.querySelector('[data-bs-toggle="offcanvas"]').click();
        }
        
        
    }); 
}

