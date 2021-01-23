export const checkWinner = (grid) => {
    for (let i = 0; i <= 6; i = i + 3) {
        if (grid[i].value === 'X' && grid[i + 1].value === 'X' && grid[i + 2].value === 'X') {
            return 'Player 1';
        } else if (grid[i].value === 'O' && grid[i + 1].value === 'O' && grid[i + 2].value === 'O') {
            return 'Player 2';
        }
    }

    for (let i = 0; i <= 2; i++) {
        if (grid[i].value === 'X' && grid[i + 3].value === 'X' && grid[i + 6].value === 'X') {
            return 'Player 1';
        } else if (grid[i].value === 'O' && grid[i + 3].value === 'O' && grid[i + 6].value === 'O') {
            return 'Player 2';
        }
    }

    let i = 0;
    if (grid[i].value === 'X' && grid[i + 4].value === 'X' && grid[i + 8].value === 'X') {
        return 'Player 1';
    } else if (grid[i].value === 'O' && grid[i + 4].value === 'O' && grid[i + 8].value === 'O') {
        return 'Player 2';
    }

    i = 2;
    if (grid[i].value === 'X' && grid[i + 2].value === 'X' && grid[i + 4].value === 'X') {
        return 'Player 1';
    } else if (grid[i].value === 'O' && grid[i + 2].value === 'O' && grid[i + 4].value === 'O') {
        return 'Player 2';
    }

    return '';
}