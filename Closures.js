  function x() {
         var a = 20;

        function y() {
            console.log(a);

        }
        return y;

    }
    var z=x();
    console.log(z);

    z();