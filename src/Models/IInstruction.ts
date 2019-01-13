export enum instructionCategory {
    MISC = 'miscellaneous',
    ARITHMETIC = "arithmetic",
    BRANCH = 'branch',
    JUMP = "jump",
    MEMORY = "memory",
    LOGICAL = "logical",
    COMPARISON = "comparison",
    SHIFT = "shift",
    FLOAT_MOVE_AND_CONVERT = "float move and convert",
    FLOAT_ARITHMETIC = "float arithmetic",
    FLOAT_CONDITIONAL = "float conditional",
    SYSTEM = "system"
}

export interface IRTypeEncoding {
    type: 'R-Type',
    opcode: string,
    rs: string,
    rt: string,
    rd: string,
    shamt: string,
    funct: string
}

export interface IRITypeEncoding {
    type: 'RI-Type',
    opcode: string,
    rs: string,
    regimm: string,
    imm: string,
}

export interface IJTypeEncoding {
    type: 'J-Type',
    opcode: string;
    addr: string;
} 

export interface IITypeEncoding {
    type: 'I-Type',
    opcode: string,
    rs: string,
    rt: string,
    imm: string,
}

export interface ICOPTypeEncoding {
    type: 'COP-Type'
    opcode: string;
    rt: string;
    rd: string;
    funct: string;
    addr: string;
}

export interface IFTypeEncoding {
    type: 'F-Type'
    opcode: string;
    format: string;
    ft : string;
    fs: string;
    fd: string;
    funct: string;
}

export interface IFCOTypeEncoding {
    type: 'FCO-Type'
    opcode: string;
    format: string;
    cc: string;
    cond: string;
    fs : string;
    fd: string;
    funct: string;
}

export interface IFCTTypeEncoding {
    type: 'FCT-Type'
    opcode: string;
    format: string;
    ft: string;
    fs : string;
    cc: string;
    cond: string;
    fc: string;
    funct: string;
}

export interface IICTypeEncoding {
    type: 'IC-Type'
    opcode: string;
    format: string;
    cc: string;
    cond: string;
    imm: string;
}

export interface IRCTypeEncoding {
    type: 'RC-Type',
    opcode: string,
    rs: string,
    cc: string;
    cond: string;
    rd: string,
    shamt: string,
    funct: string
}

export interface IPseudoEncoding {
    type: 'Pseudo-Instruction',
    equivalentInstructions: string[];
}

export type instructionEncoding = IRTypeEncoding | IRITypeEncoding | IJTypeEncoding | IITypeEncoding | ICOPTypeEncoding | IFTypeEncoding | IFCOTypeEncoding | IFCTTypeEncoding | IICTypeEncoding | IRCTypeEncoding | IPseudoEncoding;

export interface IInstruction {
    id: string;
    assemblyName: string;
    name: string;
    description: string;
    usage: string;
    result: string;
    instructionEncoding: instructionEncoding;
    category: instructionCategory;
    notes?: string;
    tags?: string;
}