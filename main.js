$(document).ready(function(){
            $('.slider').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                arrows: true,
responsive: [                    
    {                            
        breakpoint: 480,
        settings: {              
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
]                              
    });
            });
       