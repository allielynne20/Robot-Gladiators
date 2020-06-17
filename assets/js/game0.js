var startGame = function () {
    playerHealth = 100;
    playerAttack = 40;
    playerMoney = 10;
    for (var i = 0; i < enemyNamesArray.length; i++) {
        if (playerHealth > 0) {
            //let user know what round they are in 
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            console.log(
                "Welcome to Robot Gladiators! Round " + (i + 1)
            );
            //pick new enemy to fight based on the index number of the enemyNames array
            var pickedEnemyName = enemyNamesArray[i];
            //reset enemyHealth before starting new fight
            enemyHealth = 50;
            //use debugger to pause the script from running and check what's going on at that moment in the code
            //debugger;
            //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //play again
    //startGame(); //when placed here calling a function inside its own function call causes an infinite loop
}