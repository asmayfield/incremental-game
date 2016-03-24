var ice = 0;
var cursors = 0


function penguinClick(value){
    ice = ice + value;
    document.getElementById("ice").innerHTML = ice;
}

// TODO: Add a pick or something later on as an upgrade option
// function upgradePick(){
//     var upgradeCost = Math.floor(10*Math.pow(1.1, pickLevel));
//     if (ice >= pickLevel){
//         ice = ice - upgradeCost;
//         pickLevel = pickLevel + 1;
//         document.getElementById("ice").innerHTML = ice;
//         document.getElementById("pickLevel").innerHTML = pickLevel;
//     };
//     var nextCost = Math.floor(10 * Math.pow(1.1,cursors));
//     document.getElementById('pickUpgradeCost').innerHTML = nextCost;
// }


function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));        //works out the cost of this cursor
    if(ice >= cursorCost){                                          //checks that the player can afford the cursor
        cursors = cursors + 1;                                      //increases number of cursors
    	ice = ice - cursorCost;                                     //removes the ice spent
        document.getElementById('cursors').innerHTML = cursors;     //updates the number of cursors for the user
        document.getElementById('ice').innerHTML = ice;             //updates the number of ice for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));          //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;     //updates the cursor cost for the user
};



// This will run every 1000ms=1s
// AKA: The Game Loop
window.setInterval(function(){

    penguinClick(cursors);
    
}, 1000);
