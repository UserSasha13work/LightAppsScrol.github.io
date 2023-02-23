jQuery(function($) {



    var text_land = {
        source:{
            sec1_t1: "Hello, we are LightApps.studio",
            sec1_t2: "We create IOS/Android utility applications that make life easier for our users",
            sec1_t3: "A3",
            sec1_t4: "A3"
        }
    };
    
    inner_text();
    
    
    function replace_text(lang, text) {
                console.log(text);
                x=$('.'+text);
                console.log(x);
                // x = document.getElementById(text);
                // console.log(x);
                if (x) {
                    x.html(text_land[lang][text]);
                    
                    console.log("+");
                } else {
                    console.log("element not Found: " + text);
                }
            }
    
            function inner_text() {
                var detected_language = "source";
                for (y in text_land["source"]) {
                    replace_text(detected_language, y);
                    
                }
    
              
            } 
});


