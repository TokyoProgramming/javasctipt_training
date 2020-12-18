// MAPS = key-value pairs - can use any type as a key or value

const map1 = new Map();

// set keys
const key1 = 'some string',
  key2 = {},
  key3 = function () {};

// set map values by key

map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

console.log(map1.size);

// Iterating Maps

// Loop using for ...of to get keys and values
for (let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}
