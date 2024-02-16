let guestList: Array<string> = [
    'Ahmed',
    'Zack',
    'Mathew',
    'Jonathan',
    'Aby',
    'Mary'
  ]

  

  console.log(`I can invite only two people for dinner.`)


  while(guestList.length > 2)
  {
    let removeGuest = guestList.pop()
    console.log(`Sorry, ${removeGuest}, I can't invite you to dinner.`);
  }



  for(let guest of guestList) {
    console.log(`Hello, ${guest}, you are still invited to dinner!`)
  }
console.log(guestList)

guestList.pop()
guestList.pop()

console.log(`Guest list after dinner:`, guestList)