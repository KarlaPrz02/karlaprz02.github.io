const grid = document.getElementById('crossword-grid');

const pattern = [
  [0,0,0,1,0,0,0,1,0,0],
  [0,1,1,0,0,0,1,0,0,1],
  [0,0,0,0,1,0,0,0,0,0],
  [0,0,1,0,0,1,0,1,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,0,1,0,1,0],
  [0,0,0,1,0,0,0,1,0,0],
  [1,0,0,0,0,1,0,0,0,1],
  [0,0,1,0,0,0,1,0,0,0],
  [0,0,0,0,1,0,0,0,0,0]
];

const clueNumbers = {
  '0-0': 1, '0-1': 2, '0-2': 3, '0-4': 4, '0-5': 5, '0-6': 6, '0-8': 7, '0-9': 8,
  '1-0': 9, '1-3': 10, '1-4': 11, '1-5': 12, '1-7': 13,
  '2-0': 14, '2-1': 15, '2-2': 16, '2-3': 17, '2-5': 18, '2-6': 19, '2-7': 20, '2-8': 21, '2-9': 22,
  '3-0': 23, '3-1': 24, '3-3': 25, '3-4': 26, '3-6': 27, '3-8': 28, '3-9': 29,
  '4-0': 30, '4-1': 31, '4-2': 32, '4-3': 33, '4-4': 34, '4-5': 35, '4-6': 36, '4-7': 37, '4-8': 38, '4-9': 39,
  '5-0': 40, '5-2': 41, '5-3': 42, '5-5': 43, '5-7': 44, '5-9': 45,
  '6-0': 46, '6-1': 47, '6-2': 48, '6-4': 49, '6-5': 50, '6-6': 51, '6-8': 52, '6-9': 53,
  '7-1': 54, '7-2': 55, '7-3': 56, '7-4': 57, '7-6': 58, '7-7': 59, '7-8': 60,
  '8-0': 61, '8-1': 62, '8-3': 63, '8-4': 64, '8-5': 65, '8-7': 66, '8-8': 67, '8-9': 68,
  '9-0': 69, '9-1': 70, '9-2': 71, '9-3': 72, '9-5': 73, '9-6': 74, '9-7': 75, '9-8': 76, '9-9': 77
};

for (let r = 0; r < 10; r++) {
  for (let c = 0; c < 10; c++) {
    const cell = document.createElement('div');
    cell.className = 'cell' + (pattern[r][c] === 1 ? ' block' : '');

    if (pattern[r][c] === 0) {
      const input = document.createElement('input');
      input.setAttribute('maxlength', '1');
      input.setAttribute('spellcheck', 'false');
      input.addEventListener('input', (e) => {
        e.target.value = e.target.value.toUpperCase().replace(/[^A-ZÑÁÉÍÓÚÜ]/g, '');
      });
      cell.appendChild(input);

      const key = `${r}-${c}`;
      if (clueNumbers[key]) {
        const number = document.createElement('span');
        number.className = 'number';
        number.textContent = clueNumbers[key];
        cell.appendChild(number);
      }
    }

    grid.appendChild(cell);
  }
}
