class User {
  email: string
  name: string
  private readonly city:string = "Jaipur"
  constructor(email: string,name: string){
    this.city="";
    this.email = email;
    this.name = name;
  }
}

const pragati= new User("pragati@gmail.com", "pragati");

class NewUser {
  protected _courseCounted= 1
  private _courseCount = 1
  readonly city:string = "Jaipur"
  constructor(
    public email: string,
    public name: string){
  }

  private deleteToken(){
    console.log("token deleted")
  }

  get getAppleEmail(): string {
    return `apple${this.email}`
  }

  get courseCount() : number{
    return this._courseCount
  }

  set courseCount(courseNum) {
    if(courseNum <= 1){
            throw new Error("course count should be more than 1")
        }
        this._courseCount= courseNum;
  }
}

class Subuser extends NewUser{
  isFamily: boolean = true;
  changeCourseCount(){
    this._courseCounted = 4
  }
}

const newpragati= new User("pragati@gmail.com", "pragati");
