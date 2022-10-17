// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat() {
    cats.push("Ralph");
} 

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    const newCats = [...cats,"Broom"];
return newCats;
}

function prependCat() {
    const afterstupidCats = ["Arnold", ...cats];
return afterstupidCats;
}

function removeLastCat() {
   const sliceStupidCats = cats.slice(0,-1);
return sliceStupidCats;
}

function removeFirstCat() {
    const plugAnnoyingCat = cats.slice(1);
return plugAnnoyingCat;
}