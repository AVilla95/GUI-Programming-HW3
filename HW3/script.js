/*
Name: Armando Villa
Date: 10/30/2024
Description: ***

*/

document.getElementById("submitButton").addEventListener("click", function()
{
    event.preventDefault();
    var p1 = document.getElementById("min_col");
    var p2 = document.getElementById("max_col");
    var p3 = document.getElementById("min_row");
    var p4 = document.getElementById("max_row");
    var finalArray = submitNumbers(parseInt(p1.value), parseInt(p2.value), parseInt(p3.value), parseInt(p4.value));
    var finalTable = arrayToTable(finalArray);
    document.getElementById("myTable").innerHTML = '';
    document.getElementById("myTable").append(finalTable);
});


function submitNumbers(min_col, max_col, min_row, max_row)
{
    min_amount = -50;
    max_amount = 50;

    // Empty inputs
    if(isNan(min_col) || isNan(max_col) || isNan(min_row) || isNan(max_row))
    {
        return null;
    }
    // Minimum size is greater than maximum
    if(min_col > max_col || min_row > max_row)
    {
        return null;
    }
    // Check if they're numbers
    if(!isInt(min_col) || !isInt(max_col) || !isInt(min_row) || !isInt(max_row))
    {
        return null;
    }
    // Minumum or Maximum values exceeded
    if(min_col < min_amount || max_col > max_amount || min_row < min_amount || max_row > max_amount)
    {
        return null;
    }

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

    //console.log(tableArray);

    return tableArray;
}


function arrayToTable(TwoDArray)
{
    let table = document.createElement('table');

    for(let row of TwoDArray)
    {
        let tableRow = table.insertRow();
        for(let cell of row)
        {
            let tableCell = tableRow.insertCell();
            tableCell.textContent = cell;
        }
    }
    return table;
}

function isInt(num)
{
    return Number.isInteger(num);
}

function isNan(num)
{
    return Number.isNaN(num);
}