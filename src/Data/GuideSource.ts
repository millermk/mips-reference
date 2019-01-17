import { IGuide } from 'src/Models/IGuide';

/* tslint:disable:object-literal-sort-keys */

export const guideSource: IGuide[] = [
    {
        id: 'arrays',
        name: 'Arrays',
        description: 'Creating, reading, and editing arrays',
        items: [
            { type: 'heading', text: 'Allocating Arrays'},
            { type: 'paragraph', text: 'MIPS has no built-in concept of arrays, meaning they must be managed by the programmer from start to finish. The first step is to allocate space for the array:'},
            { type: 'code', text: `.data;...;myArray: .space 40`},
            { type: 'paragraph', text: "The declaration has three parts. First, a label, which allows you to refer to the memory segment from your code. Second, the assembler directive .space, which tells the assembler to reserve bytes in the data segment. Finally, the number 40, which tells the assembler how many bytes to reserve. You might have noticed the declaration does not include a data type. In programming languages like c, the size of an array is automatically calculated by multiplying the number of items by each item's size. In MIPS, you must do this manually. For example, integers in MIPS have a size of 4 bytes. Thus, an array of 10 integers requires 10 × 4 = 40 bytes."},
            { type: 'heading', text: 'Accessing Array Elements'},
            { type: 'paragraph', text: "Just like you must manually calculate the size of an array for allocation, you must manually calculate the location of items in an array to access them. Arrays store items one after another in memory, so to access a specific item you must first determine where the array begins in memory, then determine the item's offset within the array. Finding the memory address where an array starts can be done with the load address pseudoinstruction:"},
            { type: 'code', text: `la $t0, myArray     # Store the base address in $t0`},
            { type: 'paragraph', text: "The next step is to calculate the offset. As an example, lets access the item with index 3:"},
            { type: 'code', text: `li $t1, 3           # Store the desired index in $t1`},
            { type: 'paragraph', text: "To do this, multiply the index of the desired item by the size of the items in the array. In the case of an integer array, the size is 4 bytes, so you index must be multiplied by 4. The most obvious way to do this is using the mul pseudoinstruction:"},
            { type: 'code', text: `li $t2, 4           # Store the size of an int;mul $t1, $t1, $t2   # Multiply the index by the size of an int`},
            { type: 'paragraph', text: "You can do this more efficiently by using a shift. Multiplying by 4 in binary is similar to multiplying by 100 in decimal: it moves the decimal two places. MIPS lets you shift numbers with a single instruction; in this case we will shift two places to the left using shift left logical:"},
            { type: 'code', text: `sll $t1, $t1, 2`},
            { type: 'paragraph', text: "Whichever method you used to calculate the offset, you now need to add it to the base address of the array:"},
            { type: 'code', text: `add $t1, $t0, $t1`},
            { type: 'paragraph', text: "Finally we have the address of the item we want to access! The last step is to get the item's value. We can do this using a load command. Since integers are 4 bytes, we will use load word:"},
            { type: 'code', text: `lw $t2, 0($t1)`},
            { type: 'heading', text: 'Editing Array Elements'},
            { type: 'paragraph', text: "Editing array elements is very similar to accessing them. You must follow the same procedure to calculate the item's location. Assuming you followed the instructions in the previous section to calculate the item's address in $t1, you can use a store word instruction to change the value:"},
            { type: 'code', text: `li $t3, 21          # We want to store 21 into the array;sw $t3, 0($t1)`},
            { type: 'paragraph', text: "Putting the registers in the wrong order is a common mistake when using store word. When done correctly, the first register specified is the value to be stored, and the second register specified is the memory location where the item should be stored. This can seem backwards because most MIPS instructions list the destination register first (although technically speaking neither register is a destination because store word does not change the contents of either register)."},
            { type: 'heading', text: 'Looping Over Arrays'},
            { type: 'paragraph', text: "Looping over arrays typically involves tracking a counter as well as a current position in memory. With every iteration of the loop, the counter must be increased by 1 and the position in memory must be increased by the size of the items in the array. Here is an example which tracks a count in $t0 and a memory position in $t1. It prints out a 10 item array of integers to the console:"},
            { type: 'code', text: `li $t0, 0           # Initialize count to 0;la $t1, myArray     # Initialize memory position to start of the myArray;li $t2, 9           # Maximum index for a 10 item array;;loop:;lw $t3, 0($t1)      # Access the current item;li $v0, 1           # Syscall code for printing an int;move $a0, $t3       # Place the current item for Syscall;syscall;;addi $t0, $t0, 1    # Increment count;addi $t1, $t1, 4    # Increment memory position by 4 (size of an int);ble $t0, $t2, loop  # Loop again if the index is not greater than the maximum`},
        ]
    },
    {
        id: 'strings',
        name: 'Strings',
        description: 'Creating, reading, and printing strings',
        items: [
            { type: 'heading', text: 'Initialized Strings'},
            { type: 'paragraph', text: 'MIPS assembly allows you to create string which are initialized to a given value using the .ascii and .asciiz directives:' },
            { type: 'code', text: '.data;...;myString: .asciiz "Hello world\\n"'},
            { type: 'paragraph', text: 'The .asciiz directive automatically adds a null terminator to the string (which is necessary for printing to the console), so in most cases it is preferred. The declaration has three parts. First, a label, which allows you to refer to the string from your code. Second, the assembler directive .asciiz, which tells the assembler to reserve bytes in the data segment and prefill them with the given string. Finally, a string to place in memory. The size is automatically calculated based on the length of the given string.'},
            { type: 'heading', text: 'Printing Strings to the Console'},
            { type: 'paragraph', text: 'Strings can be printed to the console using a syscall:' },
            { type: 'code', text: 'li $v0, 4           # Syscall code for printing a string;la, $a0, myString   # Address of string to print;syscall'},
            { type: 'paragraph', text: 'The system keeps printing characters until it finds a null terminator, so must be null terminated for printing to the console. You might have noticed that the string in this example contains a new line character (the \\n); this is useful for keeping the console output readable.' },
            { type: 'heading', text: 'Printing Newlines to the Console'},
            { type: 'paragraph', text: 'In the previous example a newline was added to the string to keep the output readable. Sometimes you need to print just a newline. While you can accomplish by creating a string in the .data section containing only a newline, you can also use the print character syscall as a shortcut:' },
            { type: 'code', text: 'li $v0, 11          # Syscall code for printing a string;li, $a0, 10         # ASCII value of newline;syscall'},
            { type: 'heading', text: 'Reading Strings from the Console'},
            { type: 'paragraph', text: 'To read a string from the console, you must first allocate space for the string using the .space directive in the .data section:' },
            { type: 'code', text: '.data;...;inString: .space 10'},
            { type: 'paragraph', text: 'Note that you must allocate space for the null terminator. In this example, allocating 10 bytes will actually only allow 9 characters to be read from the console.' },
            { type: 'paragraph', text: 'Next, you can read a string using a syscall:' },
            { type: 'code', text: 'li $v0, 8           # Syscall code for reading a string;la, $a0, inString   # Address to store the string at;li $a1, 10          # Length of string to read;syscall;'},
            { type: 'paragraph', text: 'The length specified is a maximum; the syscall will keep reading characters until you enter a newline (press enter) or it runs out of space. If you press enter before the maximum number of characters has been read, the newline character (ASCII value 10) will be included in the inputted string. Note that the length includes the null terminator. In this example, only 9 characters (at most) will be read from the console because we specified a length of 10.' },
            { type: 'heading', text: 'Looping over Strings'},
            { type: 'paragraph', text: 'Looping over a string (character by character) can be accomplished using a register, which holds the address of the current character, and the lbu instruction, which will load a single byte from memory. You may see the lb instruction used in some examples, but lbu is preferred because characters not signed values (although QtSpim only supports 7-bit ASCII characters so it technically does not matter either way). When you load a character into a register using lbu, the destination register will hold a number which is the ASCII value of the character. You can refer to an ASCII table to see which characters correspond to which values.' },
            { type: 'paragraph', text: 'Here is a complete example program which reads a string from the user and loops over it to check if it contains the letter m:' },
            { type: 'code', text: '.data;prompt: .asciiz "Enter a string (20 characters max): ";resultYes: .asciiz "The string contained the letter m";resultNo: .asciiz "The string did not contain the letter m";input: .space 21;;.text;main:;;li $v0, 4           # Syscall code for printing a string;la, $a0, prompt     # Address of string to print;syscall;;li $v0, 8           # Syscall code for reading a string;la, $a0, input      # Address to store the string at;li $a1, 21          # Length of string to read;syscall;;la $t0, input        # $t0 will hold current position in the string;li $t1, 109          # ASCII value of lower-case m;loop:;lbu $t2, 0($t0)      # Read a character from the string;beqz $t2, notFound   # If the character is a null terminator (zero), jump to notFound;beq $t2, $t1, found  # If the character is m, jump to found;addi $t0, $t0, 1     # Increment loop counter;b loop               # Did not find a null terminator or an m, so loop again;;notFound:;li $v0, 4           # Syscall code for printing a string;la, $a0, resultNo   # Address of string to print;syscall;;li $v0, 10          # Syscall code to terminate;syscall;;found:;li $v0, 4           # Syscall code for printing a string;la, $a0, resultYes  # Address of string to print;syscall;;li $v0, 10          # Syscall code to terminate;syscall'},
            { type: 'paragraph', text: 'Note: the address of the current character can be used as a "counter" when looping over a string. Each iteration of the loop should increment the counter by 1 (since characters are only 1 byte in ASCII). When the character read is a null terminator (ASCII value 0), the loop should stop.' },
        ]
    }
]