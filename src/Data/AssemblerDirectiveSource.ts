import { IAssemblerDirective } from 'src/Models/IAssemblerDirective';

/* tslint:disable:object-literal-sort-keys */

export const assemblerDirectiveSource: IAssemblerDirective[] = [
    {
        id: 'data',
        name: '.data',
        usage: '.data addr',
        description: 'Store subsequent items in the data segment',
        arguments: 'addr (optional):  the address to store subsequent items at',
        effect: 'Subsqeuent items are stored in the data segment.',
        notes: 'By convention, simple MIPS programs begin with a data segment, so this directive is often the first line of a file. Data segments holds items with program-level lifetimes (i.e. they are accessable for the entire life of the program).'
    },
    {
        id: 'text',
        name: '.text',
        usage: '.text addr',
        description: 'Store subsequent items in the text segment',
        arguments: 'addr (optional):  the address to store subsequent items at',
        effect: 'Subsqeuent items are stored in the text segment.',
        notes: 'By convention, simple MIPS programs place a text segment after the data segment, so this directive often comes at the end of the data segment. Text segments hold instructions; more complex code may store other kinds of data within text segments, but this is less common.'
    },
    {
        id: 'kdata',
        name: '.kdata',
        usage: '.kdata addr',
        description: 'Store subsequent items in the kernel data segment',
        arguments: 'addr (optional):  the address to store subsequent items at',
        effect: 'Subsqeuent items are stored in the kernel data segment.'
    },
    {
        id: 'ktext',
        name: '.ktext',
        usage: '.ktext addr',
        description: 'Store subsequent items in the kernel text segment',
        arguments: 'addr (optional):  the address to store subsequent items at',
        effect: 'Subsqeuent items are stored in the kernel text segment.'
    },
    {
        id: 'align',
        name: '.align',
        usage: '.align n',
        description: 'Align the next item to a 2^n byte boundary.',
        arguments: 'n: log2(boundary)',
        effect: 'The next item is aligned to a 2^n byte boundary',
        notes: 'To word align an item (e.g. an array which you will access with lw), use .align 2.'
    },
    {
        id: 'ascii',
        name: '.ascii',
        usage: '.ascii "str"',
        description: 'Store an ascii encoded string in memory',
        arguments: 'str: the string to store in memory',
        effect: 'The string is ascii encoded and stored in the current segment.',
        notes: 'Since most functions/syscalls expect null-terminated strings, this directive should be used with caution. Typically, this directive is preceded by a label so the string can be referenced conveniently.'
    },
    {
        id: 'asciiz',
        name: '.asciiz',
        usage: '.asciiz "str"',
        description: 'Store an ascii encoded string in memory (null terminated)',
        arguments: 'str: the string to store in memory',
        effect: 'The string is ascii encoded, null terminated, and stored in the current segment.',
        notes: 'Typically, this directive is preceded by a label so the string can be referenced conveniently.'
    },
    {
        id: 'byte',
        name: '.byte',
        usage: '.byte b1, ..., bn',
        description: 'Store n bytes in memory',
        arguments: 'b1, ..., bn: the bytes to store in memory',
        effect: 'The bytes are stored in the current segment.',
        notes: 'Typically, this directive is preceded by a label so the bytes can be referenced conveniently.'
    },
    {
        id: 'half',
        name: '.half',
        usage: '.half h1, ..., hn',
        description: 'Store n half-words in memory',
        arguments: 'h1, ..., hn: the half-words to store in memory',
        effect: 'The half-words are stored in the current segment.',
        notes: 'Typically, this directive is preceded by a label so the half-words can be referenced conveniently.'
    },
    {
        id: 'word',
        name: '.word',
        usage: '.word w1, ..., wn',
        description: 'Store n words in memory',
        arguments: 'w1, ..., wn: the words to store in memory',
        effect: 'The words are stored in the current segment.',
        notes: 'Typically, this directive is preceded by a label so the words can be referenced conveniently.'
    },
    {
        id: 'float',
        name: '.float',
        usage: '.float f1, ..., fn',
        description: 'Store n floats in memory',
        arguments: 'f1, ..., fn: the floats to store in memory',
        effect: 'The floats are stored in the current segment.',
        notes: 'Typically, this directive is preceded by a label so the floats can be referenced conveniently.'
    },
    {
        id: 'double',
        name: '.double',
        usage: '.double d1, ..., dn',
        description: 'Store n doubles in memory',
        arguments: 'd1, ..., dn: the doubles to store in memory',
        effect: 'The doubles are stored in the current segment.',
        notes: 'Typically, this directive is preceded by a label so the doubles can be referenced conveniently.'
    },
    {
        id: 'space',
        name: '.space',
        usage: '.space n',
        description: 'Allocates n bytes of space in the current segment',
        arguments: 'n: the number of bytes to allocate in memory',
        effect: 'The bytes are reserved in the current segment.',
        notes: 'Typically, this directive is preceded by a label so the space can be referenced conveniently. The space can be used for any kind of data - it is up to you to keep track of its purpose. For example, .space 40 could be declared for an array of 10 integers, or a 39-character string with a null-terminator.'
    },
    {
        id: 'extern',
        name: '.extern',
        usage: '.extern sym size',
        description: 'Declare that the item at sym with the specified size is a global label',
        arguments: 'sym: the item to declare as global; size: the size of the item',
        effect: 'The specified item is stored in a position which can be accessed quickly using $gp'
    },
    {
        id: 'globl',
        name: '.globl',
        usage: '.globl label',
        description: 'Declare that the specified label can be accessed from other files',
        arguments: 'label: the label to make accessable form other files',
        effect: 'The specified label will be accessable form other files'
    },
    {
        id: 'set',
        name: '.set',
        usage: '.set arg',
        description: 'Disable or re-enable warnings about the use of $at for subsequent lines',
        arguments: 'arg: \'noat\' to disable warnings, \'at\' to enable warnings',
        effect: 'Warnings will be enabled/disabled for subsequent lines',
        notes: 'Since the assembler uses $at when expanding pseudoinstructions, care must be taken to ensure that values placed in $at are not overwritten'
    },
];