https://codesandbox.io/


### ES2019
- spread
``` js
Math.max(...arr1, 5,  ...arr2, 10)
```

- rest
``` js
function max(a, b, ...numbers) {
  // numbers - array
}
```


- destructuring
``` js
const {role = "user", name: { first: firstName, last: lastName }} = person
const { permissions: {role = 'user'} = {}} = person;

function connect({
    host = 'localhost',
    port = 12345,
    user = 'guest'
  } = {}) {}
const { duck, ...otherAnimals } = dict

Object.entries(dict);
// [[‘duck’, ‘quack’], [‘mouse’, ‘squeak’]]
([, value]) => value === ‘squeak’
([key]) => key
```

- template literals
``` js
`Hello ${ 2 + 2 }, ${Date.now()}, ${name}`
```

- objects
``` js
const prefix = '_blah_';
const data = {
  [prefix + 'name']: 'Bob',
  [prefix + 'age']: 23
}

Object.assign({}, defaults, opts);
const result = { 
  ...defaults, 
  ...opts, 
  port,
  connect() {}
};
```

- prototype
``` js
function Animal(name, voice) {
    this.name = "dog";
    this.voice = "woof";
  }

Animal.prototype.say = function() {
  console.log(this.name, "goes", this.voice);
};

const dog = new Animal("Dog", "woof");
const cat = new Animal("Cat", "meow");

Object.create(null); // without Object.prototype
```

- class
``` js
// class
class Animal {
  constructor(name, voice) {
    this.name = name;
    this.voice = voice;
  }

  say() {
    console.log(this.name, "goes", this.voice);
  }
}

// duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null
class Bird extends Animal {
  constructor(name, voice, canFly) {
    super(name, voice);
    super.say()
    this.say()
    this.canFly = canFly;
  }

  say() {
    console.log('Birds don\'t like to talk')
  }
}

const duck = new Bird("Duck", "quack", true);
duck.say();
```

- stage3
``` js
class Counter {
  count = 1;

  inc = () => {
    this.count += Counter.incStep
    console.log(this.count)
  }

  static incStep = 2;

  static incrementAll = function(arr) {
    arr.forEach((c) => c.inc())
  }
}
```

- modules
``` js
export { add, subtract, multiply, divide }
export default Graph

import Graph, {add, subtract as s} from './mymath'
import * as calc from './mymath'

import './side'
```

- todo

basic react (only react), state, props, function components, controlled components, form, search, filter, stage3 syntax (for state, binding this, variables from class), state function, immutable state arrays, global state and controlled components state 

- star-db

children, render function, hoc, composition, context, api, async arrow, provider, consumer
```jsx
import React from 'react';
const { 
  Provider : SwapiServiceProvider,
  Consumer : SwapiServiceConsumer
} =  React.createContext();
export {
  SwapiServiceProvider,
  SwapiServiceConsumer
}

<SwapiServiceProvider value={this.swapiService} >
  <div className="stardb-app">
    <Header />
    <PersonDetails itemId={11} />
    <PlanetDetails itemId={5} />
    <StarshipDetails itemId={9} />
    <PersonList />
    <StarshipList />
    <PlanetList />
  </div>
</SwapiServiceProvider>

const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      { ({getPerson, getPersonImage}) => {
        return (
          <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage} >
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
          </ItemDetails>)
      }}
    </SwapiServiceConsumer>
  );
};
```