/* eslint-disable no-undef */
import { capitalize, downTo } from './lib/helpers';
import { CountdownSong } from './lib/bottles';
// const console = require('console');

/* test usage --util*/
console.log(capitalize('hello bottles'));
console.log(downTo(42, -1));
console.log(downTo(-42, 42)); // => empty array

/* test usage --class*/

(new CountdownSong()).song();
//CASE0: create without template => ERROR: lyrics undefined
(new CountdownSong(null, -42, 42)).song();
// CASE1: odd max, min number => ERROR: x
