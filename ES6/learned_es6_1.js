// Arrow Function

let a = () => {
    console.log("Arrow Function")
}

// Destructing Assignment

let blog = {
    owner: "hong",
    url: "honglogs.tistory.com",
    getPost() {
        console.log("ES6 문법 정리");
    }
}

let { owner, getPost } = blog;
// 단, 선언된 변수(blog)의 key값과 동일해야 한다.

let blogFunction = ({ owner, url, getPost }) => {
    console.log(owner);
    console.log(url);
    console.log(getPost());
}

// Template Literals

const id = "myId";
const url = `http://eddylog.tistory.com/login/${id}`

// ` -> '백틱'이라고 부른다
// 줄 바꿈도 '\n'없이 자유롭다.

let name = "이상혁";
let job = "student";

let user = { name, job }

console.log(user);

// Map

let numbers = [1, 2, 3, 4, 5, 6, 7, 8]

numbers.map((value, i) => {
    console.log(value, i);
});

// Module System

// util.js

export function times(x) {
    return x * x;
}

export function plusTwo(number) {
    return number + 2;
}
// app.js 

import { times, plusTwo } from './util.js'

console.log(times(2));
console.log(plusTwo(3));
// in util.js

export default function times(x) {
    return x * x;
}

// in app.js

import s from './util.js'
console.log(s(4));

// Problem One
let fruit_list = ['사과', '감', '감', '배', '포도', '포도', '딸기', '포도', '감', '수박', '딸기']

let count = 0;
fruit_list.map((value) => {
    if (value == '딸기') {
        count += 1;
    }
});

console.log(count);

// Problem Two 
function checkEmail(email) {
    if (email.indexOf('@') >= 0) {
        console.log("이메일이 맞습니다");
    } else {
        console.log("이메일이 아닙니다");
    }
}

// 이메일 정규표현식 활용하기
function checkEmail(email) {
    let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (regExp.test(email)) {
        console.log("이메일이 맞습니다");
    } else {
        console.log("이메일이 아닙니다");
    }
}

checkEmail('gunhee21@gmail.com');
checkEmail('gunhee21#gmail.com');