$(function(){
    $(function(){
        var len = -$(".banner").length,
            leni = $(".banner").length,
            chang = $(".banner")[0].clientWidth;
            index = 0;
        $(".anlf").on("click", function(){
            index --;
           $(".bannerbox").css({marginLeft:index * chang + "px"})
           if(index <= len){
                index = 0;
                $(".bannerbox").css({marginLeft:index * chang + "px"})
           }
        }) 
        $(".anrg").on("click", function(){
            index ++;
           $(".bannerbox").css({marginLeft:"-" + index * chang + "px"})
           if(index >= leni){
                index = 0;
                $(".bannerbox").css({marginLeft:"-" + index * chang + "px"})
           }
        }) 
    })

    $(function(){
        var len = $(".xuantextone").length;
        var leni = -$(".xuantextone").length;
        var index = 0;
        $(".xuanrg").on("click",function(){
            index ++;
            console.log(index);
            $(".xuantextone").removeClass('xuandisplay');
            $(".xuantextone").eq(index).addClass("xuandisplay")
            if(index >= len){
                index = 0;
                $(".xuantextone").removeClass('xuandisplay');
                $(".xuantextone").eq(index).addClass("xuandisplay")
            }
        })
        $(".xuanlf").on("click",function(){
            index --;
            console.log(index)
            $(".xuantextone").removeClass('xuandisplay');
            $(".xuantextone").eq(index).addClass("xuandisplay")
            if(index <= leni){
                index = 0;
                $(".xuantextone").removeClass('xuandisplay');
                $(".xuantextone").eq(index).addClass("xuandisplay")
            }
        })
    })
})