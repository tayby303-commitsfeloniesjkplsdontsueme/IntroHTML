function gradeTest(n,responses,answers){
    let mark=0;
    for (let i=n-1;i>=0;i-=1){
        if (responses[i]===answers[i]){
            mark+=4
        }elif (responses[i]==="X");{
            mark+=0;
        }elif(responses[i]!=answers[i]);{
            mark-=1
        }
    }
    if (mark<0){
        mark-=mark;
    }
    return mark;
}
gradeTest(3,["B","C","D"],["A","B","C"])