$(document).ready(
    function(){
        AOS.init();
        $('nav ul li a').click(function(){
        $(this).css("color","rgb(122, 103, 103)");
        $(this).parent().siblings().children().css("color","#000");
       })
       
        $("a.welcome").click(function(event){         

            event.preventDefault();
    
                $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
        
        }
        );

        $("a.about").click(function(event){         

            event.preventDefault();
    
                $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
        
        }
        );
        
        $("a.portfolio").click(function(event){         

            event.preventDefault();
    
                $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
        
        }
        );

        $("a.thankyou").click(function(event){         

            event.preventDefault();
    
                $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
        
        }
        );

        $('.hamberger').click(function(){
            $('nav').toggle();
            $('nav a').click(function(){
                $('nav').hide();
            });
            return false;
        });
        
}   
);