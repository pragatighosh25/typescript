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