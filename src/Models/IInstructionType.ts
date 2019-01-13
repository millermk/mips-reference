import { instructionEncoding } from './IInstruction';

export interface IInstructionType {
    id: string;
    shortName: string;
    name: string;
    description: string;
    encoding: instructionEncoding;
    fields: Array<{
        name: string,
        size: number
    }>;
    notes?: string;
}