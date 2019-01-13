import { IRegister } from 'src/Models/IRegister';

/* tslint:disable:object-literal-sort-keys */

export const registerSource: IRegister[] = [
    {
        id: 'zero',
        name: 'Zero',
        numbers: '$0',
        letterNumbers: '$zero',
        description: 'Constant zero value',
        preserved: 'n/a',
        notes: 'This register always holds a value of zero; attempting to assign other values to it will fail.'
    },
    {
        id: 'at',
        name: 'Assembler Temporary',
        numbers: '$1',
        letterNumbers: '$at',
        description: 'Reserved for usage by the assembler',
        preserved: 'n/a',
        notes: 'This register is reserved for use by the assembler (e.g. in expanding pseudo instructions). It should not generally by used.'
    },
    {
        id: 'values',
        name: '(Return) Values',
        numbers: '$2 - $3',
        letterNumbers: '$v0 - $v1',
        description: 'Values returned from syscalls or function calls',
        preserved: 'n/a'
    },
    {
        id: 'arguments',
        name: 'Arguments',
        numbers: '$4 - $7',
        letterNumbers: '$a0 - $a3',
        description: 'Arguments for syscalls or function calls',
        preserved: 'yes'
    },
    {
        id: 'temporaries-low',
        name: 'Temporaries',
        numbers: '$8 - $15',
        letterNumbers: '$t0 - $t7',
        description: 'General use registers whose values will not be preserved across function calls',
        preserved: 'no',
        notes: 'These registers are not saved across function calls. If you call a function, you can not assume they will have the same values once the function call returns. If you are writing a function, you can overwrite the values in any of these registers.'
    },
    {
        id: 'saves',
        name: 'Saves',
        numbers: '$16 - $23',
        letterNumbers: '$s0 - $s7',
        description: 'General use registers whose values will be preserved across function calls',
        preserved: 'yes',
        notes: 'These registers are saved across function calls. If you call a function, you can assume they will have the same values once the function call returns. If you are writing a function, you can not overwrite the values in any of these registers. If you need to use these registers inside a function, you must save their previous values to the stack and restore them before your function returns.'
    },
    {
        id: 'temporaries-high',
        name: 'Temporaries',
        numbers: '$24 - $25',
        letterNumbers: '$t8 - $t9',
        description: 'General use registers whose values will not be preserved across function calls',
        preserved: 'no',
        notes: 'These registers are not saved across function calls. If you call a function, you can not assume they will have the same values once the function call returns. If you are writing a function, you can overwrite the values in any of these registers.'
    },
    {
        id: 'global-pointer',
        name: 'Global Pointer',
        numbers: '$28',
        letterNumbers: '$gp',
        description: 'Used to enable efficient access to global labels',
        preserved: 'yes'
    },
    {
        id: 'stack-pointer',
        name: 'Stack Pointer',
        numbers: '$29',
        letterNumbers: '$sp',
        description: 'Used to track the current top of the stack',
        preserved: 'yes'
    },
    {
        id: 'frame-pointer',
        name: 'Frame Pointer',
        numbers: '$30',
        letterNumbers: '$fp',
        description: 'Used to track the location of the current frame',
        preserved: 'yes'
    },
    {
        id: 'return-address',
        name: 'Return Address',
        numbers: '$31',
        letterNumbers: '$ra',
        description: 'Used to track the location to return to at the end of the current funciton call',
        preserved: 'yes'
    },
    {
        id: 'float',
        name: 'Floating Point Registers',
        numbers: '$0 - $31',
        letterNumbers: '$f0 – $f31',
        description: 'A second set of 32 registers used by all floating point instructions.',
        preserved: 'no convention',
        notes: 'Unlike general-purpose registers (the main set of registers), there are no conventions for saving across function calls or special-purpose floating point registers. $f0 does not hold a value of zero like $0 (it can be used like any other floating point register). When working with doubles, each value uses two registers (the first of which must be an even-numbered register). These registers are located in coprocessor 1; data can be tranfered between general purpose registers and floating point registers using the mtc1 and mfc1 instructions.'
    },
    {
        id: 'hi',
        name: 'HI (Multiplication Result/Division Remainder)',
        numbers: 'n/a',
        letterNumbers: 'n/a',
        description: 'Used to store the upper 32 bits of the result from integer multiplication, or the remainder resultant from integer division',
        preserved: 'n/a',
        notes: 'Cannot be accessed directly. Value can be retrieved with the mfhi instruction, or changed with the mthi instruction.'
    },
    {
        id: 'lo',
        name: 'LO (Multiplication Result/Division Quotient)',
        numbers: 'n/a',
        letterNumbers: 'n/a',
        description: 'Used to store the lower 32 bits of the result from integer multiplication, or the quotient resultant from integer division',
        preserved: 'n/a',
        notes: 'Cannot be accessed directly. Value can be retrieved with the mflo instruction, or changed with the mtlo instruction.'
    },
    {
        id: 'pc',
        name: 'Program Counter',
        numbers: 'n/a',
        letterNumbers: 'n/a',
        description: 'Used to store the address of the instruction currently being executed',
        preserved: 'n/a',
        notes: 'Cannot be accessed directly. Jumps and branches change this value to cause execution to move to the desired location.'
    },
];