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
  readonly city:string = "Jaipur"
  constructor(
    public email: string,
    public name: string){
  }
}

const newpragati= new User("pragati@gmail.com", "pragati");
