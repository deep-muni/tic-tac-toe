export const checkTied = (grid) => {

    let count = 0;

    grid.map(square => {
        if (square.disabled) {
            count++;
        }
    })

    return count === 9;
}