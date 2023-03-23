console.log('Nested-Loop with Start Pattarn')

function showPattern(totalRowsPatternCount){
    for(let curRow=1; curRow<=totalRowsPatternCount;curRow++){
        let patternDesign='';
        for(let i=0;i<curRow;i++){
            patternDesign+='*'
        }
        console.log(patternDesign);
    }

}