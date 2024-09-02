// Exercise 5.1: Annotate with literal types

// Alignment is either "start", "center", or "end"
function align(alignment: any) {
  // Some code
}

const config = {
  dangerousSetting: false,
} as const;

config.dangerousSetting = true;

// Should work
align("start");
align("center");
align("end");

// Should not work
align("middle");
align("left");
align(1);
align();

// ignore the line below
export {};
