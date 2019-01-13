import { instructionEncoding } from 'src/Models/IInstruction';
import { IInstructionType } from 'src/Models/IInstructionType';

/* tslint:disable:object-literal-sort-keys */

export const instructionTypeSource: IInstructionType[] = [
    {
        id: 'r-type',
        name: 'R-Type',
        shortName: 'R',
        description: 'R-type is named for its focus on maximizing the number of registers. It can specify up to 3 registers. All arithmetic instructions which do not use an immediate are R-Type. Since R-Type instructions do not include immediate values (except the shift amount), space is not as tight as other types. Therefore, they all use the same opcode (0x0), and have a separate funct field to differentiate from each other. Additionally, many R-type instructions do not use all 6 fields.',
        fields: [
            {name: 'opcode', size: 6},
            {name: 'rs', size: 5},
            {name: 'rt', size: 5},
            {name: 'rd', size: 5},
            {name: 'shamt', size: 5},
            {name: 'funct', size: 6},
        ],
        encoding: {
            type: 'R-Type',
            opcode: '000000',
            rs: 'sssss',
            rt: 'ttttt',
            rd: 'ddddd',
            shamt: 'iiiii',
            funct: 'ffffff'
        },
    },
    {
        id: 'i-type',
        name: 'I-Type',
        shortName: 'I',
        description: 'I-type is named for its focus on maximizing the size of the immediate. It can specify up to 2 registers and a 16-bit immediate value. All arithmetic instructions which use an immediate, most branch instructions, and most memory instructions are I-Type. Since I-Type instructions use half their bits for the immediate value, space is tight. Therefore, each I-Type instruction has a unique opcode. Additionally, many instructions must cleverly use the immediate field to fit as much information as possible. For example, branch instructions do not have room to store a 32 bit target address. Therefore, they store the distance from the current location of the branch (divided by 4, since the distance between intructions is always a multiple of 4 bytes).',
        fields: [
            {name: 'opcode', size: 6},
            {name: 'rs', size: 5},
            {name: 'rt', size: 5},
            {name: 'imm', size: 16},
        ],
        encoding: {
            type: 'I-Type',
            opcode: 'oooooo',
            rs: 'sssss',
            rt: 'ttttt',
            imm: 'iiiiiiiiiiiiiiii'
        },
    },
    {
        id: 'j-type',
        name: 'J-Type',
        shortName: 'J',
        description: "J-type is named for its focus on maximizing the possible distance of a jump. It can specify a 26-bit address. Like branch instructions, J-Type instructions do not have room to store a 32 bit target address. To 'fit' a 32 bit target into 26 bits, the target address is shifted two bits to the right (instructions are always word-aligned so the rightmost two bits are always 0), and then the upper 6 bits are discarded. When the jump is executed, the address is shifted left 2 bits, and the upper 4 bits of the current PC are added to the stored address to form a complete 32 bit target.",
        fields: [
            {name: 'opcode', size: 6},
            {name: 'addr', size: 26}
        ],
        encoding: {
            type: 'J-Type',
            opcode: '00001o',
            addr: 'aaaaaaaaaaaaaaaaaaaaaaaaaa'
        }
    },
    {
        id: 'ri-type',
        name: 'RI-Type',
        shortName: 'RI',
        description: 'RI-type is named for its use of an extra immediate field called register immediate (regimm) in place of the rt field from the otherwise identical I-Type instruction. It can specify a single register, a 5-bit immediate, and  16-bit immediate. RI-type is mainly used in certain branch instructions which compare a single register with 0. Like R-Type instructions, all RI-type instructions use the same opcode (0x1); the regimm field is used to differentiate RI-type instructions from each other.',
        fields: [
            {name: 'opcode', size: 6},
            {name: 'rs', size: 5},
            {name: 'regimm', size: 5},
            {name: 'imm', size: 16},
        ],
        encoding: {
            type: 'RI-Type',
            opcode: '000001',
            rs: 'sssss',
            regimm: 'rrrrr',
            imm: 'iiiiiiiiiiiiiiii'
        },
        notes: 'Since this instruction type is not used for a large number of instructions, its name and some field names are not consistent across reference sources.'
    },
    {
        id: 'cop-type',
        name: 'COP-Type',
        shortName: 'COP',
        description: "COP-type is named for its usage in interaction with coprocessors. The opcode is the same for all coprocessor instructions except for the last two bits, which specify the coproessor (0 - 3).",
        fields: [
            {name: 'opcode', size: 6},
            {name: 'funct', size: 5},
            {name: 'rt', size: 5},
            {name: 'rd', size: 5},
            {name: 'addr', size: 11}
        ],
        encoding: {
            type: 'COP-Type',
            opcode: '0100oo',
            funct: 'fffff',
            rt: 'ttttt',
            rd: 'ddddd',
            addr: 'aaaaaaaaaaa'
        }
    },
    {
        id: 'ic-type',
        name: 'IC-Type',
        shortName: 'IC',
        description: "IC-type is used for operations with immediates which test a floating point conditional.",
        fields: [
            {name: 'opcode', size: 6},
            {name: 'format', size: 5},
            {name: 'cc', size: 2},
            {name: 'cond', size: 3},
            {name: 'imm', size: 16}
        ],
        encoding: {
            type: 'IC-Type',
            opcode: 'oooooo',
            format: 'fffff',
            cc: 'ccc',
            cond: 'cc',
            imm: 'iiiiiiiiiiiiiiii'
        },
        notes: 'Since this instruction type is not used for a large number of instructions, its name and some field names are not consistent across reference sources.'
    },
    {
        id: 'rc-type',
        name: 'RC-Type',
        shortName: 'RC',
        description: "RC-type is used for operations on registers which test a floating point conditional.",
        fields: [
            {name: 'opcode', size: 6},
            {name: 'rs', size: 5},
            {name: 'cc', size: 2},
            {name: 'cond', size: 3},
            {name: 'rd', size: 5},
            {name: 'shamt', size: 5},
            {name: 'funct', size: 6}
        ],
        encoding: {
            type: 'RC-Type',
            opcode: 'oooooo',
            rs: 'sssss',
            cc: 'ccc',
            cond: 'cc',
            rd: 'ddddd',
            shamt: 'sssss',
            funct: 'ffffff'
        },
        notes: 'Since this instruction type is not used for a large number of instructions, its name and some field names are not consistent across reference sources.'
    },
    {
        id: 'float',
        name: 'F-Type',
        shortName: 'F',
        description: "F-type is used for most floating point operations.",
        fields: [
            {name: 'opcode', size: 6},
            {name: 'format', size: 5},
            {name: 'ft', size: 5},
            {name: 'fs', size: 5},
            {name: 'fd', size: 5},
            {name: 'function', size: 6}
        ],
        encoding: {
            type: 'F-Type',
            opcode: '010001',
            format: 'fffff',
            ft: 'ttttt',
            fs: 'sssss',
            fd: 'ddddd',
            funct: 'ffffff'
        }
    },
    {
        id: 'float-conditional-operation',
        name: 'FCO-Type',
        shortName: 'FCO',
        description: "FCO-type is used for most floating point operations which check a conditional.",
        fields: [
            {name: 'opcode', size: 6},
            {name: 'format', size: 5},
            {name: 'cc', size: 3},
            {name: 'cond', size: 2},
            {name: 'fs', size: 5},
            {name: 'fd', size: 5},
            {name: 'function', size: 6}
        ],
        encoding: {
            type: 'FCO-Type',
            opcode: '010001',
            format: 'fffff',
            cc: 'ccc',
            cond: 'cc',
            fs: 'sssss',
            fd: 'ddddd',
            funct: 'ffffff'
        },
        notes: 'Since this instruction type is not used for a large number of instructions, its name and some field names are not consistent across reference sources.'
    },
    {
        id: 'float-conditional-test',
        name: 'FCT-Type',
        shortName: 'FCT',
        description: "FCT-type is used for most floating point operations which set a conditional based on a test.",
        fields: [
            {name: 'opcode', size: 6},
            {name: 'format', size: 5},
            {name: 'ft', size: 5},
            {name: 'fs', size: 5},
            {name: 'cc', size: 3},
            {name: 'cond', size: 2},
            {name: 'fc', size: 2},
            {name: 'function', size: 4}
        ],
        encoding: {
            type: 'FCT-Type',
            opcode: '010001',
            format: 'fffff',
            ft: 'ttttt',
            fs: 'sssss',
            cc: 'ccc',
            cond: 'cc',
            fc: 'ff',
            funct: 'ffff'
        },
        notes: 'Since this instruction type is not used for a large number of instructions, its name and some field names are not consistent across reference sources.'
    },
    {
        id: 'pseudo-instruction',
        name: 'Pseudo-Instruction',
        shortName: 'PSEUDO',
        description: "The MIPS processor is designed to be simple, featuring a relatively small set of machine instructions (instruction which the processor can run). Pseudo-instructions are provided as a convenience for assembly language programmers for common operations that are not implemented in the processor. Unlike other instructions, which are translated by the assembler directly into a corresponding machine instruction, pseudo-instructions do not correspond directly with a single machine instruction. The pseudo-instructions are provided by the assember (the program that translates your assembly language code into a binary program in machine language). Pseudo-instructions are first translated by the assembler into one or more 'real' instructions which perform the desired operation, then these real instructions are translated to equivalent machine language.",
        fields: [],
        encoding: {
            type: 'Pseudo-Instruction',
            equivalentInstructions: []
        }
    },
];


export const instructionTypeFromEncoding = (enc: instructionEncoding) => {
    const type = instructionTypeSource.find(it => it.name === enc.type);
    if (!type) {
        throw new Error("Unknown instruction type");
    }
    return type;
}