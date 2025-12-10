var x = 1;

function a() {
    var x = 10;
    console.log(x);
    b();
    c();

    function b() {
        var x = 100;
        console.log(x);

    }

}

a();


function c() {
    var x = 1000;
    console.log(x);
}

console.log(x);