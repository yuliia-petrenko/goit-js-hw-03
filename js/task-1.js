function slugify(title) {
    let total = title.toLowerCase().split(" ").join("-");
    return total;
}
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));