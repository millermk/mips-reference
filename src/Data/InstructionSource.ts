import { IInstruction, instructionCategory } from 'src/Models/IInstruction';

/* tslint:disable:object-literal-sort-keys */

export const instructionSource: IInstruction[] = [
    {
        id: 'move',
        assemblyName: 'move',
        name: 'Move',
        description: 'Move a value from one register to another',
        category: instructionCategory.MISC,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'addiu $t, $s, 0'
            ]
        },
        usage: 'move $t, $s',
        result: 't = s',
        tags: 'copy'
    },
    {
        id: 'movn',
        assemblyName: 'movn',
        name: 'Move on Not Zero',
        description: 'Move a value if a register is not zero',
        category: instructionCategory.MISC,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: '-----',
            funct: '001011'
        },
        usage: 'movn $d, $s, $t',
        result: 'if (t != 0) d = s;'
    },
    {
        id: 'movz',
        assemblyName: 'movz',
        name: 'Move On Zero',
        description: 'Move a value if a register is zero',
        category: instructionCategory.MISC,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: '-----',
            funct: '001010'
        },
        usage: 'movz $d, $s, $t',
        result: 'if (t == 0) d = s;'
    },
    {
        id: 'movf',
        assemblyName: 'movf',
        name: 'Move on Floating Point Conditional False',
        description: 'Move a value if a floating point conditional is false',
        category: instructionCategory.MISC,
        instructionEncoding: {
            type: 'RC-Type',
            opcode: '000000',
            rs: 'sssss',
            cc: 'ccc',
            cond: '00',
            rd: 'ddddd',
            shamt: '-----',
            funct: '000001'
        },
        usage: 'movf $d, $s, cc',
        result: 'if (!floating point conditional cc) d = s;',
        notes: 'The condition code flag specifies which of the 8 condition codes to check. If it is omitted, 0 is the default.'
    },
    {
        id: 'movt',
        assemblyName: 'movt',
        name: 'Move on Floating Point Conditional True',
        description: 'Move a value if a floating point conditional is true',
        category: instructionCategory.MISC,
        instructionEncoding: {
            type: 'RC-Type',
            opcode: '000000',
            rs: 'sssss',
            cc: 'ccc',
            cond: '01',
            rd: 'ddddd',
            shamt: '-----',
            funct: '000001'
        },
        usage: 'movt $d, $s, cc',
        result: 'if (floating point conditional cc) d = s;',
        notes: 'The condition code flag specifies which of the 8 condition codes to check. If it is omitted, 0 is the default.'
    },
    {
        id: 'li',
        assemblyName: 'li',
        name: 'Load Immediate',
        description: 'Load an immediate value into a register',
        category: instructionCategory.MISC,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'lui $t, imm[31-16]',
                'ori $t, $t, imm[15-0]'
            ]
        },
        usage: 'li $t, imm',
        result: 't = imm',
        notes: 'Since this instruction is commonly used to initialize a register before first use, it is a good idea to leave a comment saying what the register will be used for or the meaning of the constant value.',
        tags: 'initialize constant'
    },
    {
        id: 'lui',
        assemblyName: 'lui',
        name: 'Load Upper Immediate',
        description: 'Load an immediate value into the upper 16 bits of a register',
        category: instructionCategory.MISC,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '001111',
            rs: '-----',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'lui $t, imm',
        result: 't = imm << 16'
    },
    {
        id: 'la',
        assemblyName: 'la',
        name: 'Load Address',
        description: 'Load a label\'s address into a register',
        category: instructionCategory.MISC,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'lui $t, label[31-16]',
                'ori $t, $t, label[15-0]'
            ]
        },
        usage: 'la $t, label',
        result: 't = label'
    },
    {
        id: 'syscall',
        assemblyName: 'syscall',
        name: 'Syscall',
        description: 'Request an operation from the system',
        category: instructionCategory.MISC,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: '-----',
            rt: '-----',
            rd: '-----',
            shamt: '-----',
            funct: '001100'
        },
        usage: 'syscall',
        result: '<depends>',
        notes: 'Syscall can be used for console IO, memory allocation, program termination, and other tasks. See syscall reference for details.'
    },
    {
        id: 'break',
        assemblyName: 'break',
        name: 'Break',
        description: 'Cause exception with specified code',
        category: instructionCategory.MISC,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: '-----',
            rt: '-----',
            rd: '-----',
            shamt: '-----',
            funct: '001101'
        },
        usage: 'break n',
        result: 'An exception is thrown with code n',
        notes: 'Code 1 is reserved for the debugger.'
    },
    {
        id: 'nop',
        assemblyName: 'nop',
        name: 'No Operation',
        description: 'Do nothing for a cycle',
        category: instructionCategory.MISC,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'sll $0, $0, 0'
            ]
        },
        usage: 'nop',
        result: '<no effect>',
        notes: 'Used to make the processor do nothing for a cycle. For example, a nop may be used after a branch to delay the next instruction until the branch result is computed. The equivalent instruction is a shift of 0 places on an unassignable register (which does nothing), and is easily identified by its binary encoding: 00000000000000000000000000000000.'
    },
    {
        id: 'add',
        assemblyName: 'add',
        name: 'Add',
        description: 'Add two registers',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: '-----',
            funct: '100000'
        },
        usage: 'add $d, $s, $t',
        result: 'd = s + t',
        tags: 'add addition plus'
    },
    {
        id: 'addu',
        assemblyName: 'addu',
        name: 'Add Unsigned',
        description: 'Add two registers without overflow',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: '-----',
            funct: '100001'
        },
        usage: 'addu $d, $s, $t',
        result: 'd = s + t',
        tags: 'add addition plus'
    },
    {
        id: 'addi',
        assemblyName: 'addi',
        name: 'Add Immediate',
        description: 'Add a register and an immediate',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '001000',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'addi $t, $s, imm',
        result: 't = s + imm',
        tags: 'add addition plus'
    },
    {
        id: 'addiu',
        assemblyName: 'addiu',
        name: 'Add Immediate Unsigned',
        description: 'Add a register and an immediate without overflow',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '001001',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'addiu $t, $s, imm',
        result: 't = s + imm',
        tags: 'add addition plus'
    },
    {
        id: 'sub',
        assemblyName: 'sub',
        name: 'Subtract',
        description: 'Subtract one register from another register',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: '-----',
            funct: '100010'
        },
        usage: 'sub $d, $s, $t',
        result: 'd = s - t',
        tags: 'sub subtraction minus'
    },
    {
        id: 'subu',
        assemblyName: 'subu',
        name: 'Subtract Unsigned',
        description: 'Subtract one register from another register without overflow',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: '-----',
            funct: '100011'
        },
        usage: 'subu $d, $s, $t',
        result: 'd = s - t',
        tags: 'sub subtraction minus'
    },
    {
        id: 'subi',
        assemblyName: 'sub',
        name: 'Subtract Immediate',
        description: 'Subtract an immediate from a register',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'addi $t, $s, -imm    # imm > -2^15',
                '',
                'ori $at, $0, imm     # imm == -2^15',
                'sub $t, $s, $at'
            ]
        },
        usage: 'sub $t, $s, imm',
        result: 't = s - imm',
        notes: 'MIPS does not provide a subtract immediate instruction because the immediate value can simply be negated by the assembler, and addi used instead. If the value is -2^15 (which cannot be nagated in 16 bit 2\'s complement), two equivalent instructions are needed. This instruction may also be available as subi in environments other than QtSpim.',
        tags: 'sub subtraction minus'
    },
    {
        id: 'subiu',
        assemblyName: 'subu',
        name: 'Subtract Immediate Unsigned',
        description: 'Subtract an immediate from a register without overflow',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'addiu $t, $s, -imm    # imm > -2^15',
                '',
                'ori $at, $0, imm      # imm == -2^15',
                'subu $t, $s, $at'
            ]
        },
        usage: 'subu $t, $s, imm',
        result: 't = s - imm',
        notes: 'MIPS does not provide a subtract immediate unsigned instruction because the immediate value can simply be negated by the assembler, and addiu used instead. If the value is -2^15 (which cannot be nagated in 16 bit 2\'s complement), two equivalent instructions are needed. This instruction may also be available as subiu in environments other than QtSpim.',
        tags: 'sub subtraction minus'
    },
    {
        id: 'mult',
        assemblyName: 'mult',
        name: 'Multiply',
        description: 'Multiply two integers',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: '-----',
            shamt: '-----',
            funct: '011000'
        },
        usage: 'mult $s, $t',
        result: '[HI, LO] = s * t',
        tags: 'multiply multiplication times'
    },
    {
        id: 'multu',
        assemblyName: 'multu',
        name: 'Multiply Unsigned',
        description: 'Multiply two integers (unsigned)',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: '-----',
            shamt: '-----',
            funct: '011001'
        },
        usage: 'multu $s, $t',
        result: '[HI, LO] = s * t',
        tags: 'multiply multiplication times'
    },
    {
        id: 'mul',
        assemblyName: 'mul',
        name: 'Multiply and return lower 32 bits',
        description: 'Multiply two integers, keeping only the lower 32 bits',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'mult $s, $t',
                'mflo $d'
            ]
        },
        usage: 'mul $d, $s, $t',
        result: 'd = s * t (lower 32 bits only)',
        tags: 'multiply multiplication times'
    },
    {
        id: 'div',
        assemblyName: 'div',
        name: 'Divide',
        description: 'Divide two integers',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: '-----',
            shamt: '-----',
            funct: '011010'
        },
        usage: 'div $s, $t',
        result: 'LO = s / t; HI = s % t',
        tags: 'divide division modulo modulus'
    },
    {
        id: 'divu',
        assemblyName: 'divu',
        name: 'Divide Unsigned',
        description: 'Divide two integers (unsigned)',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: '-----',
            rd: '-----',
            shamt: '00000',
            funct: '011011'
        },
        usage: 'divu $s, $t',
        result: 'LO = s / t; HI = s % t',
        tags: 'divide division'
    },
    {
        id: 'quotient',
        assemblyName: 'div',
        name: 'Divide and return the quotient',
        description: 'Divide two integers, returning only the quotient',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'div $s, $t',
                'mflo $d'
            ]
        },
        usage: 'div $d, $s, $t',
        result: 'd = s / t (whole part only)',
        tags: 'divide division'
    },
    {
        id: 'rem',
        assemblyName: 'rem',
        name: 'Divide and return the remainder',
        description: 'Divide two integers, returning only the remainder',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'div $s, $t',
                'mfhi $d'
            ]
        },
        usage: 'rem $d, $s, $t',
        result: 'd = s % t',
        tags: 'divide division modulo modulus'
    },
    {
        id: 'mfhi',
        assemblyName: 'mfhi',
        name: 'Move from HI',
        description: 'Move the value in HI to another register',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: '-----',
            rt: '-----',
            rd: 'ddddd',
            shamt: '-----',
            funct: '010000'
        },
        usage: 'mfhi $d',
        result: 'd = HI'
    },
    {
        id: 'mthi',
        assemblyName: 'mthi',
        name: 'Move to HI',
        description: 'Move the value in a register to HI',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: '-----',
            rd: '-----',
            shamt: '-----',
            funct: '010001'
        },
        usage: 'mthi $s',
        result: 'HI = s'
    },
    {
        id: 'mflo',
        assemblyName: 'mflo',
        name: 'Move from LO',
        description: 'Move the value in LO to a register',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: '-----',
            rt: '-----',
            rd: 'ddddd',
            shamt: '-----',
            funct: '010010'
        },
        usage: 'mflo $d',
        result: 'd = LO'
    },
    {
        id: 'mtlo',
        assemblyName: 'mtlo',
        name: 'Move to LO',
        description: 'Move the value in a register to LO',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: '-----',
            rd: '-----',
            shamt: '-----',
            funct: '010011'
        },
        usage: 'mtlo $s',
        result: 'LO = s'
    },
    {
        id: 'abs',
        assemblyName: 'abs',
        name: 'Absolute Value',
        description: 'Find the absolute value of an integer',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'addu $s, $0, $t',
                'bgez $t, 8',
                'sub $s, $0, $t'
            ]
        },
        usage: 'abs $s, $t',
        result: 's = |t|'
    },
    {
        id: 'neg',
        assemblyName: 'neg',
        name: 'Negate',
        description: 'Find the negation of an integer',
        category: instructionCategory.ARITHMETIC,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'sub $s, $0, $t'
            ]
        },
        usage: 'neg $s, $t',
        result: 's = -t'
    },
    {
        id: 'b',
        assemblyName: 'b',
        name: 'Branch Unconditionally',
        description: 'Branch with no condition',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'beq $0, $0, label'
            ]
        },
        usage: 'b label',
        result: 'PC = label;'
    },
    {
        id: 'bal',
        assemblyName: 'bal',
        name: 'Branch Unconditionally and Link',
        description: 'Branch with no condition and link',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'bgezal $0, label'
            ]
        },
        usage: 'bal label',
        result: 'RA = PC + 4; PC = label;'
    },
    {
        id: 'beq',
        assemblyName: 'beq',
        name: 'Branch on Equal',
        description: 'Branch if two registers have the same value',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '000100',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'beq $s, $t, label',
        result: 'if (s == t) PC = label;'
    },
    {
        id: 'beqi',
        assemblyName: 'beq',
        name: 'Branch on Equal to Immediate',
        description: 'Branch if a register is equal to an immediate',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'ori $at, $0, imm',
                'beq $t, $at, label'
            ]
        },
        usage: 'beq $t, imm, label',
        result: 'if (t == imm) PC = label;'
    },
    {
        id: 'beqz',
        assemblyName: 'beqz',
        name: 'Branch on Equal to Zero',
        description: 'Branch if a register is equal to zero',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'beq $s, $0, C'
            ]
        },
        usage: 'beqz $s, label',
        result: 'if (s == 0) PC = label;'
    },
    {
        id: 'bne',
        assemblyName: 'bne',
        name: 'Branch on not Equal',
        description: 'Branch if two registers do not have the same value',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '000101',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'bne $s, $t, label',
        result: 'if (s != t) PC = label;'
    },
    {
        id: 'bnei',
        assemblyName: 'bne',
        name: 'Branch on not Equal to Immediate',
        description: 'Branch if a register is not equal to an immediate',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'ori $at, $0, imm',
                'bne $t, $at, label'
            ]
        },
        usage: 'bne $t, imm, label',
        result: 'if (t != imm) PC = label;'
    },
    {
        id: 'bnez',
        assemblyName: 'bnez',
        name: 'Branch on not equal to Zero',
        description: 'Branch if a register is not equal to zero',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'bne $s, $0, C'
            ]
        },
        usage: 'bnez $s, label',
        result: 'if (s != 0) PC = label;'
    },
    {
        id: 'blt',
        assemblyName: 'blt',
        name: 'Branch Less Than',
        description: 'Branch if a register is less than another register',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'slt $at, $s, $t',
                'bne $at, $0, label'
            ]
        },
        usage: 'blt $s, $t, label',
        result: 'if (s < t) PC = label;'
    },
    {
        id: 'bltz',
        assemblyName: 'bltz',
        name: 'Branch on Less than Zero',
        description: 'Branch if a register is less than zero',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'RI-Type',
            opcode: '000001',
            rs: 'sssss',
            regimm: '00000',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'bltz $s, label',
        result: 'if (s < 0) PC = label;'
    },
    {
        id: 'bltzal',
        assemblyName: 'bltzal',
        name: 'Branch on Less than Zero and Link',
        description: 'Branch if a register is less zero and link',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'RI-Type',
            opcode: '000001',
            rs: 'sssss',
            regimm: '10000',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'bltzal $s, label',
        result: 'if (s < 0) {RA = PC + 4; PC = label;}'
    },
    {
        id: 'ble',
        assemblyName: 'ble',
        name: 'Branch Less Than or Equal',
        description: 'Branch if a register is less than or equal to another register',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'slt $at, $t, $s',
                'beq $at, $0, label'
            ]
        },
        usage: 'ble $s, $t, label',
        result: 'if (s <= t) PC = label;'
    },
    {
        id: 'blez',
        assemblyName: 'blez',
        name: 'Branch on Less than or Equal to Zero',
        description: 'Branch if a register is less than or equal to zero',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '000110',
            rs: 'sssss',
            rt: '-----',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'blez $s, label',
        result: 'if (s <= 0) PC = label;'
    },
    {
        id: 'bgt',
        assemblyName: 'bgt',
        name: 'Branch Greater Than',
        description: 'Branch if a register is greater than another register',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'slt $at, $t, $s',
                'bne $at, $0, label'
            ]
        },
        usage: 'bgt $s, $t, label',
        result: 'if (s > t) PC = label;'
    },
    {
        id: 'bgtz',
        assemblyName: 'bgtz',
        name: 'Branch on Greater than Zero',
        description: 'Branch if a register is greater than zero',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '000111',
            rs: 'sssss',
            rt: '-----',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'bgtz $s, label',
        result: 'if (s > 0) PC = label;'
    },
    {
        id: 'bgezal',
        assemblyName: 'bgezal',
        name: 'Branch on Greater than or Equal to Zero and Link',
        description: 'Branch if a register is greater than or equal to zero and link',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'RI-Type',
            opcode: '000001',
            rs: 'sssss',
            regimm: '10001',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'bgezal $s, label',
        result: 'if (s >= 0) {RA = PC + 4; PC = label;}'
    },
    {
        id: 'bge',
        assemblyName: 'bge',
        name: 'Branch Greater Than or Equal',
        description: 'Branch if a register is greater than or equal to another register',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'slt $at, $s, $t',
                'beq $at, $0, label'
            ]
        },
        usage: 'bge $s, $t, label',
        result: 'if (s >= t) PC = label;'
    },
    {
        id: 'bgez',
        assemblyName: 'bgez',
        name: 'Branch on Greater than or Equal to Zero',
        description: 'Branch if a register is  greater than or equal to zero',
        category: instructionCategory.BRANCH,
        instructionEncoding: {
            type: 'RI-Type',
            opcode: '000001',
            rs: 'sssss',
            regimm: '00001',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'bgez $s, label',
        result: 'if (s >= 0) PC = label;'
    },
    {
        id: 'and',
        assemblyName: 'and',
        name: 'Bitwise And',
        description: 'Bitwise and two registers',
        category: instructionCategory.LOGICAL,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: '00000',
            funct: '100100'
        },
        usage: 'and $d, $s, $t',
        result: 'd = s & t'
    },
    {
        id: 'andi',
        assemblyName: 'andi',
        name: 'Bitwise And Immediate',
        description: 'Bitwise and a register and an immediate',
        category: instructionCategory.LOGICAL,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '001100',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'andi $t, $s, imm',
        result: 't = s & imm'
    },
    {
        id: 'or',
        assemblyName: 'or',
        name: 'Bitwise Or',
        description: 'Bitwise or two registers',
        category: instructionCategory.LOGICAL,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: '00000',
            funct: '100101'
        },
        usage: 'or $d, $s, $t',
        result: 'd = s | t'
    },
    {
        id: 'ori',
        assemblyName: 'ori',
        name: 'Bitwise Or Immediate',
        description: 'Bitwise or a register and an immediate',
        category: instructionCategory.LOGICAL,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '001101',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'ori $t, $s, imm',
        result: 't = s | imm'
    },
    {
        id: 'xor',
        assemblyName: 'xor',
        name: 'Bitwise Exclusive Or',
        description: 'Bitwise exclusive or two registers',
        category: instructionCategory.LOGICAL,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: '00000',
            funct: '100110'
        },
        usage: 'xor $d, $s, $t',
        result: 'd = s ^ t'
    },
    {
        id: 'nor',
        assemblyName: 'nor',
        name: 'Bitwise Nor',
        description: 'Bitwise nor two registers',
        category: instructionCategory.LOGICAL,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: '00000',
            funct: '100111‬'
        },
        usage: 'nor $d, $s, $t',
        result: 'd = ~(s | t)'
    },
    {
        id: 'not',
        assemblyName: 'not',
        name: 'Bitwise Not',
        description: 'Bitwise not a register',
        category: instructionCategory.LOGICAL,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'nor $s, $t, $0'
            ]
        },
        usage: 'not $s, $t',
        result: 's = ~(t)'
    },
    {
        id: 'xori',
        assemblyName: 'xori',
        name: 'Bitwise Exclusive Or Immediate',
        description: 'Bitwise exclusive or a register and an immediate',
        category: instructionCategory.LOGICAL,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '001110',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'xori $t, $s, imm',
        result: 't = s ^ imm'
    },
    {
        id: 'j',
        assemblyName: 'j',
        name: 'Jump',
        description: 'Jump to a specified label',
        category: instructionCategory.JUMP,
        instructionEncoding: {
            type: 'J-Type',
            opcode: '000010',
            addr: 'aaaaaaaaaaaaaaaaaaaaaaaaaa'
        },
        usage: 'j label',
        result: 'PC = label;'
    },
    {
        id: 'jal',
        assemblyName: 'jal',
        name: 'Jump and Link',
        description: 'Jump to a specified label and link',
        category: instructionCategory.JUMP,
        instructionEncoding: {
            type: 'J-Type',
            opcode: '000011',
            addr: 'aaaaaaaaaaaaaaaaaaaaaaaaaa'
        },
        usage: 'jal label',
        result: 'RA = PC + 4; PC = label;'
    },
    {
        id: 'jr',
        assemblyName: 'jr',
        name: 'Jump Register',
        description: 'Jump to the address in a register',
        category: instructionCategory.JUMP,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: '-----',
            rd: '-----',
            shamt: '-----',
            funct: '001000'
        },
        usage: 'jr $s',
        result: 'PC = s;'
    },
    {
        id: 'jalr',
        assemblyName: 'jalr',
        name: 'Jump Register and Link',
        description: 'Jump to the address in a register and link',
        category: instructionCategory.JUMP,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: '-----',
            rd: 'ddddd',
            shamt: '-----',
            funct: '001001'
        },
        usage: 'jalr $s, $d',
        result: 'd = PC + 4; PC = s;'
    },
    {
        id: 'lb',
        assemblyName: 'lb',
        name: 'Load Byte',
        description: 'Load a (sign-extended) byte from memory to a register',
        category: instructionCategory.MEMORY,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '100000',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'lb $t, imm($s)',
        result: 't = memory[s + imm]'
    },
    {
        id: 'lbu',
        assemblyName: 'lbu',
        name: 'Load Byte Unsigned',
        description: 'Load a (zero-padded) byte from memory to a register',
        category: instructionCategory.MEMORY,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '100100',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'lbu $t, imm($s)',
        result: 't = memory[s + imm]'
    },
    {
        id: 'lh',
        assemblyName: 'lh',
        name: 'Load Half Word',
        description: 'Load a (sign-extended) half word from memory to a register',
        category: instructionCategory.MEMORY,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '100001',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'lh $t, imm($s)',
        result: 't = memory[s + imm]'
    },
    {
        id: 'lhu',
        assemblyName: 'lhu',
        name: 'Load Half Word Unsigned',
        description: 'Load a (zero-padded) half word from memory to a register',
        category: instructionCategory.MEMORY,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '100101',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'lhu $t, imm($s)',
        result: 't = memory[s + imm]'
    },
    {
        id: 'lw',
        assemblyName: 'lw',
        name: 'Load Word',
        description: 'Load a word from memory to a register',
        category: instructionCategory.MEMORY,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '100011',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'lw $t, imm($s)',
        result: 't = memory[s + imm]',
        notes: 'Getting an unaligned address error with load word? The address must be aligned with a word boundary (i.e. it must be a multiple of 4). Double check the math you used to calculate the address, and check if you need to add a .align directive in your .data section.'
    },
    {
        id: 'lw-label',
        assemblyName: 'lw',
        name: 'Load Word Label',
        description: 'Load a word from memory to a register by label',
        category: instructionCategory.MEMORY,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'lui $at, label[31-16]',
                'ori $at, $at, label[15-0]',
                'lw $t, 0($at)'
            ]
        },
        usage: 'lw $t, label',
        result: 't = memory[label]',
        notes: 'Getting an unaligned address error with load word? The address must be aligned with a word boundary (i.e. it must be a multiple of 4). Check if you need to add a .align directive in your .data section.'
    },
    {
        id: 'sb',
        assemblyName: 'sb',
        name: 'Store Byte',
        description: 'Store a byte from a register to memory',
        category: instructionCategory.MEMORY,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '101000',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'sb $t, imm($s)',
        result: 'memory[s + imm] = t'
    },
    {
        id: 'sh',
        assemblyName: 'sh',
        name: 'Store Half Word',
        description: 'Store a half word from a register to memory',
        category: instructionCategory.MEMORY,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '101000',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'sh $t, imm($s)',
        result: 'memory[s + imm] = t'
    },
    {
        id: 'sw',
        assemblyName: 'sw',
        name: 'Store Word',
        description: 'Store a word from a register to memory',
        category: instructionCategory.MEMORY,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '101011',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'sw $t, imm($s)',
        result: 'memory[s + imm] = t',
        notes: 'Getting an unaligned address error with store word? The address must be aligned with a word boundary (i.e. it must be a multiple of 4). Double check the math you used to calculate the address, and check if you need to add a .align directive in your .data section.'
    },
    {
        id: 'sw-label',
        assemblyName: 'sw',
        name: 'Store Word Label',
        description: 'Store a word from a register to memory by label',
        category: instructionCategory.MEMORY,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'lui $at, label[31-16]',
                'ori $at, $at, label[15-0]',
                'sw $t, 0($at)'
            ]
        },
        usage: 'sw $t, label',
        result: 'memory[label] = t',
        notes: 'Getting an unaligned address error with store word? The address must be aligned with a word boundary (i.e. it must be a multiple of 4). Check if you need to add a .align directive in your .data section.'
    },
    {
        id: 'seq',
        assemblyName: 'seq',
        name: 'Set on Equal',
        description: 'Check is a register is equal to than another register',
        category: instructionCategory.COMPARISON,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'beq $s, $t, 12',
                'ori $d, $0, 0',
                'beq $0, $0, 8',
                'ori $d, $0, 1'
            ]
        },
        usage: 'seq $d, $s, $t',
        result: 'd = s == t'
    },
    {
        id: 'sne',
        assemblyName: 'sne',
        name: 'Set on Not Equal',
        description: 'Check is a register is not equal to than another register',
        category: instructionCategory.COMPARISON,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'beq $s, $t, 12',
                'ori $d, $0, 1',
                'beq $0, $0, 8',
                'ori $d, $0, 0'
            ]
        },
        usage: 'sne $d, $s, $t',
        result: 'd = s != t'
    },
    {
        id: 'slt',
        assemblyName: 'slt',
        name: 'Set on Less Than',
        description: 'Check is a register is less than another register',
        category: instructionCategory.COMPARISON,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: '-----',
            funct: '101010'
        },
        usage: 'slt $d, $s, $t',
        result: 'd = s < t'
    },
    {
        id: 'sltu',
        assemblyName: 'sltu',
        name: 'Set on Less Than Unsigned',
        description: 'Check is a register is less than another register (unsigned)',
        category: instructionCategory.COMPARISON,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: '-----',
            funct: '101011'
        },
        usage: 'sltu $d, $s, $t',
        result: 'd = s < t'
    },
    {
        id: 'slti',
        assemblyName: 'slti',
        name: 'Set on Less Than Immediate',
        description: 'Check is a register is less than an immediate',
        category: instructionCategory.COMPARISON,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '001010',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'slti $s, $t, imm',
        result: 's = t < imm'
    },
    {
        id: 'sltiu',
        assemblyName: 'sltiu',
        name: 'Set on Less Than Immediate Unsigned',
        description: 'Check is a register is less than an immediate (unsigned)',
        category: instructionCategory.COMPARISON,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '001011',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'sltiu $s, $t, imm',
        result: 's = t < imm'
    },
    {
        id: 'sle',
        assemblyName: 'sle',
        name: 'Set on Less Than or Equal',
        description: 'Check is a register is less than or equal to than another register',
        category: instructionCategory.COMPARISON,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'bne $s, $t, 12',
                'ori $d, $0, 1',
                'beq $0, $0, 8',
                'slt $d, $s, $t'
            ]
        },
        usage: 'sle $d, $s, $t',
        result: 'd = s <= t'
    },
    {
        id: 'sleu',
        assemblyName: 'sleu',
        name: 'Set on Less Than or Equal Unsigned',
        description: 'Check is a register is less than or equal to than another register (unsigned)',
        category: instructionCategory.COMPARISON,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'bne $s, $t, 12',
                'ori $d, $0, 1',
                'beq $0, $0, 8',
                'sltu $d, $s, $t'
            ]
        },
        usage: 'sleu $d, $s, $t',
        result: 'd = s <= t'
    },
    {
        id: 'sgt',
        assemblyName: 'sgt',
        name: 'Set on Greater Than',
        description: 'Check is a register is greater than another register',
        category: instructionCategory.COMPARISON,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'slt $d, $t, $s'
            ]
        },
        usage: 'sgt $d, $s, $t',
        result: 'd = s > t'
    },
    {
        id: 'sgtu',
        assemblyName: 'sgtu',
        name: 'Set on Greater Than Unsigned',
        description: 'Check is a register is greater than another register (unsigned)',
        category: instructionCategory.COMPARISON,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'sltu $d, $t, $s'
            ]
        },
        usage: 'sgtu $d, $s, $t',
        result: 'd = s > t'
    },
    {
        id: 'sge',
        assemblyName: 'sge',
        name: 'Set on Greater Than or Equal',
        description: 'Check is a register is greater than or equal to than another register',
        category: instructionCategory.COMPARISON,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'bne $s, $t, 12',
                'ori $d, $0, 1',
                'beq $0, $0, 8',
                'slt $d, $t, $s'
            ]
        },
        usage: 'sge $d, $s, $t',
        result: 'd = s >= t'
    },
    {
        id: 'sgeu',
        assemblyName: 'sgeu',
        name: 'Set on Greater Than or Equal Unsigned',
        description: 'Check is a register is greater than or equal to than another register (unsigned)',
        category: instructionCategory.COMPARISON,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'bne $s, $t, 12',
                'ori $d, $0, 1',
                'beq $0, $0, 8',
                'sltu $d, $t, $s'
            ]
        },
        usage: 'sgeu $d, $s, $t',
        result: 'd = s >= t'
    },
    {
        id: 'sllv',
        assemblyName: 'sllv',
        name: 'Shift Left Logical',
        description: 'Shift the contents of a register left by an amount from a register',
        category: instructionCategory.SHIFT,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: '-----',
            funct: '000100'
        },
        usage: 'sllv $d, $t, $s',
        result: 'd = t << s',
        notes: "Only the least significant 5 bits of $s are used."
    },
    {
        id: 'sll',
        assemblyName: 'sll',
        name: 'Shift Left Logical Immediate',
        description: 'Shift the contents of a register left by an immediate amount',
        category: instructionCategory.SHIFT,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: '-----',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: 'iiiii',
            funct: '000000'
        },
        usage: 'sll $d, $t, imm',
        result: 'd = t << imm'
    },
    {
        id: 'srlv',
        assemblyName: 'srlv',
        name: 'Shift Right Logical',
        description: 'Shift the contents of a register right by an amount from a register (zero-padded)',
        category: instructionCategory.SHIFT,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: '-----',
            funct: '000110'
        },
        usage: 'srlv $d, $t, $s',
        result: 'd = t >> s',
        notes: "Only the least significant 5 bits of $s are used."
    },
    {
        id: 'srl',
        assemblyName: 'srl',
        name: 'Shift Right Logical Immediate',
        description: 'Shift the contents of a register right by an immediate amount (zero-padded)',
        category: instructionCategory.SHIFT,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: '-----',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: 'iiiii',
            funct: '000010'
        },
        usage: 'srl $d, $t, imm',
        result: 'd = t >> imm'
    },
    {
        id: 'srav',
        assemblyName: 'srav',
        name: 'Shift Right Arithmetic',
        description: 'Shift the contents of a register right by an amount from a register (sign-extended)',
        category: instructionCategory.SHIFT,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: '-----',
            funct: '000111'
        },
        usage: 'srav $d, $t, $s',
        result: 'd = t >> s',
        notes: "Only the least significant 5 bits of $s are used."
    },
    {
        id: 'sra',
        assemblyName: 'sra',
        name: 'Shift Right Arithmetic Immediate',
        description: 'Shift the contents of a register right by the specified number of places (sign-extended)',
        category: instructionCategory.SHIFT,
        instructionEncoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: '-----',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: 'iiiii',
            funct: '000011'
        },
        usage: 'sra $d, $t, imm',
        result: 'd = t >> imm'
    },
    {
        id: 'rol',
        assemblyName: 'rol',
        name: 'Rotate Left',
        description: 'Rotate the contents of a register left by an amount from a register',
        category: instructionCategory.SHIFT,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'subu $at, $0, $s',
                'srlv $at, $t, $at',
                'sllv $d, $s, $t',
                'or $d, $d, $at'
            ]
        },
        usage: 'rol $d, $t, $s',
        result: 'd = rotateLeft(t, s)',
        notes: "Only the least significant 5 bits of $s are used.",
        tags: 'circular shift'
    },
    {
        id: 'ror',
        assemblyName: 'ror',
        name: 'Rotate Right',
        description: 'Rotate the contents of a register right by an amount from a register',
        category: instructionCategory.SHIFT,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'subu $at, $0, $s',
                'sllv $at, $t, $at',
                'srlv $d, $s, $t',
                'or $d, $d, $at'
            ]
        },
        usage: 'rol $d, $t, $s',
        result: 'd = rotateRight(t, s)',
        notes: "Only the least significant 5 bits of $s are used.",
        tags: 'circular shift'
    },
    {
        id: 'roli',
        assemblyName: 'rol',
        name: 'Rotate Left Immediate',
        description: 'Rotate the contents of a register left by the specified number of places',
        category: instructionCategory.SHIFT,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'srl $at, $t, (32 - imm)',
                'sll $d, $t, imm',
                'or $d, $d, $at'
            ]
        },
        usage: 'rol $d, $t, imm',
        result: 'd = rotateLeft(t, imm)',
        tags: 'circular shift'
    },
    {
        id: 'rori',
        assemblyName: 'ror',
        name: 'Rotate Right Immediate',
        description: 'Rotate the contents of a register right by the specified number of places',
        category: instructionCategory.SHIFT,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'sll $at, $t, (32 - imm)',
                'srl $d, $t, imm',
                'or $d, $d, $at'
            ]
        },
        usage: 'rol $d, $t, imm',
        result: 'd = rotateRight(t, imm)',
        tags: 'circular shift'
    },
    {
        id: 'mtc1',
        assemblyName: 'mtc1',
        name: 'Move to Coprocessor 1',
        description: 'Move a value from a general-purpose register to a floating point register',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'COP-Type',
            opcode: '‭010001',
            funct: '00100',
            rt: 'ttttt',
            rd: 'ddddd',
            addr: '-----------'
        },
        usage: 'mtc1 $t, $d',
        result: 'd = t',
        notes: 'The first argument is the register from the main processor, the second is the register from the coprocessor. Unlike most MIPS instructions, the destination of the operation is not listed first.'
    },
    {
        id: 'mfc1',
        assemblyName: 'mfc1',
        name: 'Move from Coprocessor 1',
        description: 'Move a value from a floating point register to a general-purpose register',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'COP-Type',
            opcode: '‭010001',
            funct: '00000',
            rt: 'ttttt',
            rd: 'ddddd',
            addr: '-----------'
        },
        usage: 'mtc1 $t, $d',
        result: 't = d',
        notes: 'The first argument is the register from the main processor, the second is the register from the coprocessor.'
    },
    {
        id: 'mov-s',
        assemblyName: 'mov.s',
        name: 'Floating Point Move Single',
        description: 'Move a single-precision float to another register',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '00000',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '000110'
        },
        usage: 'mov.s $d, $s',
        result: 'd = s',
        tags: 'copy'
    },
    {
        id: 'mov-d',
        assemblyName: 'mov.d',
        name: 'Floating Point Move Double',
        description: 'Move a double-precision float to another register',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '00001',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '000110'
        },
        usage: 'mov.d $d, $s',
        result: 'd = s',
        tags: 'copy'
    },
    {
        id: 'movz-s',
        assemblyName: 'movz.s',
        name: 'Floating Point Move on Zero Single',
        description: 'Move a single-precision float if another register is zero',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '‭010000',
            ft : 'ttttt',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '‭010010'
        },
        usage: 'movz.s $d, $s, $t',
        result: 'if (t == 0) d = s;',
        tags: 'copy'
    },
    {
        id: 'movz-d',
        assemblyName: 'movz.d',
        name: 'Floating Point Move on Zero Double',
        description: 'Move a double-precision float if another register is zero',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '‭010001',
            ft : 'ttttt',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '‭010010‬'
        },
        usage: 'movz.d $d, $s, $t',
        result: 'if (t == 0) d = s;',
        tags: 'copy'
    },
    {
        id: 'movn-s',
        assemblyName: 'movn.s',
        name: 'Floating Point Move on Not Zero Single',
        description: 'Move a single-precision float if another register is not zero',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '‭010000',
            ft : 'ttttt',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '‭010011‬'
        },
        usage: 'movn.s $d, $s, $t',
        result: 'if (t != 0) d = s;',
        tags: 'copy'
    },
    {
        id: 'movn-d',
        assemblyName: 'movn.d',
        name: 'Floating Point Move on Not Zero Double',
        description: 'Move a double-precision float if another register is not zero',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '‭010001',
            ft : 'ttttt',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '‭010011‬'
        },
        usage: 'movn.d $d, $s, $t',
        result: 'if (t != 0) d = s;',
        tags: 'copy'
    },
    {
        id: 'cvt-s-w',
        assemblyName: 'cvt.s.w',
        name: 'Convert Word to Single',
        description: 'Convert an integer to a single-precision float',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '10100',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '100000‬'
        },
        usage: 'cvt.s.w $d, $s',
        result: 'd = (float) s'
    },
    {
        id: 'cvt-d-w',
        assemblyName: 'cvt.d.w',
        name: 'Convert Word to Double',
        description: 'Convert an integer to a double-precision float',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '10001',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '100001‬'
        },
        usage: 'cvt.d.w $d, $s',
        result: 'd = (double) s'
    },
    {
        id: 'cvt-w-s',
        assemblyName: 'cvt.w.s',
        name: 'Convert Single to Word',
        description: 'Convert a single-precision float to an integer',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '10000',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '100100‬'
        },
        usage: 'cvt.w.s $d, $s',
        result: 'd = (int) s'
    },
    {
        id: 'cvt-d-s',
        assemblyName: 'cvt.d.s',
        name: 'Convert Single to Double',
        description: 'Convert a single-precision float to a double-precision float',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '10000',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '100001‬'
        },
        usage: 'cvt.d.s $d, $s',
        result: 'd = (double) s'
    },
    {
        id: 'cvt-w-d',
        assemblyName: 'cvt.w.d',
        name: 'Convert Double to Word',
        description: 'Convert a double-precision float to an integer',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '10001',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '100100‬'
        },
        usage: 'cvt.w.d $d, $s',
        result: 'd = (int) s'
    },
    {
        id: 'cvt-s-d',
        assemblyName: 'cvt.s.d',
        name: 'Convert Double to Single',
        description: 'Convert a double-precision float to a single-precision float',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '10001',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '100000‬'
        },
        usage: 'cvt.s.d $d, $s',
        result: 'd = (float) s'
    },
    {
        id: 'round-w-s',
        assemblyName: 'round.w.s',
        name: 'Floating Point Round to Word Single',
        description: 'Round a single-precision float to an integer',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '00000',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '‭001100‬'
        },
        usage: 'round.w.s $d, $s',
        result: 'd = round(s)'
    },
    {
        id: 'round-w-d',
        assemblyName: 'round.w.d',
        name: 'Floating Point Round to Word Double',
        description: 'Round a double-precision float to an integer',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '00001',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '‭001100‬'
        },
        usage: 'round.w.d $d, $s',
        result: 'd = round(s)'
    },
    {
        id: 'trunc-w-s',
        assemblyName: 'trunc.w.s',
        name: 'Floating Point Truncate to Word Single',
        description: 'Truncate a single-precision float to an integer',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '00000',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '‭001101‬'
        },
        usage: 'trunc.w.s $d, $s',
        result: 'd = trunc(s)'
    },
    {
        id: 'trunc-w-d',
        assemblyName: 'trunc.w.d',
        name: 'Floating Point Truncate to Word Double',
        description: 'Truncate a double-precision float to an integer',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '00001',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '‭001101‬'
        },
        usage: 'trunc.w.d $d, $s',
        result: 'd = trunc(s)'
    },
    {
        id: 'ceil-w-s',
        assemblyName: 'ceil.w.s',
        name: 'Floating Point Ceiling to Word Single',
        description: 'Calculate the ceiling of a single-precision float as an integer',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '00000',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '00‭1110‬'
        },
        usage: 'ceil.w.s $d, $s',
        result: 'd = ⌈s⌉'
    },
    {
        id: 'ceil-w-d',
        assemblyName: 'ceil.w.d',
        name: 'Floating Point Ceiling to Word Double',
        description: 'Calculate the ceiling of a double-precision float as an integer',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '00001',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '00‭1110‬'
        },
        usage: 'ceil.w.d $d, $s',
        result: 'd = ⌈s⌉'
    },
    {
        id: 'floor-w-s',
        assemblyName: 'floor.w.s',
        name: 'Floating Point Floor to Word Single',
        description: 'Calculate the floor of a single-precision float as an integer',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '00000',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '00‭1111'
        },
        usage: 'floor.w.s $d, $s',
        result: 'd = ⌊s⌋'
    },
    {
        id: 'floor-w-d',
        assemblyName: 'floor.w.d',
        name: 'Floating Point Floor to Word Double',
        description: 'Calculate the floor of a double-precision float as an integer',
        category: instructionCategory.FLOAT_MOVE_AND_CONVERT,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '00001',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '00‭1111‬'
        },
        usage: 'floor.w.d $d, $s',
        result: 'd = ⌊s⌋'
    },
    {
        id: 'add-s',
        assemblyName: 'add.s',
        name: 'Floating Point Addition Single',
        description: 'Calculate the sum of two single-precision floats',
        category: instructionCategory.FLOAT_ARITHMETIC,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '‭010000',
            ft : 'sssss',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '000000'
        },
        usage: 'add.s $d, $s, $t',
        result: 'd = s + t',
        tags: 'add addition plus'
    },
    {
        id: 'add-d',
        assemblyName: 'add.d',
        name: 'Floating Point Addition Double',
        description: 'Calculate the sum of two double-precision floats',
        category: instructionCategory.FLOAT_ARITHMETIC,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '‭010001',
            ft : 'sssss',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '000000'
        },
        usage: 'add.d $d, $s, $t',
        result: 'd = s + t',
        tags: 'addition plus'
    },
    {
        id: 'sub-s',
        assemblyName: 'sub.s',
        name: 'Floating Point Subtraction Single',
        description: 'Calculate the difference of two single-precision floats',
        category: instructionCategory.FLOAT_ARITHMETIC,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '‭010000',
            ft : 'sssss',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '000001'
        },
        usage: 'sub.s $d, $s, $t',
        result: 'd = s - t',
        tags: 'subtraction minus'
    },
    {
        id: 'sub-d',
        assemblyName: 'sub.d',
        name: 'Floating Point Subtraction Double',
        description: 'Calculate the difference of two double-precision floats',
        category: instructionCategory.FLOAT_ARITHMETIC,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '‭010001',
            ft : 'sssss',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '000001'
        },
        usage: 'sub.d $d, $s, $t',
        result: 'd = s - t',
        tags: 'subtraction minus'
    },
    {
        id: 'mul-s',
        assemblyName: 'mul.s',
        name: 'Floating Point Multiplication Single',
        description: 'Calculate the product of two single-precision floats',
        category: instructionCategory.FLOAT_ARITHMETIC,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '‭010000',
            ft : 'sssss',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '000010'
        },
        usage: 'mul.s $d, $s, $t',
        result: 'd = s * t',
        tags: 'multiply multiplication times'
    },
    {
        id: 'mul-d',
        assemblyName: 'mul.d',
        name: 'Floating Point Multiplication Double',
        description: 'Calculate the product of two double-precision floats',
        category: instructionCategory.FLOAT_ARITHMETIC,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '‭010001',
            ft : 'sssss',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '000010'
        },
        usage: 'mul.d $d, $s, $t',
        result: 'd = s * t',
        tags: 'multiply multiplication times'
    },
    {
        id: 'div-s',
        assemblyName: 'div.s',
        name: 'Floating Point Division Single',
        description: 'Calculate the quotient of two single-precision floats',
        category: instructionCategory.FLOAT_ARITHMETIC,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '‭010000',
            ft : 'sssss',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '000011'
        },
        usage: 'div.s $d, $s, $t',
        result: 'd = s / t',
        tags: 'divide division'
    },
    {
        id: 'div-d',
        assemblyName: 'div.d',
        name: 'Floating Point Division Double',
        description: 'Calculate the quotient of two double-precision floats',
        category: instructionCategory.FLOAT_ARITHMETIC,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '‭010001',
            ft : 'sssss',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '000011'
        },
        usage: 'div.d $d, $s, $t',
        result: 'd = s / t',
        tags: 'divide division'
    },
    {
        id: 'sqrt-s',
        assemblyName: 'sqrt.s',
        name: 'Floating Point Square Root Single',
        description: 'Calculate the square root of a single-precision float',
        category: instructionCategory.FLOAT_ARITHMETIC,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '‭010000',
            ft : 'sssss',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '000100'
        },
        usage: 'sqrt.s $d, $s',
        result: 'd = sqrt(s)'
    },
    {
        id: 'sqrt-d',
        assemblyName: 'sqrt.d',
        name: 'Floating Point Square Root Double',
        description: 'Calculate the square root of a double-precision float',
        category: instructionCategory.FLOAT_ARITHMETIC,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '‭010001',
            ft : 'sssss',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '000100'
        },
        usage: 'sqrt.d $d, $s',
        result: 'd = sqrt(s)'
    },
    {
        id: 'abs-s',
        assemblyName: 'abs.s',
        name: 'Floating Point Absolute Value Single',
        description: 'Calculate the absolute value of a single-precision float',
        category: instructionCategory.FLOAT_ARITHMETIC,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '00000',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '000101'
        },
        usage: 'abs.s $d, $s',
        result: 'd = |s|'
    },
    {
        id: 'abs-d',
        assemblyName: 'abs.d',
        name: 'Floating Point Absolute Value Double',
        description: 'Calculate the absolute value of a double-precision float',
        category: instructionCategory.FLOAT_ARITHMETIC,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '00001',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '000101'
        },
        usage: 'abs.d $d, $s',
        result: 'd = |s|'
    },
    {
        id: 'neg-s',
        assemblyName: 'neg.s',
        name: 'Floating Point Negation Single',
        description: 'Calculate the negation of a single-precision float',
        category: instructionCategory.FLOAT_ARITHMETIC,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '00000',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '000111'
        },
        usage: 'neg.s $d, $s',
        result: 'd = -s'
    },
    {
        id: 'neg-d',
        assemblyName: 'neg.d',
        name: 'Floating Point Negation Double',
        description: 'Calculate the negation of a double-precision float',
        category: instructionCategory.FLOAT_ARITHMETIC,
        instructionEncoding: {
            type: 'F-Type',
            opcode: '‭010001',
            format: '00001',
            ft : '-----',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '000111'
        },
        usage: 'neg.d $d, $s',
        result: 'd = -s'
    },
    {
        id: 'c-eq-s',
        assemblyName: 'c.eq.s',
        name: 'Floating Point Compare Equal Single',
        description: 'Check if two single-precision floats are equal',
        category: instructionCategory.FLOAT_CONDITIONAL,
        instructionEncoding: {
            type: 'FCT-Type',
            opcode: '‭010001',
            format: '10000',
            ft: 'ttttt',
            fs : 'sssss',
            cc: 'ccc',
            cond: '--',
            fc: '11',
            funct: '0010',
        },
        usage: 'c.eq.s cc, $s, $t',
        result: 'conditional cc = s == t',
        notes: 'The condition code flag specifies which of the 8 condition codes to store the result in. If it is omitted, 0 is the default.'
    },
    {
        id: 'c-eq-d',
        assemblyName: 'c.eq.d',
        name: 'Floating Point Compare Equal Double',
        description: 'Check if two double-precision floats are equal',
        category: instructionCategory.FLOAT_CONDITIONAL,
        instructionEncoding: {
            type: 'FCT-Type',
            opcode: '‭010001',
            format: '10001',
            ft: 'ttttt',
            fs : 'sssss',
            cc: 'ccc',
            cond: '--',
            fc: '11',
            funct: '0010',
        },
        usage: 'c.eq.d cc, $s, $t',
        result: 'conditional cc = s == t',
        notes: 'The condition code flag specifies which of the 8 condition codes to store the result in. If it is omitted, 0 is the default.'
    },
    {
        id: 'c-le-s',
        assemblyName: 'c.le.s',
        name: 'Floating Point Compare Less Than or Equal Single',
        description: 'Check if a single-precision float is less than or equal to another single',
        category: instructionCategory.FLOAT_CONDITIONAL,
        instructionEncoding: {
            type: 'FCT-Type',
            opcode: '‭010001',
            format: '10000',
            ft: 'ttttt',
            fs : 'sssss',
            cc: 'ccc',
            cond: '--',
            fc: '11',
            funct: '1110‬',
        },
        usage: 'c.le.s cc, $s, $t',
        result: 'conditional cc = s <= t',
        notes: 'The condition code flag specifies which of the 8 condition codes to store the result in. If it is omitted, 0 is the default.'
    },
    {
        id: 'c-le-d',
        assemblyName: 'c.le.d',
        name: 'Floating Point Compare Less Than or Equal Double',
        description: 'Check if a double-precision float is less than or equal to another double',
        category: instructionCategory.FLOAT_CONDITIONAL,
        instructionEncoding: {
            type: 'FCT-Type',
            opcode: '‭010001',
            format: '10001',
            ft: 'ttttt',
            fs : 'sssss',
            cc: 'ccc',
            cond: '--',
            fc: '11',
            funct: '1110‬',
        },
        usage: 'c.le.d cc, $s, $t',
        result: 'conditional cc = s <= t',
        notes: 'The condition code flag specifies which of the 8 condition codes to store the result in. If it is omitted, 0 is the default.'
    },
    {
        id: 'c-lt-s',
        assemblyName: 'c.lt.s',
        name: 'Floating Point Compare Less Than Single',
        description: 'Check if a single-precision float is less than another single',
        category: instructionCategory.FLOAT_CONDITIONAL,
        instructionEncoding: {
            type: 'FCT-Type',
            opcode: '‭010001',
            format: '10000',
            ft: 'ttttt',
            fs : 'sssss',
            cc: 'ccc',
            cond: '--',
            fc: '11',
            funct: '1100‬',
        },
        usage: 'c.lt.s cc, $s, $t',
        result: 'conditional cc = s < t',
        notes: 'The condition code flag specifies which of the 8 condition codes to store the result in. If it is omitted, 0 is the default.'
    },
    {
        id: 'c-lt-d',
        assemblyName: 'c.lt.d',
        name: 'Floating Point Compare Less Than Double',
        description: 'Check if a double-precision float is less than another double',
        category: instructionCategory.FLOAT_CONDITIONAL,
        instructionEncoding: {
            type: 'FCT-Type',
            opcode: '‭010001',
            format: '10001',
            ft: 'ttttt',
            fs : 'sssss',
            cc: 'ccc',
            cond: '--',
            fc: '11',
            funct: '1100‬',
        },
        usage: 'c.lt.d cc, $s, $t',
        result: 'conditional cc = s < t',
        notes: 'The condition code flag specifies which of the 8 condition codes to store the result in. If it is omitted, 0 is the default.'
    },
    {
        id: 'bc1f',
        assemblyName: 'bc1f',
        name: 'Branch on Conditional False',
        description: 'Branch if a floating point conditional is false',
        category: instructionCategory.FLOAT_CONDITIONAL,
        instructionEncoding: {
            type: 'IC-Type',
            opcode: '‭010001',
            format: '‭001000',
            cc: 'ccc',
            cond: '00',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'bc1f cc label',
        result: 'if (!conditional cc) PC = label;',
        notes: 'The condition code flag specifies which of the 8 condition codes to check. If it is omitted, 0 is the default.'
    },
    {
        id: 'bc1t',
        assemblyName: 'bc1t',
        name: 'Branch on Conditional True',
        description: 'Branch if a floating point conditional is true',
        category: instructionCategory.FLOAT_CONDITIONAL,
        instructionEncoding: {
            type: 'IC-Type',
            opcode: '‭010001',
            format: '‭001000',
            cc: 'ccc',
            cond: '01',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'bc1t cc label',
        result: 'if (conditional cc) PC = label;',
        notes: 'The condition code flag specifies which of the 8 condition codes to check. If it is omitted, 0 is the default.'
    },
    {
        id: 'movf-s',
        assemblyName: 'movf.s',
        name: 'Floating Point Move on Conditional False Single',
        description: 'Move a single-precision float to another register if a conditional is false',
        category: instructionCategory.FLOAT_CONDITIONAL,
        instructionEncoding: {
            type: 'FCO-Type',
            opcode: '‭010001',
            format: '‭010000',
            cc: 'ccc',
            cond: '00',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '010001'
        },
        usage: 'movf.s $fd, $fs, cc',
        result: 'if (!conditional cc) d = s;',
        notes: 'The condition code flag specifies which of the 8 condition codes to check. If it is omitted, 0 is the default.'
    },
    {
        id: 'movf-d',
        assemblyName: 'movf.d',
        name: 'Floating Point Move on Conditional False Double',
        description: 'Move a double-precision float to another register if a conditional is false',
        category: instructionCategory.FLOAT_CONDITIONAL,
        instructionEncoding: {
            type: 'FCO-Type',
            opcode: '‭010001',
            format: '‭010001',
            cc: 'ccc',
            cond: '00',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '010001'
        },
        usage: 'movf.s $fd, $fs, cc',
        result: 'if (!conditional cc) d = s;',
        notes: 'The condition code flag specifies which of the 8 condition codes to check. If it is omitted, 0 is the default.'
    },
    {
        id: 'movt-s',
        assemblyName: 'movt.s',
        name: 'Floating Point Move on Conditional True Single',
        description: 'Move a single-precision float to another register if a conditional is true',
        category: instructionCategory.FLOAT_CONDITIONAL,
        instructionEncoding: {
            type: 'FCO-Type',
            opcode: '‭010001',
            format: '‭010000',
            cc: 'ccc',
            cond: '01',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '010001'
        },
        usage: 'movt.s $fd, $fs, cc',
        result: 'if (conditional cc) d = s;',
        notes: 'The condition code flag specifies which of the 8 condition codes to check. If it is omitted, 0 is the default.'
    },
    {
        id: 'movt-d',
        assemblyName: 'movt.d',
        name: 'Floating Point Move on Conditional True Double',
        description: 'Move a double-precision float to another register if a conditional is true',
        category: instructionCategory.FLOAT_CONDITIONAL,
        instructionEncoding: {
            type: 'FCO-Type',
            opcode: '‭010001',
            format: '‭010001',
            cc: 'ccc',
            cond: '01',
            fs: 'sssss',
            fd: 'ddddd',
            funct: '010001'
        },
        usage: 'movt.d $fd, $fs, cc',
        result: 'if (conditional cc) d = s;',
        notes: 'The condition code flag specifies which of the 8 condition codes to check. If it is omitted, 0 is the default.'
    },
    {
        id: 'lwc1',
        assemblyName: 'lwc1',
        name: 'Load Word Coprocessor 1',
        description: 'Load a word from memory to a floating point register',
        category: instructionCategory.FLOAT_MEMORY,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '‭110001',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'lwc1 $ft, imm($s)',
        result: 'ft = memory[s + imm]',
        notes: '$ft is a floating point register, $s is a general purpose register.'
    },
    {
        id: 'ldc1',
        assemblyName: 'ldc1',
        name: 'Load Double Coprocessor 1',
        description: 'Load two words from memory to two floating point registers',
        category: instructionCategory.FLOAT_MEMORY,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '‭110101',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'ldc1 $ft, imm($s)',
        result: 'ft = memory[s + imm]',
        notes: '$ft is a floating point register, $s is a general purpose register.'
    },
    {
        id: 'swc1',
        assemblyName: 'swc1',
        name: 'Store Word Coprocessor 1',
        description: 'Store a word from a floating point register to memory',
        category: instructionCategory.FLOAT_MEMORY,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '‭111001',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'swc1 $ft, imm($s)',
        result: 'memory[s + imm] = ft',
        notes: '$ft is a floating point register, $s is a general purpose register.'
    },
    {
        id: 'sdc1',
        assemblyName: 'sdc1',
        name: 'Store Double Coprocessor 1',
        description: 'Store two words from memory to two floating point registers',
        category: instructionCategory.FLOAT_MEMORY,
        instructionEncoding: {
            type: 'I-Type',
            opcode: '‭111101',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
        usage: 'sdc1 $ft, imm($s)',
        result: 'memory[s + imm] = ft',
        notes: '$ft is a floating point register, $s is a general purpose register.'
    },
    {
        id: 'l-s',
        assemblyName: 'l.s',
        name: 'Load Single',
        description: 'Load a single-precision floating point value from memory to a register',
        category: instructionCategory.FLOAT_MEMORY,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'lui $at, label[31-16]',
                'ori $at, $at, label[15-0]',
                'lwc1 $ft, 0($at)'
            ]
        },
        usage: 'l.s $ft, label',
        result: 'ft = memory[s + imm]',
    },
    {
        id: 'l-d',
        assemblyName: 'l.d',
        name: 'Load Double',
        description: 'Load a double-precision floating point value from memory to a register',
        category: instructionCategory.FLOAT_MEMORY,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'lui $at, label[31-16]',
                'ori $at, $at, label[15-0]',
                'ldc1 $ft, 0($at)'
            ]
        },
        usage: 'l.d $ft, label',
        result: 'ft = memory[s + imm]',
    },
    {
        id: 's-s',
        assemblyName: 's.s',
        name: 'Store Single',
        description: 'Store a single-precision floating point value from memory to a register',
        category: instructionCategory.FLOAT_MEMORY,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'lui $at, label[31-16]',
                'ori $at, $at, label[15-0]',
                'swc1 $ft, 0($at)'
            ]
        },
        usage: 's.s $ft, label',
        result: 'memory[s + imm] = ft',
    },
    {
        id: 's-d',
        assemblyName: 's.d',
        name: 'Store Double',
        description: 'Store a double-precision floating point value from memory to a register',
        category: instructionCategory.FLOAT_MEMORY,
        instructionEncoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: [
                'lui $at, label[31-16]',
                'ori $at, $at, label[15-0]',
                'sdc1 $ft, 0($at)'
            ]
        },
        usage: 's.d $ft, label',
        result: 'memory[s + imm] = ft',
    },
    {
        id: 'mtc0',
        assemblyName: 'mtc0',
        name: 'Move to Coprocessor 0',
        description: 'Move a value from a general-purpose register to a system control coprocessor register',
        category: instructionCategory.SYSTEM,
        instructionEncoding: {
            type: 'COP-Type',
            opcode: '‭010000',
            funct: '00100',
            rt: 'ttttt',
            rd: 'ddddd',
            addr: '-----------'
        },
        usage: 'mtc0 $t, $d',
        result: 'd = t',
        notes: 'The first argument is the register from the main processor, the second is the register from the coprocessor. Unlike most MIPS instructions, the destination of the operation is not listed first.'
    },
    {
        id: 'mfc0',
        assemblyName: 'mfc0',
        name: 'Move from Coprocessor 0',
        description: 'Move a value from a system control coprocessor register to a general-purpose register',
        category: instructionCategory.SYSTEM,
        instructionEncoding: {
            type: 'COP-Type',
            opcode: '010000',
            funct: '00000',
            rt: 'ttttt',
            rd: 'ddddd',
            addr: '-----------'
        },
        usage: 'mfc0 $t, $d',
        result: 't = d',
        notes: 'The first argument is the register from the main processor, the second is the register from the coprocessor.'
    },
];