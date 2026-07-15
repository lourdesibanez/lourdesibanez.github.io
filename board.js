// Split-flap style role board (solo se usa en index.html)
(function(){
  const roles = ["BACKEND DEVELOPER", "ESTUDIANTE"];
  const board = document.getElementById('roleBoard');
  if(!board) return;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ/ ·";
  let roleIndex = 0;

  function buildCells(text){
    board.innerHTML = "";
    text.split("").forEach(ch => {
      const cell = document.createElement('span');
      cell.className = 'board-cell';
      cell.textContent = ch === " " ? "\u00A0" : ch;
      board.appendChild(cell);
    });
    return Array.from(board.children);
  }

  function flapTo(cells, target){
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.split("").forEach((finalChar, i) => {
      const cell = cells[i];
      if(!cell) return;
      if(prefersReduced){ cell.textContent = finalChar === " " ? "\u00A0" : finalChar; return; }
      let ticks = 6 + Math.floor(Math.random()*5);
      let count = 0;
      const iv = setInterval(() => {
        if(count >= ticks){
          cell.textContent = finalChar === " " ? "\u00A0" : finalChar;
          clearInterval(iv);
        } else {
          cell.textContent = chars[Math.floor(Math.random()*chars.length)];
          count++;
        }
      }, 35);
    });
  }

  function cycleBoard(){
    const current = roles[roleIndex % roles.length];
    const longest = roles.reduce((a,b)=> a.length>b.length?a:b).length;
    const padded = current.padEnd(longest, " ");
    let cells = board.children.length === padded.length ? Array.from(board.children) : buildCells(padded);
    flapTo(cells, padded);
    roleIndex++;
  }

  cycleBoard();
  setInterval(cycleBoard, 2800);
})();
