function identityOne(val: number| boolean): number| boolean{
  return val;
}

function identityTwo(val: any): any{
  return val;
}

function identityThree<Type>(val: Type): Type{
  return val;
}

function identityFour<T> (val: T): T{
  return val;
}

interface Bottle{
  type: number,
  name: string,
}
const bottle: Bottle={type: 1, name: "pragati"};
identityFour<Bottle>(bottle)

//generic used in arrays and arrow functions

function login<Type> (val: Array<Type>): Type {
  return val[3];
}

function getMoreProducts <T> (products: T[]): T{
  return products[4];
}

const getProducts = <T>(val: T[]): T =>{
  return val[5];
}

//class types in generics

class Sellable <T> {
  public cart: T[]= []

  addToCart(product : T) {
    this.cart.push(product)
  }
}