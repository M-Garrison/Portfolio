// user objects:
const user = {
    tool: 'teeth',  
    bank: 0,
    rate: 1
}
// tool array:
const toolBox = ['Teeth','Rusty-Scissors','Push Mower','Electric Mower','Starving Students']
// rate array:
const rateArray = [1, 5, 50, 100, 250]
// cost array:
const costArray = [0, 5, 25, 250, 500]

// cut grass function
const cutGrass = () => {
// get hourly rate
let rate = user.rate;
// add hourly rate to current bank
user.bank = user.bank + user.rate;
// update bank account in HTML to reflect
$('#bank').text('Bank Account: $'+user.bank);
// check if bank account is equal to 100 && current tool === students
// run alert saying YOU WIN!
if (user.bank >= 1000 && user.tool === "Starving Students"){
    alert("You Won the Game!");
    }
}

const buyTool = (index, idName) => {
// get cost of tool
let cost = costArray[index]
// If cost of scissors < bank then:
    if (cost<=user.bank){
    // subtract cost of tool from current bank
    user.bank = user.bank-cost; 
    // update user object with new tool
    user.tool = toolBox[index];
    // get rate of scissors
    let newRate = rateArray[index];
    // update user object with new rate
    user.rate = newRate;
    // update bank and hourly rate stats
    $('#bank').text('Bank Account: $'+user.bank);
    $('#rate').text('Daily Rate: $'+user.rate);
    $('#tool').text('Current Tool: '+user.tool);
    // remove tool div
    $('#'+idName).remove();
// else
    // run alert that you need more $
    } else { 
         alert("You don't have enough $ to buy! Keep mowin' them lawns!")  
    }
}

//  buy scissors function
const buyScissors = () => {
    buyTool(1, 'scissorsDiv');
}
// // original function moved into buyTool function   
// // get cost of scissors
// let cost = costArray[1]
// // If cost of scissors < bank then:
//     if (cost<=user.bank){
//     // subtract cost of tool from current bank
//     user.bank = user.bank-cost; 
//     // update user object with new tool
//     user.tool = toolBox[1];
//     // get rate of scissors
//     let newRate = rateArray[1];
//     // update user object with new rate
//     user.rate = newRate;
//     // update bank and hourly rate stats
//     $('#bank').text('Bank Account: $'+user.bank);
//     $('#rate').text('Daily Rate: $'+user.rate);
//     // remove scissors button
//     $('#scissors').remove();
// // else
//     // run alert that you need more $
//     } else { 
//          alert("You don't have enough $ to buy! Keep mowin' them lawns!")  
//     }
// }

// buy p-mower function
const buyPMower = () => {
    buyTool(2, 'p-mowerDiv')
}
// get cost of push mower
// If cost of push mower < bank then:
    // subtract cost of tool from current bank
    // update user object with new tool
    // get rate of scissors
    // update user object with new rate
    // update bank and hourly rate stats
    // remove push mower button
// else
    // run alert that you need more $

// buy e-mower function
const buyEMower = () => {
    buyTool(3, 'e-mowerDiv')
}
// get cost of electric mower
// If cost of electric mower < bank then:
    // subtract cost of tool from current bank
    // update user object with new tool
    // get rate of scissors
    // update user object with new rate
    // update bank and hourly rate stats
    // remove electric mower button
// else
    // run alert that you need more $

// buy students function
const buyStudents = () => {
    buyTool(4, 'studentsDiv')
}
// get cost of studnets
// If cost of students < bank then:
    // subtract cost of tool from current bank
    // update user object with new tool
    // get rate of scissors
    // update user object with new rate
    // update bank and hourly rate stats
    // remove students button
// else
    // run alert that you need more $

$(() => {

    $('#cut-grass').on('click', cutGrass);
    $('#scissors').on('click', buyScissors);
    $('#p-mower').on('click', buyPMower);
    $('#e-mower').on('click', buyEMower);
    $('#students').on('click', buyStudents);

  });


