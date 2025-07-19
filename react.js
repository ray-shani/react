export default class user {
  constructor(name,age) {
    this.name=name
    this.age=age  
  }
}

export function printUser(user){
  console.log(`User's name  is ${user.age}`)
}

export function printAge(user){
  console.log(`User is ${user.age} years old`);
}