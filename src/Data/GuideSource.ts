import { IGuide } from 'src/Models/IGuide';

/* tslint:disable:object-literal-sort-keys */

export const guideSource: IGuide[] = [
    {
        id: 'basics',
        name: 'Basics',
        description: 'Getting started with MIPS assembly and QtSpim',
        items: [
            { type: 'heading', text: "What's QtSpim?"},
            { type: 'paragraph', text: "QtSpim provides two major features for testing your MIPS assembly language code. First, QtSpim includes an assembler, which turns your assembly code into its binary equivalent (machine code). Second, QtSpim includes a simulator of a MIPS processor which allows you to test your code. When you write code in other languages, like c, a compiler can convert your code into machine code that you can test by running it directly on your computer's processor. When you write MIPS assembly, the code is specifically designed to run on a MIPS processor, which your computer does not have, so you need a simulator to test it."},
            { type: 'heading', text: 'MIPS Processor Basics'},
            { type: 'paragraph', text: "Before you start learning to write MIPS assembly code, its important to understand some basic principles of how MIPS processors work. First, the MIPS processor uses a RISC (reduced instruction set computer) design. This means that it can perform a (relatively) small number of simple instructions, and more complex operations will require multiple instructions. Second, instructions in the MIPS architecture mostly fall into three categories: arithmetic/logical operations, memory operations, and branch/jump operations. Third, since arithmetic/logical operations are separate from memory operations, the processor uses a small set of special memory units in the processor called registers. All arithmetic & logical operations work on data stored in these registers. If you need to change a value in memory, it will require (at least) three instructions: one to load the current value from memory into a register, one to change the value, and one to store the value back to memory. The MIPS processor has 32 registers. They are referred to by a $ followed by a number (i.e., $0 - $31). Some registers have special purposes, many relating to writing procedures. To help remember the registers' purposes, they are usually referred to them by friendly names that start with a letter (e.g., $t2). You can see all the registers on the Registers page, but if you're just getting started it's safe to use the ones that start with a letter 's' (i.e., $s0 - $s7) or 't' (i.e., $t0 - $t9)."},
            { type: 'heading', text: 'Creating a MIPS assembly file'},
            { type: 'paragraph', text: "MIPS assembly is written as plain text. You can use a text editor like Visual Studio Code, Kate, or Sublime to write you code. Your file should use a .s or .asm extension so that QtSpim and your text editor recognize it as as assembly language file."},
            { type: 'heading', text: 'A Simple MIPS Assembly Program'},
            { type: 'paragraph', text: "One of the functions the MIPS assembler performs is splitting up your code (referred to as text) from your variables (referred to as data) in memory. When you write MIPS assembly code, you need to tell the assembler whether the upcoming lines will be data or code declarations. This is done using an assembler directive; in MIPS assembly, assembler directives start with a period ('.'). You can see more assembler directives on the Assembler Directives page, but to get started, use a .text directive to let the assembler know you'll be writing code:"},
            { type: 'code', text: `.text`},
            { type: 'paragraph', text: "Once you've added a .text declaration, you'll need to let the assembler know where your program starts. In your program, you use labels to mark the location of a block of code or memory; labels end with a colon (':'). To let the assembler know where your program starts, use a label called main:"},
            { type: 'code', text: `main:`},
            { type: 'paragraph', text: "Once you've added the main label, you can start adding instructions. You can view most of the instructions supported by QtSpim on the Instructions page. Normally, you should write one instruction on each line of your file. You can use indentation to help organize your code if you'd like, but remember it does not have any special meaning to QtSpim."},
            { type: 'paragraph', text: "Instructions in MIPS assembly include a short mnemonic (typically just a few letters) that identifies what the processor should do, followed by some arguments. The arguments are mostly registers, but sometimes a constant value or label. To get started, you can initialize a register to a specific value using the load immediate ('li') instruction:"},
            { type: 'code', text: `li $t0, 3 # $t0 holds constant 3;li $t1, 6 # $t1 holds constant 6`},
            { type: 'paragraph', text: "Notice that the arguments (e.g., $t0 and 0) are separated by a comma, but there is no comma after the instruction name. You can also see these lines include comments using a pound sign ('#'). It's a good idea to use a comment on the first line that uses a register saying what the what your program will use the register for. You can't name the registers, so this is the best way to keep track of what each register holds."},
            { type: 'paragraph', text: "Once you've placed values into some of the registers, you can start to perform arithmetic operations on the values. For example, the following instruction adds the values in registers $t0 and $t1, and places the result into register $t2:"},
            { type: 'code', text: `add $t2, $t0, $t1 # $t2 holds the sum`},
            { type: 'paragraph', text: "For most MIPS assembly instructions, the destination register (where the result is stored) comes first, followed by the source register(s) (where the operands come from). So the add instruction above reads the current values in $t0 and $t1, adds the values, and places the result in $t2. If you aren't sure what order to put the arguments in for a specific instruction, it's always a good idea to check the Instructions page for information on how to use all the instructions. The page is also searchable by tags and descriptions, so if you know what you want to do but you aren't sure what the instruction is called, it's a good place to search."},
            { type: 'paragraph', text: "Once you've calculated some kind of result, you may want to display it to the user. This is done using the console provided by QtSpim. To do input or output using the console in QtSpim, you'll use a syscall (short for system call). This is a special kind of instruction that asks the system to do something. Unlink other instructions where all the arguments are specified in one line of code, the syscall instruction doesn't take any arguments at all. You need to use special registers to communicate what you would like the system to do. First, you place a special value into the register $v0 which tells the system what type of operation you are requesting. You can look up this value on the Syscall page. In this case, you want to print an integer to the console, so the value (sometimes called a syscall code or syscall number) is 1. You can use load immediate to put a value of 1 in $v0:"},
            { type: 'code', text: `li $v0, 0 # Syscall code for print int`},
            { type: 'paragraph', text: "The other piece of information you can get from the Syscall reference is what arguments a syscall uses. For printing an integer, there is a single argument (the value to print), and it needs to be placed in register $a0. Since the sum you calculated earlier is stored in $t2, you can use a move instruction to copy the sum into $a0:"},
            { type: 'code', text: `move $a0, $t2 # value to print`},
            { type: 'paragraph', text: "Note that the move instruction doesn't actually change the value in the original register, so it is better to think of it as a copy operation. Finally, once you have the syscall code and arguments set up, you can do the syscall using the syscall instruction:"},
            { type: 'code', text: `syscall`},
            { type: 'paragraph', text: "So the complete program to add two values and print the sum to the console looks like this:"},
            { type: 'code', text: `.text;;main:;    li $t0, 3           # $t0 holds constant 3;    li $t1, 6           # $t1 holds constant 6;;    add $t2, $t0, $t1   # $t2 holds the sum;;    li $v0, 1           # Syscall code for print int;    move $a0, $t2       # value to print;    syscall`},
            { type: 'paragraph', text: "To run the program in QtSpim, you can copy it into a text file and save it with a .s extension. Then, in QtSpim, use the Reinitialize and Load File button, select the file, and hit Run. If you want to run a program again or you've changed the code, use the Reinitialize and Load File button again. If you don't see any console window when you run the program, make sure Console is checked under the Window menu. "},
        ]
    },
    {
        id: 'control-flow',
        name: 'Control Flow',
        description: 'Branching & jumping, if & if-else blocks, and loops',
        items: [
            { type: 'heading', text: "Control flow"},
            { type: 'paragraph', text: "Control flow is the order in which your code gets run by the processor. In a language like c, you can use statements like if, for, and while to specify blocks of code to jump over or repeat. MIPS assembly language doesn't have these statements, so code is simply run line after line starting at the main: label and continuing until the end of the file is reached. If you need to do anything more complex, you need to use branch or jump instruction."},
            { type: 'paragraph', text: "The simpler of the two is a jump instruction, which takes only a single argument, a label to jump to:"},
            { type: 'code', text: `main:;    li $t0, 3;    j blockTwo;    li $t1, 2;blockTwo:;    li $t2, 5`},
            { type: 'paragraph', text: "In the code block above, the jump instruction ('j') causes the processor to skip over the line which sets the value of $t1, go immediately to the label called 'blockTwo', and start executing from there. Of course this alone isn't particularly useful, so MIPS also includes branch instructions. Branch instructions work similarly to jump instructions except they only go to the specified label if a condition is true. There are different branch instructions for different conditions. For example, the branch equal instruction ('beq') only branches to the specified label if two registers are equal:"},
            { type: 'code', text: `main:;    li $t0, 1;    li $t1, 5;    li $t2, 5;    beq $t0, $t1, blockOne;    beq $t1, $t2, blockTwo;    li $t3, 6;;blockOne:;    li $t4, 3;;blockTwo:;    li $t5, 4`},
            { type: 'paragraph', text: "In the code block above, the first branch instruction doesn't do anything, because the values in $t0 and $t1 are not equal. The second branch instruction causes the processor to jump to the label blockTwo because the values in $t1 and $t2 are equal. If you ran this block of code, the values of $t0, $t1, $t2, and $t5 would be set; the values of $t3 and $t4 will not be affected because the instructions that reference them get skipped over. Again, this example isn't particularly useful. You'll see in the sections below how branch statements can be used to create code that works similarly to typical control flow constructs seen in higher level languages."},
            { type: 'heading', text: "If Block"},
            { type: 'paragraph', text: "The simplest control flow construct is an if block, a block of code that only runs if a specific condition is true. In a higher level language, that might look like this:"},
            { type: 'code', text: `if (t0 >= t1) {;    t2 = 7;};t3 = 6;`},
            { type: 'paragraph', text: "The equivalent code in MIPS:"},
            { type: 'code', text: `    blt $t0, $t1, lessThan;    li $t2, 7;lessThan:;    li $t3, 6`},
            { type: 'paragraph', text: "Due to the way MIPS assembly is laid out, the easiest way to write an if statement is usually to invert the condition. In this case, we only wanted to set the value of $t2 if $t0 is greater than or equal to $t1. To do so we used the branch less than instruction ('blt') to skip over the line that sets the value of $t1 if $t0 is less than $t1."},
            { type: 'heading', text: "If-Else Block"},
            { type: 'paragraph', text: "A slightly more complex example is an if-else block. In a higher level language, that might look like this:"},
            { type: 'code', text: `if (t0 >= t1) {;    t2 = 7;};else {;   t3 = 6;};t4 = 10`},
            { type: 'paragraph', text: "The equivalent code in MIPS:"},
            { type: 'code', text: `    bge $t0, $t1 greaterThanOrEqual;    li $t3, 6;    j doneIfElse;greaterThanOrEqual:;    li $t2, 7;doneIfElse:;    li $t4, 10;`},
            { type: 'paragraph', text: "Again, due to the way MIPS is laid out, things get flipped a bit. In this case, the 'else' part comes before the 'if' part. Also note that the first block must end with a jump statement that skips over the second block; otherwise both of the blocks would get executed."},
            { type: 'heading', text: "For Loop"},
            { type: 'paragraph', text: "A simple for loop in a higher level language might look like this:"},
            { type: 'code', text: `for (t0 = 0, t0 < 10, t0++) {;    t2 = t2 + 4;}`},
            { type: 'paragraph', text: "The equivalent code in MIPS:"},
            { type: 'code', text: `    li $t0, 0               # $t0 will be the loop counter;    li $t1, 10              # $t1 will be the max value;;loop:;    bge $t0, $t1, exitLoop  # if the counter is greater than or equal to the max, exit the loop;    addi $t2, $t2, 4        # add 4 to $t2;    addi $t0, $t0, 1        # increment the loop counter;    b loop                  # run the loop again;;exitLoop:                   # if we get here, the loop is done;...;`},
            { type: 'paragraph', text: "Writing a loop will require at least one label and one branch statement. In this case, it is written with two of each. If you know for sure that your loop should run at least once, it can be written with a single label at the top, and a conditional branch at the bottom that branches back to the label at the top if the loop needs to run again. If the loop might not even have to run once, the format shown here is needed because it checks the conditional at the top of the loop. If you forget the instruciton that implements the loop counter (or otherwise cunstruct a loop incorrectly), you might create an infinite loop. If you code has an infinite loop and you run it in QtSpim, QtSpim will likely freeze or crash. You might need to use force quit the program."},
            { type: 'heading', text: "Nested For Loop"},
            { type: 'paragraph', text: "A nested for loop that prints out the in a higher level language might look like this:"},
            { type: 'code', text: `for (t0 = 1, t0 <= 10, t0++) {;    for (t1 = 1, t1 <= 10, t1++) {;        print (t0 * t1);    };}`},
            { type: 'paragraph', text: "The equivalent code in MIPS:"},
            { type: 'code', text: `    li $t0, 1                           # $t0 is the outer loop counter;    li $t1, 1                           # $t1 is the inner loop counter;    li $t2, 10                          # $t2 is the max value;;outerLoop:;    bgt $t0, $t2, exitOuterLoop         # if counter > max, exit outer loop;    li $t1, 1                           # reset the inner loop counter every time the outer loop runs;innerLoop:;    bgt $t1, $t2, exitInnerLoop         # is counter > max, exit inner loop;    mul $a0, $t0, $t1                   # calculate the sum;    li $v0, 1                           # syscall code for print int;    syscall;    li $v0, 11                          # Syscall code for printing a character;    li, $a0, 32                         # ASCII value of space;    syscall;    addi $t1, $t1, 1                    # increment inner loop counter;    b innerLoop                         # do the inner loop again;exitInnerLoop:;    addi $t0, $t0, 1                    # increment outer loop counter;    b outerLoop                         # do the outer loop again;exitOuterLoop:`},
            { type: 'paragraph', text: "With nested loops, be sure to leave clear comments for yourself and name your labels logically. Since you'll need multiple labels and counters, it's important to keep everything straight."}
        ]
    },
    {
        id: 'arrays',
        name: 'Arrays',
        description: 'Creating, reading, and editing arrays',
        items: [
            { type: 'heading', text: 'Allocating Arrays'},
            { type: 'paragraph', text: 'MIPS has no built-in concept of arrays, meaning they must be managed by the programmer from start to finish. The first step is to allocate space for the array, which should be done in a .data section:'},
            { type: 'code', text: `.data;...;myArray: .space 40`},
            { type: 'paragraph', text: "The declaration has three parts. First, a label, which allows you to refer to the memory segment from your code. Second, the assembler directive .space, which tells the assembler to reserve bytes in the data segment. Finally, the number 40, which tells the assembler how many bytes to reserve. You might have noticed the declaration does not include a data type. In programming languages like c, the size of an array is automatically calculated by multiplying the number of items (length) by each item's size. In MIPS, you must do this manually. For example, integers in MIPS have a size of 4 bytes. Thus, an array of 10 integers requires 10 × 4 = 40 bytes."},
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
            { type: 'paragraph', text: 'The system keeps printing characters until it finds a null terminator, so strings must be null terminated for printing to the console. You might have noticed that the string in this example contains a new line character (the \\n); this is useful for keeping the console output readable.' },
            { type: 'heading', text: 'Printing Newlines to the Console'},
            { type: 'paragraph', text: 'In the previous example a newline was added to the string to keep the output readable. Sometimes you need to print just a newline. While you can accomplish this by creating a string in the .data section containing only a newline, you can also use the print character syscall as a shortcut:' },
            { type: 'code', text: 'li $v0, 11          # Syscall code for printing a character;li, $a0, 10         # ASCII value of newline;syscall'},
            { type: 'heading', text: 'Reading Strings from the Console'},
            { type: 'paragraph', text: 'To read a string from the console, you must first allocate space for the string using the .space directive in the .data section:' },
            { type: 'code', text: '.data;...;inString: .space 10'},
            { type: 'paragraph', text: 'Note that you must allocate space for the null terminator. In this example, allocating 10 bytes will actually only allow 9 characters to be read from the console.' },
            { type: 'paragraph', text: 'Next, you can read a string using a syscall:' },
            { type: 'code', text: 'li $v0, 8           # Syscall code for reading a string;la, $a0, inString   # Address to store the string at;li $a1, 10          # Length of string to read;syscall;'},
            { type: 'paragraph', text: 'The length specified is a maximum; the syscall will keep reading characters until you enter a newline (press enter) or it runs out of space. If you press enter before the maximum number of characters has been read, the newline character (ASCII value 10) will be included in the inputted string. Note that the length includes the null terminator. In this example, only 9 characters (at most) will be read from the console because we specified a length of 10.' },
            { type: 'heading', text: 'Looping over Strings'},
            { type: 'paragraph', text: 'Looping over a string (character by character) can be accomplished using a register, which holds the address of the current character, and the lbu instruction, which will load a single byte from memory. You may see the lb instruction used in some examples, but lbu is preferred because characters are not signed values (although QtSpim only supports 7-bit ASCII characters so it technically does not matter either way). When you load a character into a register using lbu, the destination register will hold a number which is the ASCII value of the character. You can refer to an ASCII table to see which characters correspond to which values.' },
            { type: 'paragraph', text: 'Here is a complete example program which reads a string from the user and loops over it to check if it contains the letter m:' },
            { type: 'code', text: '.data;prompt: .asciiz "Enter a string (20 characters max): ";resultYes: .asciiz "The string contained the letter m";resultNo: .asciiz "The string did not contain the letter m";input: .space 21;;.text;main:;;li $v0, 4           # Syscall code for printing a string;la, $a0, prompt     # Address of string to print;syscall;;li $v0, 8           # Syscall code for reading a string;la, $a0, input      # Address to store the string at;li $a1, 21          # Length of string to read;syscall;;la $t0, input        # $t0 will hold current position in the string;li $t1, 109          # ASCII value of lower-case m;loop:;lbu $t2, 0($t0)      # Read a character from the string;beqz $t2, notFound   # If the character is a null terminator (zero), jump to notFound;beq $t2, $t1, found  # If the character is m, jump to found;addi $t0, $t0, 1     # Increment loop counter;b loop               # Did not find a null terminator or an m, so loop again;;notFound:;li $v0, 4           # Syscall code for printing a string;la, $a0, resultNo   # Address of string to print;syscall;;li $v0, 10          # Syscall code to terminate;syscall;;found:;li $v0, 4           # Syscall code for printing a string;la, $a0, resultYes  # Address of string to print;syscall;;li $v0, 10          # Syscall code to terminate;syscall'},
            { type: 'paragraph', text: 'Note: the address of the current character can be used as a "counter" when looping over a string. Each iteration of the loop should increment the counter by 1 (since characters are only 1 byte in ASCII). When the character read is a null terminator (ASCII value 0), the loop should stop.' },
        ]
    },
    {
        id: 'errors',
        name: 'Errors',
        description: 'Common QtSpim errors',
        items: [
            { type: 'paragraph', text: 'QtSpim error messages can be a bit terse. This guide includes frequent errors in QtSpim and tips for fixing the most common causes.' },
            { type: 'heading', text: "Syntax Error"},
            { type: 'code', text: "spim: (parser) syntax error on line n of file /*/*.s    inst args"},
            { type: 'paragraph', text: 'This error message indicates that the line of code shown cannot be understood by QtSpim. Common causes include misspelled instruction names, typos in register names or other arguments, and missing commas. You may also see the error if you are using an instruction which is supported in other environments (e.g. MARS) but not in QtSpim.' },
            { type: 'heading', text: 'Label is Defined for the Second Time'},
            { type: 'code', text: 'Error Message:;spim: (parser) Label is defined for the second time on line n of file /*/*.s    label:'},
            { type: 'paragraph', text: 'This error indicates a label has been defined twice. Double check that you have not used the same label name twice in your program. This error also occurs if you load a file twice in QtSpim without re-initializing; make sure you are using "Reinitialize and Load File" not "Load File".' },
            { type: 'heading', text: 'Instruction References Undefined Symbol'},
            { type: 'code', text: 'Error Message:;Instruction references undefined symbol at 0x00400014 [00400014] 0x0c000000  jal 0x00000000 [main]    : 188: jal main '},
            { type: 'paragraph', text: 'This error indicates your program has no main label. Try adding main: to the start of your .text segment.' },
            { type: 'code', text: 'Error Message:;Instruction references undefined symbol at 0x-------- [--------] 0x--------  inst <args>    : ---: inst <args> '},
            { type: 'paragraph', text: 'This error indicates your program is trying to reference a label which is not defined. The most common cause is typos. If the instruction resulting in the error is la, lw, or sw, the corresponding label should be in the .data section. If the instruction resulting the error is a branch or jump, the corresponding label should be in the .text section.' },
            { type: 'heading', text: 'Attempt to Execute Non-Instruction'},
            { type: 'code', text: 'Error Message:;Attempt to execute non-instruction at 0x--------'},
            { type: 'paragraph', text: 'This error message indicates that the program counter is not referencing a valid instruction. The most common cause is that your program does not end with a syscall for termination (syscall code 10). It could also be caused by calling jr $ra with an incorrect address in $ra.' },
            { type: 'heading', text: 'Unaligned Address'},
            { type: 'code', text: 'Error Message:;Unaligned address in inst/data fetch: 0x--------'},
            { type: 'paragraph', text: 'This error message indicates that you are trying to access a memory address that is not aligned to the expected boundary for the current instruction. In most cases, this results from using lw or sw to access an item from the .data section. In the .data section, try adding .align 2 on the line above the item you are trying to access.' },
            { type: 'heading', text: 'Bad Address'},
            { type: 'code', text: 'Error Message:;Bad address in data/stack read: 0x--------'},
            { type: 'paragraph', text: 'This error message indicates that you are trying to access a memory address that is available to be read/written. In most cases, this results from using a load or store instruction with an incorrectly calculated address. In particular, an unset register with a value of 0 is a "bad address". Ensure the address you are trying to access correctly references an item declared in the .data section.' },
            { type: 'heading', text: "Can't Put Data in Text Segment"},
            { type: 'code', text: "Error Message:;Can't put data in text segment on line n of file /*/*.s    .label .type args"},
            { type: 'paragraph', text: 'This error message indicates that you are trying to use a directive that belongs in a .data segment in another segment. Most commonly, it is caused by forgetting the .data directive.' },
            { type: 'heading', text: "Target of Jump Differs in High-Order 4 Bits from Instruction PC"},
            { type: 'code', text: "Error Message:;Target of jump differs in high-order 4 bits from instruction pc 0x400014"},
            { type: 'paragraph', text: 'This error message indicates that you are trying to jump further than a jump instruction will allow. The most common cause is forgetting the .text directive prior to your code (which means the main label will not be within the text segment as expected). This error can also be caused by a jump instruction which accidentally references the label of an item in the .data section.' },
        ]
    }
]