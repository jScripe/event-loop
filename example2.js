
{
    let i = 0;

    let start = Date.now();

    function count() {

        do {
            i++;
        } while (i % 1e6 != 0);

        if (i == 1e9) {
            alert(Date.now() - start);
        } else {
            setTimeout(count);
        }

    }

    // count();
}