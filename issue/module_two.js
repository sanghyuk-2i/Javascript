// <script type="module"></script>
import add, { print as printMessage } from './module_one.js'; // default -> without bracket or else need bracket!
// import * as calculator from './module_one.js'; => without default in every function

console.log(add(1, 3));
printMessage();
