const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
    radius: r,
    circumference() {
        return 2 * this.radius * 3.14;
    },
    area() {
        return this.radius ** 2 * 3.14;
    }


};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
