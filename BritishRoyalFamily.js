//template 
class RoyalFamily {
  constructor(name, parents) {
    this.name = name;
    this.parents = parents;
  }
      
  childOf() {
    if(this.parents.length > 0) {
      return "My parents are " + this.parents.map(parent => parent.name).join(' & ')
    } else {
      return 'No parents!!!'
    }
  }
    
}
  

  //instance -> create an example from the blueprint
  const Prince = new RoyalFamily('Prince', []);
  const Queen = new RoyalFamily('Queen', []);
  const Tish = new RoyalFamily('Tish', []);
  const Lisa = new RoyalFamily('Lisa', []);
  const Johnny = new RoyalFamily('Johnny', [Prince, Queen]);
  const Timmy = new RoyalFamily('Timmy', [Tish, Johnny]);
  const Jaida = new RoyalFamily('Jaida', [Timmy, Lisa]);
  const Tom = new RoyalFamily('Tom', [Timmy, Lisa]);
  
  //  console.log(Prince.childOf())
  //  console.log(Queen.childOf())
  //  console.log(Tish.childOf())
  //  console.log(Lisa.childOf())
   console.log(Johnny.childOf())
   console.log(Timmy.childOf())
   console.log(Jaida.childOf())
   console.log(Tom.childOf())
  



   // Assignment
// Create a new directory in your local Git repository called familyTree. As a general rule, do not use spaces or special characters in directory or file names.

// Create objects to represents 3 generations of the British Royal Family. A person in the family tree should have the following properties:

// name of type String
// parents of type Array
// childOf of type Function
// The childOf property should return a string of the parent's names.

// Use a combination of objects arranged in arrays to represent different generations. Use the this keyword to create a childOf function that references the parents array of itself.

// Once constructed you should be able to traverse from an individual to their grand-parents. You should be able to call childOf on any person and that function should return a string i.e. 'Elizabeth Windsor & Philip Windsor'.

// To run your code execute node name_of_file.js

// Commit your code into Github and share the link with your coach for review.

// Assignment extension tasks
// Research the difference between Object.create({}) and Object.create(null).

// const person1 = {}
// const person2 = new Object()
// const person3 = Object.create({})

// https://replit.com/@LindaEng1/objects-and-functions#index.js


  // console.log(newMember4)
  
  
  // //object that we just created
  // console.log(newMember)
  // //name [] and .
  // console.log(newMember['childOf']())
  
  ////////////////////////////
  
  
  // function sample(){
  //   return 'hello';
  // }
  // //I have to invoke this function
  // console.log(sample());