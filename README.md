
[![Build Status](https://s3.amazonaws.com/amishblog/sp-calc.png)](https://github.com/fortunetede/simplified-calculations)

# Simplified Calculations
Simplified Calculations is an npm package tool that performs simple calculations.

### Installation
```sh
$ npm i sp-calc --save
```

## Use Case for *getDistance*
##### *getDistance.`fromTwoPoint(origin, destination)`*
This function returns the distance between two places when the geometry location are provided
You can find an example of *`getDistance.fromTwoPoint(origin, destination)`* below
```sh
const spCalc = require('sp-calc')
const origin = { lat: 30.2705673, lng: -97.7413933 }
const destination = { lat: 10.2705673, lng: -97.7413933 }
const getDistance = spCalc.getDistance.fromTwoPoint(origin, destination)
console.log('distance between 2 point', getDistance)
```

## Use Case for *getRadius*
##### *getRadius.`provideCircumference(circumference)`*
This function returns the radius of a circle with the provision of circumference
You can find an example of *`getRadius.provideCircumference(circumference)`* below
```sh
const spCalc = require('sp-calc')
const circumference = 15
const getRadius = spCalc.getRadius.provideCircumference(circumference)
console.log(`this is the radius ${getRadius}`)
```
##### *getRadius.`provideDiameter(diameter)`*
This function returns the radius of a circle with the provision of diameter
You can find an example of *`getRadius.pprovideDiameter(diameter)`* below
```sh
const spCalc = require('sp-calc')
const diameter = 4
const getRadius = spCalc.getRadius.provideDiameter(diameter)
console.log(`Diameter radius ${getRadius}`)
```

License
---
```ISC```

