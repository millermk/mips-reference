export interface IRegister {
    id: string;
    name: string;
    description: string;
    preserved: 'yes' | 'no' | 'n/a' | 'no convention';
    letterNumbers: string;
    numbers: string;
    notes?: string;
}