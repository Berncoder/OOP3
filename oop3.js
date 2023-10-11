//OOP3

const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}

const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

bicycle.bell();
door.bell();

function ringTheBell(thing) {
    console.log(thing.bell())
}
ringTheBell(bicycle);
ringTheBell(door);

//another example using concat() method on two strings
console.log("abc".concat("def"));

//using concat() method on two arrays
console.log(["abc"].concat(["def"]));

//using + operator on two arrays w one mmber
console.log(["abc"] + ["def"]);

