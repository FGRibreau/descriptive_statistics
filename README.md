Descriptive Statistics [![Build Status](https://secure.travis-ci.org/FGRibreau/descriptive_statistics.png)](http://travis-ci.org/FGRibreau/descriptive_statistics) [![Gittip](http://badgr.co/gittip/fgribreau.png)](https://www.gittip.com/fgribreau/)
======================

Overview
--------

 This module adds methods to the array prototype to allow easy calculation of basic descriptive statistics. This is a fork of the original ruby version [descriptive_statistics](https://github.com/thirtysixthspan/descriptive_statistics) by Derrick Parkhurst.

Installation
------------

```bash
npm install descriptive-statistics
```

Examples
--------
```
> require('descriptive-statistics');
{}
> data = [2,6,9,3,5,1,8,3,6,9,2]
[ 2, 6, 9, 3, 5, 1, 8, 3, 6, 9, 2 ]
> data.number
11
> data.sum
54
> data.mean
4.909090909090909
> data.median
5
> data.variance
7.7190082644628095
> data.standard_deviation
2.778310325442932
> data.percentile(70)
6
```


License
-------
Copyright (c) 2012 Francois-Guillaume Ribreau (npm@fgribreau.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
