$(document).ready(function () {

    var friend = ['Mark', 'Lance', 'Greg', 'Jeff', 'Steve'];
    var weapon = ['knife', 'razor', 'ninja star', 'lightsaber', 'shiv', 'bazooka', 'pistol', 'rifle', 'shotgun', 'machine gun', 'bow and arrow', 'thumbtack', 'rope', 'poison', 'darts', 'brass knuckles', 'taser', 'bear spray', 'nuclear bomb', 'wild boar'];
    var location = ['pantry', 'kitchen', 'den', 'living room', 'bedroom', 'bathroom', 'theatre', 'Florida room', 'dining room', 'library'];

//places 100 accusation headers
    for (var i = 0; i < 100; i++) {
        //creates a heading with accusation "i" and appends to div in body. i+1 so accusation text doesn't start at "Accusation 0"
        var heading = $("<h3></h3>").text("Accusation " + (i + 1));
        $('#mainDiv').append(heading);

        //run accusationAlert function when head i is clicked
        $(heading).click(accusationAlert(i));
    }

//Function factory that returns alert from inner function. Prevents alert from running when page opens
function accusationAlert(i) {
    //returns alert, can access i value in outer function to calculate f, l, and w for each array
    return function() {
        var f = i % friend.length;
        var l = i % location.length;
        var w = i % weapon.length;

        return alert("I accuse " + friend[f] + " with the " + weapon[w] + " in the " + location[l] + "!");
    }
}
});