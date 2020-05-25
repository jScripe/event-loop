{
    function foo1() {
        console.log('1--->', 'macro')
        setTimeout(foo1, 0);
    }

    function foo2() {
        foo2();
    }

    // foo1();
    // foo2();
}