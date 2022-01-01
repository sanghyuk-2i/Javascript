// Map 객체
// 해쉬(Hash) 문제를 풀기에 유용한 것!

let data = new Map();

data.set("a", 1);
data.set("b", 5);
data.set("c", 3);
data.set("d", 7);
data.set("e", 2);

console.log(data.get("a"));
console.log(data.get("b"));

console.log(data.size);

console.log(data.has("a"));
console.log(data.has("z"));

console.log(data.delete("a"));
console.log(data.has("a"));

for (let [key, value] of data) {
    console.log(key, value);
}

// Set 객체
// 중복 요소 제거에 유용!

let check = new Set();

let lee = { name: "lee" };
let sang = { name: "sang" };
let hyuk = { name: "hyuk" };

check.add(lee);
check.add(sang);
check.add(hyuk);
check.add(hyuk);
check.add(sang);

console.log(check);

console.log(check.has(sang));

check.delete(lee);
console.log(check);

for (let user of check) {
    console.log(user.name);
}