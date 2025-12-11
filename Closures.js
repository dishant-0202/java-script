function a() {
    var x = 10;

    function b() {
        let y = 20;

        function c() {
            let z = 30;

            function d() {
                console.log(x, y, z);
            }
            return d;
        }

        return c;
    }
    return b;
}
var e = a()()();
e();