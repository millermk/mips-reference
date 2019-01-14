import { IGuide } from 'src/Models/IGuide';

/* tslint:disable:object-literal-sort-keys */

export const guideSource: IGuide[] = [
    {
        id: 'arrays',
        name: 'Arrays',
        description: 'Creatings, reading, and editing arrays',
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
    }
]