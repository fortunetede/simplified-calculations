# Simplified Calculations
Simplified Calculations is an npm package tool that performs simple calculations.

### Installation
```sh
$ npm i sp-calc --save
```

## Use Case

##### *getDistance(origin, destination)*
This function returns the distance between two places when the geometry location are provided
You can find an example of *getDistance()* below

```sh
const spCalc = require('sp-calc')

const origin = { lat: 30.2705673, lng: -97.7413933 }
const destination = { lat: 10.2705673, lng: -97.7413933 }

const getDistance = spCalc.getDistance(origin, destination)
console.log('distance between 2 place', getDistance)
```

License
---
MIT

