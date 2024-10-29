/*
Name: Armando Villa
Date: 10/30/2024
Description: ***

*/

document.getElementById("submitButton").addEventListener("click", function()
{
    var p1 = document.getElementById("min_col");
    var p2 = document.getElementById("max_col");
    var p3 = document.getElementById("min_row");
    var p4 = document.getElementById("max_row");
    submitNumbers(parseInt(p1.value), parseInt(p2.value), parseInt(p3.value), parseInt(p4.value));
});

/*
function submitNumbers(p5, p6, p7, p8)
{
    var result = p5 + p6 + p7 + p8;
    console.log(result);
    return result;
}
*/

function submitNumbers(min_col, max_col, min_row, max_row)
{
    // Array creation and variables
    let tableArray = [];
    tableArray[0] = [];
    tableArray[0][0] = 'X';
    var array_col_size = max_col - min_col + 1;
    var array_row_size = max_row - min_row + 1;

    // Creating the starter columns and rows
    for(var i=0; i < array_col_size; i++)
    {
        tableArray[i+1] = [];
        tableArray[i+1][0] = i + min_col;
    }
    for(var i=0; i < array_row_size; i++)
    {
        tableArray[0][i+1] = i + min_row;
    }

    for(var i=1; i <= array_col_size; i++)
    {
        for(var j=1; j <= array_row_size; j++)
        {
            tableArray[i][j] = tableArray[i][0] * tableArray[0][j];
        }
    }

    console.log(tableArray);

}


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