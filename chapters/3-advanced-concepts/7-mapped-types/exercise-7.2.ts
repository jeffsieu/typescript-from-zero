// EXERCISE 5.2: Create a type-safe event system using mapped types

// Define a set of events
interface Events {
  click: { x: number; y: number };
  focus: { id: string };
  input: { value: string };
}

// TODO: Create a mapped type 'EventHandlers' that transforms the Events interface
// into a set of event handler functions
// Example: { click: (event: { x: number; y: number }) => void, ... }

type EventHandlers = // Your implementation here

// TODO: Create a mapped type 'EventEmitters' that transforms the Events interface
// into a set of event emitter functions
// Example: { emitClick: (event: { x: number; y: number }) => void, ... }

type EventEmitters = // Your implementation here

// TODO: Implement a type-safe event emitter class using the mapped types above

class TypeSafeEventEmitter {
  private handlers: Partial<EventHandlers> = {};

  // Implement on method
  on<E extends keyof Events>(eventName: E, handler: EventHandlers[E]): void {
    // Your implementation here
  }

  // Implement emit method
  emit<E extends keyof Events>(eventName: E, event: Events[E]): void {
    // Your implementation here
  }

  // Implement typed emitter methods
  emitters: EventEmitters = // Your implementation here
}

// Test your implementation
const emitter = new TypeSafeEventEmitter();

emitter.on("click", (event) => {
  console.log(`Clicked at (${event.x}, ${event.y})`);
});

emitter.on("focus", (event) => {
  console.log(`Focused on element with id ${event.id}`);
});

emitter.on("input", (event) => {
  console.log(`Input value changed to ${event.value}`);
});

// These should work
emitter.emit("click", { x: 100, y: 200 });
emitter.emitters.emitFocus({ id: "test-id" });
emitter.emitters.emitInput({ value: "Hello, TypeScript!" });

// These should cause type errors:
// emitter.emit("click", { x: "100", y: 200 });
// emitter.emitters.emitFocus({ id: 123 });
// emitter.emitters.emitInput({ value: 42 });

// ignore the line below
export {};