function x() {
    for (var i = 1; i <= 10; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            },x * 1000);
        }
         close(i);
    }
   
     console.log("HELLO JAVA-SCRIPT");

    }

    x();