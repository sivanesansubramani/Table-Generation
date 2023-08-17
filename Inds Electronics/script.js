function generateTable() {
    const inputNumber = parseInt(document.getElementById("inputNumber").value);
    const tableContainer = document.getElementById("tableContainer");

    //if condition used to check that given number is not 0
    if (isNaN(inputNumber)) {
        tableContainer.innerHTML = "Please enter a valid number.";
        return;
    }

    let tableHTML = "<table><tr><th></th>";
    let sum = 0;

    //For loop for iterating a heading of table
    for (let q = 1; q < 2; q++)
     {
        for (let i = 1; i <= inputNumber; i++) {
            tableHTML += `<th>${i}</th>`;
            
    
        }
     
    
        
        tableHTML += `<th>Sum</th>`;
        tableHTML += `<th>Average</th>`;
    
    }
      
    //this for loop is used to sum and average of each column
    tableHTML += "</tr>";

    for (let i = 1; i <= inputNumber; i++) 
    {
        tableHTML += `<tr><th>${i}</th>`;
        let rowSum = 0;
        
        for (let j = 1; j <= inputNumber; j++) 
        {
            const result = i * j;
            rowSum += result;
            tableHTML += `<td>${result}</td>`;
            
        }
           tableHTML += `<td "${inputNumber}">${ rowSum }</td>`;
            const average =  rowSum  / inputNumber;
            tableHTML += `<td "${inputNumber}">${average}</td>`;
            sum += rowSum;
        
    }
    
    const taverage = sum / inputNumber;

    tableContainer.innerHTML = tableHTML;


    tableHTML += `</tr>`;
    tableHTML += "</table>";
}