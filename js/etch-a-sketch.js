const container = document.getElementById("container");


const width = window.innerWidth;

function makeRows(rows, cols) 
{
    var cellSizeNum = 960 / rows; //creates size of cell
    var cellSizeStr = cellSizeNum + "px"; // cell size in string-pixel form

    container.style.setProperty('--cell-size', cellSizeStr); 
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) 
    {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

makeRows(46, 46);