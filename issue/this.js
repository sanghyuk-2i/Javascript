console.log(this);

function simpleFunc() {
    console.log(this);
}
simpleFunc(); // same as "window.simpleFunc()"

class Counter {
    count = 0;
    increase = function () { // if using arrow function, it automaticlly binding.
        console.log(this);
    };
}

const counter = new Counter();
counter.increase();
const caller = counter.increase;
// const caller = counter.increase.bind(counter);
caller(); // undefined

class Bob { }
const bob = new Bob();
bob.run = counter.increase;
bob.run();