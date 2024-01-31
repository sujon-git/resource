// Basic Types
let id: number = 5;
let company: string = 'media';
let isPublished: boolean = true;
let x: any = 'hello';

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'hello'];

// Tuple
let person: [number, string, boolean] = [1, 'brad', true];
// Tuple Array
let employee: [number, string][];
employee = [
  [1, 'brad'],
  [2, 'john'],
  [3, 'jill'],
];

// Union
let pid: string | number;
pid = 22;
pid = 'abc';

// Enum
enum direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Object
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'John',
};

type User = {
  id: number;
  name: string;
};
const user2: User = {
  id: 1,
  name: 'John',
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// Interface
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}
const user3: UserInterface = {
  id: 1,
  name: 'John',
};

// Interface Function
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
// -- private property only accessable in own class
// -- protected property accessable in own class and any class extended from this class
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, 'brad Traversy');
const mike = new Person(2, 'mike jordan');

// Extend or inherit class or subclass
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, 'shawn', 'developer');

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['brad', 'john', 'jill']);

console.log(emp.register());
