/*
Name: Armando Villa
Date: 10/30/2024
Description: ***

*/
let tableArray = [];

function submitNumbers(min_col, max_col, min_row, max_row)
{
    // Array creation and variables
    tableArray[0] = 0;
    var array_col_size = max_col - min_col;
    var array_row_size = max_row - min_row;

    // Creating the starter columns and rows
    for(var i=0; i < array_col_size; i++)
    {
        tableArray[1+i] = i + min_col;
        tableArray[0][1+i] = i + min_row;
    }
    console.log(tableArray);
    /*
    let currentCol, currentRow;
    for(currentRow=1; currentRow < array_row_size; currentRow++)
    {
        for(currentCol=1; currentCol < array_col_size; currentCol++)
        {
            tableArray[currentCol, currentRow] = tableArray[currentCol, 0] * tableArray[0, currentRow];
        }
    }
    */

    
}

