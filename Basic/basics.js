// Basic 
let num = 100
console.log(num)

let a = 1
let b = 2
let c = a + b
console.log(c)
console.log(a + b)

let first = 'eddy'
let last = 'lee'
console.log(first + last)
console.log(first + ' ' + last)

// let vs const 
let num = 100
const num2 = 1000

num = 200
num2 = 2000          // Error!

// Array(List)
let a_list = [1, 2, 3, 4, 'eddy', 6, 'lee']
console.log(a_list[4])

a_list.push('chrome')
console.log(a_list)

a_list.length

// Dictonary 
let a_dict = { 'name': 'eddy', 'age': 25 }
console.log(a_dict['name'])

a_dict['height'] = 200

// List & Dictonary
let names = [{ 'name': 'eddy', 'age': 30 }, { 'name': 'dan', 'age': 24 }]

console.log(names[1]['age'])

// About split() and join()
let email = "eddylee@gmail.com"
console.log(email.split('@'))
console.log(email.split('@')[1])

let txt = "서울시-마포구-망원동"
let names = txt.split("-")
console.log(names)
console.log(names.join(">"))

// Function
function funcName() {
    console.log("함수")
}

funcName()

function funcNum(num1, num2) {
    console.log(num1 + num2)
}

funcNum(10, 20)

function minus(num1, num2) {
    return num1 - num2
}

let result = minus(100, 10)
console.log(result)

let a = function () {
    console.log("리터럴 함수 방식")
}

a()

// Conditional Statement
function is_adult(age) {
    if (age > 20) {
        console.log("어른")
    } else if (age > 10) {
        console.log("청소년")
    } else {
        console.log("어린이")
    }
}

is_adult(25)
is_adult(7)

function is_adult(age, sex) {
    if (age > 65 || age < 10) {
        console.log("탑승하실 수 없습니다")
    } else if (age > 20 && sex == '여') {
        console.log("성인 여성")
    } else if (age > 20 && sex == '남') {
        console.log("성인 남성")
    } else {
        console.log("청소년이에요")
    }
}

// Loop Statement 
for (let i = 0; i < 10; i++) {
    console.log(i)
}

let people = ['철수', '영희', '민수', '형준', '기남', '동희']

for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}

// Problem One
function get_sum(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

let result = get_sum(10);
console.log(result);

// Problem Two
let fruit_list = ['사과', '감', '감', '배', '포도', '포도', '딸기', '포도', '감', '수박', '딸기']

let count = 0;
for (let i = 0; i < fruit_list.length; i++) {
    if (fruit_list[i] == '딸기') {
        count += 1;
    }
}

console.log(count);

// Problem Three
for (let i = 0; i < mise_list.length; i++) {
    let mise = mise_list[i];
    if (mise["IDEX_MVL"] < 40) {
        let gu_name = mise["MSRSTE_NM"];
        let gu_mise = mise["IDEX_MVL"];
        console.log("40보다 작은 구: " + gu_name + ", " + gu_mise);
    }
}

