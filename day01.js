(() => {
    function part1(inp) {
        return inp.reduce((acc, x, index) => {
            if (index === 0) {
                return acc;
            }

            if (inp[index - 1] < x) {
                return acc + 1;
            }

            return acc;
        }, 0);
    }

    function part2(inp) {
        const l = inp.length - 1;

        const tmsw = inp.reduce((acc, x, index) => {
            if (index + 2 <= l) {
                acc.push(inp[index] + inp[index + 1] + inp[index + 2]);
            }

            return acc;
        }, []);

        return part1(tmsw);
    }

    const input = document.body.innerText.split('\n').map(x => parseInt(x, 10));
    const testInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

    console.log('Part 1', part1(input));
    console.log('Part 2', part2(input));
})();
