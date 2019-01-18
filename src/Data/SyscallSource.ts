import { ISyscall } from 'src/Models/ISyscall';

/* tslint:disable:object-literal-sort-keys */

export const syscallSource: ISyscall[] = [
    {
        description: 'Print an integer to the console',
        id: 'print-integer',
        inputs: '$a0 = integer to print',
        name: 'Print Integer',
        number: '1',
        outputs: '<none>'
    },
    {
        description: 'Print a float to the console',
        id: 'print-float',
        inputs: '$f12 = float to print',
        name: 'Print Float',
        number: '2',
        outputs: '<none>'
    },
    {
        description: 'Print a double to the console',
        id: 'print-double',
        inputs: '$f12 = float to print',
        name: 'Print Double',
        number: '3',
        outputs: '<none>'
    },
    {
        description: 'Print a string to the console',
        id: 'print-string',
        inputs: '$a0 = address of string to print',
        name: 'Print String',
        number: '4',
        outputs: '<none>',
        notes: 'The string must be null terminated.'
    },
    {
        description: 'Read an integer from the console',
        id: 'read-int',
        inputs: '<none>',
        name: 'Read Integer',
        number: '5',
        outputs: '$v0 = inputted integer'
    },
    {
        description: 'Read a float from the console',
        id: 'read-float',
        inputs: '<none>',
        name: 'Read Float',
        number: '6',
        outputs: '$f0 = inputted float'
    },
    {
        description: 'Read a double from the console',
        id: 'read-double',
        inputs: '<none>',
        name: 'Read Double',
        number: '7',
        outputs: '$f0 = inputted double'
    },
    {
        description: 'Read a string from the console',
        id: 'read-string',
        inputs: '$a0 = address to store inputted string; $a1 = number of characters to read',
        name: 'Read String',
        number: '8',
        outputs: '<none>',
        notes: 'The number of characters to read (specified in $a1) is a maximum; the syscall will keep reading characters until you enter a newline (press enter) or it reaches the maximum. If you press enter before the maximum number of characters has been read, the newline character (ASCII value 10) will be included in the inputted string. The number of characters to read also includes the null terminator. Thus, the maximum number of characters which can be read from the console is actually one less than number specified.'
    },
    {
        description: 'Allocate memory dynamically',
        id: 'allocate-memory',
        inputs: '$a0 = number of bytes to allocate',
        name: 'Allocate Memory',
        number: '9',
        outputs: '$v0 = address of allocated memory'
    },
    {
        description: 'Exit the program',
        id: 'exit',
        inputs: '<none>',
        name: 'Exit',
        number: '10',
        outputs: '<none>'
    },
    {
        description: 'Print a character to the console',
        id: 'print-character',
        inputs: '$a0 = character to print (ascii value)',
        name: 'Print Character',
        number: '11',
        outputs: '<none>'
    },
    {
        description: 'Read a character from the console',
        id: 'read-character',
        inputs: '<none>',
        name: 'Read Character',
        number: '12',
        outputs: '$v0 = inputted character (ascii value)'
    }
];