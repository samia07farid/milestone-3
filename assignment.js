// feetToMile begins

function feetToMile(feet){
    if(feet > 0){
        var mile = feet/5280;
    }
    else{
        console.log("Distance cannot be negative");
    }
return mile;
}







// woodCalculator begins

function woodCalculator(chair, table, bed){
    var chairNumber = chair * 12;
    var tableNumber = table * 16;
    var bedNumber = bed * 25;
    var totalWoodNeeded = chairNumber + tableNumber + bedNumber;
    return totalWoodNeeded
}







// brickCalculator begins

function brickCalculator (floor){
    var feetPerFloor1 = 15 * 1000;
    if(floor >= 1 && floor <= 10 ){
        var totalBrickCount = feetPerFloor1 * floor;
    }

    var firstTotalFloor10 = 15000*10;
    var feetPerFloor2 =  (12 * 1000);
    if(floor >= 11 && floor <= 20){   
        var totalBrickCount = feetPerFloor2 * (floor -10) + firstTotalFloor10; 
    }

    var secondTotalFloor10 = 12000 * 10;
    var feetPerFloor3 =  10 * 1000;
    if(floor >= 21 && floor <= 30){
        var totalBrickCount = feetPerFloor3 * (floor-20) + secondTotalFloor10 + firstTotalFloor10;
    }
    if(floor > 30){
        console.log('No more than 30 floors')
    }
    return totalBrickCount;   
}







// tinyFriend begins

function tinyFriend(friendName){
    var strArray = friendName[0].split(' ');
    var sortedStrArray = strArray.sort(
        (friendNameA, friendNameB) => {
            return friendNameA.length - friendNameB.length;
        }
    );
    return sortedStrArray[0];
}
var friendName = ['Aklima River Ohniar Rain Myarr Tulip'];

  













