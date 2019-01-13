import * as React from 'react';

import { assemblerDirectiveSource } from './AssemblerDirectiveSource';
import { guideSource } from './GuideSource';
import { instructionSource } from './InstructionSource';
import { instructionTypeFromEncoding, instructionTypeSource } from './InstructionTypeSource';
import { registerSource } from './RegisterSource';
import { syscallSource } from './SyscallTource';

import GuideDetail from 'src/Components/Guides/GuideDetail';
import GuideList from 'src/Components/Guides/GuideList';
import AssemblerDirectiveDetail from '../Components/AssemblerDirectives/AssemblerDirectiveDetail';
import AssemblerDirectiveList from '../Components/AssemblerDirectives/AssemblerDirectiveList';
import InstructionDetail from '../Components/Instructions/InstructionDetail';
import InstructionList from '../Components/Instructions/InstructionList';
import InstructionTypeDetail from '../Components/InstructionTypes/InstructionTypeDetail';
import InstructionTypeList from '../Components/InstructionTypes/InstructionTypeList';
import RegisterDetail from '../Components/Registers/RegisterDetail';
import RegisterList from '../Components/Registers/RegisterList';
import SyscallDetail from '../Components/Syscalls/SyscallDetail';
import SyscallList from '../Components/Syscalls/SyscallList';

export interface IReferenceStructure {
    getListComponent: () => JSX.Element,
    getItemComponent: (id: string) => JSX.Element | undefined,
    friendlyName: string;
    description: string;
}

export let DataStructure: {
    [key: string]: IReferenceStructure
} = {
    'instruction-types': {
        description: 'MIPS architecture instruction types',
        friendlyName: 'Instruction Types',
        getItemComponent: (id: string) => {
            const instructionType = instructionTypeSource.find(v => v.id === id);
            return instructionType && React.createElement(InstructionTypeDetail, {item: instructionType});
        },
        getListComponent: () => React.createElement(InstructionTypeList, {items: instructionTypeSource})
    },
    'instructions': {
        description: 'MIPS architecture instructions and QtSpim supported pseudoinstructions',
        friendlyName: 'Instructions',
        getItemComponent: (id: string) => {
            const instruction = instructionSource.find(v => v.id === id);
            return instruction && React.createElement(InstructionDetail, {item: instruction, type: instructionTypeFromEncoding(instruction.instructionEncoding)});
        },
        getListComponent: () => React.createElement(InstructionList, {items: instructionSource})
    },
    'syscalls': {
        description: 'QtSpim supported syscalls for console IO, memory allocation, program termination, and other tasks',
        friendlyName: 'Syscalls',
        getItemComponent: (id: string) => {
            const syscall = syscallSource.find(v => v.id === id);
            return syscall && React.createElement(SyscallDetail, {item: syscall});
        },
        getListComponent: () => React.createElement(SyscallList, {items: syscallSource})
    },
    // tslint:disable-next-line:object-literal-sort-keys
    'assembler-directives': {
        description: 'QtSpim supported assembler directives for program structure, memory allocation, and more',
        friendlyName: 'Assembler Directives',
        getItemComponent: (id: string) => {
            const assemblerDirective = assemblerDirectiveSource.find(v => v.id === id);
            return assemblerDirective && React.createElement(AssemblerDirectiveDetail, {item: assemblerDirective});
        },
        getListComponent: () => React.createElement(AssemblerDirectiveList, {items: assemblerDirectiveSource})
    },
    'registers': {
        description: 'MIPS registers for integers, floats, and system use',
        friendlyName: 'Registers',
        getItemComponent: (id: string) => {
            const register = registerSource.find(v => v.id === id);
            return register && React.createElement(RegisterDetail, {item: register});
        },
        getListComponent: () => React.createElement(RegisterList, {items: registerSource})
    },
    'guides': {
        description: 'Other guides for MIPS programming with QtSpim',
        friendlyName: 'Guides',
        getItemComponent: (id: string) => {
            const guide = guideSource.find(v => v.id === id);
            return guide && React.createElement(GuideDetail, {item: guide});
        },
        getListComponent: () => React.createElement(GuideList, {items: guideSource})
    }
};