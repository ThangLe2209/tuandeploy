$(document).ready(function(){
    $('.chay_tintuc').slick({
        vertical:true,//Chay dọc
        slidesToShow: 5,    //Số item hiển thị
        slidesToScroll: 1, //Số item cuộn khi chạy
        autoplay:true,  //Tự động chạy
        autoplaySpeed:3000,  //Tốc độ chạy
        speed:1000,//Tốc độ chuyển slider
        arrows:false, //Hiển thị mũi tên
        dots:false,  //Hiển thị dấu chấm
        responsive: [
            {
              breakpoint: 568,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
              }
            }
          ]
    });

    $('.box_bangga').slick({
        // vertical:true,//Chay dọc
        slidesToShow: 3,    //Số item hiển thị
        slidesToScroll: 1, //Số item cuộn khi chạy
        autoplay:false,  //Tự động chạy
        autoplaySpeed:3000,  //Tốc độ chạy
        speed:1000,//Tốc độ chuyển slider
        arrows:false, //Hiển thị mũi tên
        dots:false,  //Hiển thị dấu chấm
        responsive: [
            {
              breakpoint: 568,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
              }
            }
          ]
    });

    $('.chayhinhcon').slick({
        //vertical:true,//Chay dọc
        slidesToShow: 4,    //Số item hiển thị
        slidesToScroll: 1, //Số item cuộn khi chạy
        autoplay:false,  //Tự động chạy
        autoplaySpeed:3000,  //Tốc độ chạy
        speed:1000,//Tốc độ chuyển slider
        arrows:false, //Hiển thị mũi tên
        dots:false,  //Hiển thị dấu chấm
    });

    $('.slick_video').slick({
        vertical:true,//Chay dọc
        slidesToShow: 3,    //Số item hiển thị
        slidesToScroll: 1, //Số item cuộn khi chạy
        autoplay:true,  //Tự động chạy
        autoplaySpeed:3000,  //Tốc độ chạy
        speed:1000,//Tốc độ chuyển slider
        arrows:false, //Hiển thị mũi tên
        dots:false,  //Hiển thị dấu chấm
    });
    $('.chaydoitac').slick({
        //vertical:true,//Chay dọc
        slidesToShow: 6,    //Số item hiển thị
        slidesToScroll: 1, //Số item cuộn khi chạy
        autoplay:true,  //Tự động chạy
        autoplaySpeed:3000,  //Tốc độ chạy
        speed:1000,//Tốc độ chuyển slider
        arrows:false, //Hiển thị mũi tên
        dots:false,  //Hiển thị dấu chấm
    });

    
});

