//narrowing is providing or defining different tasks to do for different datatypes

function DetechType(val : number | string){
  if(typeof val==="string"){
    return val.toLowerCase();
  }
  return val+3;
}

function provideId(id: string | null){
  if(!id){
    console.log("please provide id");
    return
  }
  return id.toLowerCase();
}

function printAll(val: string| string[]| null){
  if(val){ //not null val
    //array
    if(typeof val==="object"){
      for(const v of val){
        console.log(v);
      }
    }else if(val==="string"){
      //strings
      console.log(val)
    }
  }
}