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

//in usecase

interface User{
  name: string,
  email: string
}

interface Admin{
  name: string,
  email: string,
  isAdmin: boolean
}

function isAdminAccount(account: User| Admin){
  if("isAdmin" in account){
    //seeing if isAdmin property is present in account, if it is present it means account is of admin type
    return account.isAdmin;
  }
  return false
}