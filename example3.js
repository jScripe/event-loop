{
    let i = 0;

    let start = Date.now();

    function count() {

        for (let j = 0; j < 1e9; j++) {
            i++;
        }

        alert(Date.now() - start);
    }

    // count();
}