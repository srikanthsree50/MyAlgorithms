function SpiralMatrix(n){
    const results = [];

    for(let i=0;i<n;i++){
        results.push([]);
    }

    let counter = 1;
    let startRow = 0;
    let endRow = n - 1;
    let startColumn = 0;
    let endColumn = n - 1;

    
    while(startColumn <= endColumn && startRow <= endRow){
        //TOP ROW
        for(let i = startColumn;i<=endColumn;i++){
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;
        
        //RIGHT COLUMN
        for(let i = startRow;i<=endRow;i++){
            results[i][endColumn] = counter;
            counter++;
        }
           endColumn--;

        //BOTTOM ROW
        for(let i = endColumn;i>=startColumn;i--){
            results[endRow][i] = counter;
            counter++;
        }
endRow--;

        //Start COLUMN
        for(let i = endRow;i>=startRow;i--){
            results[i][startColumn] = counter;
            counter++;
        }
startColumn++;
    }

    return results;
}

console.log(SpiralMatrix(2));