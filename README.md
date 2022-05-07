# @fakepng/string-to-time

![npm](https://img.shields.io/npm/v/@fakepng/string-to-time)
![license](https://img.shields.io/npm/l/@fakepng/string-to-time)
![minified size](https://img.shields.io/bundlephobia/min/@fakepng/string-to-time)

Convert a user friendly string to time. Like: 1Y, 1M, 1W, 1D, 1H, 1M, 1S.

# Installation

```bash
$ npm install @fakepng/string-to-time
```

# Usage

## Node

> String must be in descending order.

```js
const stringToTime = require("@fakepng/string-to-time");

console.log(stringToTime("1Y"));
// { years: 1, months: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }

console.log(stringToTime("1Y2M3W4D5h6m7s"));
// { years: 1, months: 2, weeks: 3, days: 4, hours: 5, minutes: 6, seconds: 7 }

console.log(stringToTime("1Y2M3W4D5h6m7s").days);
// 4

console.log(stringToTime("8D2h").hours);
// 2

console.log(stringToTime(""));
// { years: 0, months: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }
```

# License

MIT License

Copyright (c) 2022 Fakepng

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
