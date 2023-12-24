// code your solution here
//function superbowlWin(){
  //  return result.find(record=> record.result==="W")
//}

function superbowlWin(record){
    const result = record.find( record => record.result === "W" );
    return result? result.year : undefined;
 }
