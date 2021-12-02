(() => {
    const op = {
        forward: 'forward',
        down: 'down',
        up: 'up',
    };

    function part1(inp) {
        const pos = inp.reduce((acc, [opcode, val]) => {
            switch (opcode) {
                case op.forward:
                    acc.h += val;
                    break;
                case op.down:
                    acc.d += val;
                    break;
                case op.up:
                    acc.d -= val;
                    break;
            }

            return acc;
        }, { h: 0, d: 0 });

        return pos.h * pos.d;
    }

    function part2(inp) {
        const pos = inp.reduce((acc, [opcode, val]) => {
            switch (opcode) {
                case op.forward:
                    acc.h += val;
                    acc.d += acc.a * val;
                    break;
                case op.down:
                    acc.a += val;
                    break;
                case op.up:
                    acc.a -= val;
                    break;
            }

            return acc;
        }, { h: 0, d: 0, a: 0 });

        return pos.h * pos.d;
    }

    const input = document.body.innerText.split('\n').map((x) => {
        const xs = x.split(' ');

        return [xs[0], parseInt(xs[1], 10)];
    });

    console.log('Part 1', part1(input));
    console.log('Part 2', part2(input));
})();
