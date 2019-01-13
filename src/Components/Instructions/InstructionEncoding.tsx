import * as React from 'react';
import { Card, CardBody, CardHeader, CardText, Table } from 'reactstrap';
import { instructionEncoding } from 'src/Models/IInstruction';

interface IInstructionEncodingProps { 
    enc: instructionEncoding;
}

// tslint:disable-next-line:no-empty-interface
interface IInstructionEncodingState {
}

class InstructionEncoding extends React.Component<IInstructionEncodingProps, IInstructionEncodingState> {
    public constructor(props: IInstructionEncodingProps) {
        super(props);
    }

    public render() {
        if (this.props.enc.type === 'Pseudo-Instruction') {
            return (
                <div>
                    <h4 className="text-primary">Expansion</h4>
                    <Card className="mb-3">
                        <CardHeader>Equivalent Instructions</CardHeader>
                        <CardBody>
                            {this.props.enc.equivalentInstructions.map(v => <CardText key={v}><code>{v}</code></CardText>)}
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            let tableFormat: {headings: string[], lengths: number[], bits: string[], values: string[]};
            const enc = this.props.enc;
            switch (enc.type) {
                case 'I-Type': {
                    tableFormat = {
                        bits: ['31 30 29 28 27 26', '25 24 23 22 21', '20 19 18 17 16', '15 14 13 12 11 10 09 08 07 06 05 04 03 02 01 00'],
                        headings: ["opcode", "rs", "rt", "imm"],
                        lengths: [6, 5, 5, 16],
                        values: [enc.opcode, enc.rs, enc.rt, enc.imm]
                    }
                    break;
                }
                case 'J-Type': {
                    tableFormat = {
                        bits: ['31 30 29 28 27 26', '25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 09 08 07 06 05 04 03 02 01 00'],
                        headings: ["opcode", "addr"],
                        lengths: [6, 26],
                        values: [enc.opcode, enc.addr]
                    }
                    break;
                }
                case 'R-Type': {
                    tableFormat = {
                        bits: ['31 30 29 28 27 26', '25 24 23 22 21', '20 19 18 17 16', '15 14 13 12 11', '10 09 08 07 06', '05 04 03 02 01 00'],
                        headings: ["opcode", "rs", "rt", "rd", "shamt", "funct"],
                        lengths: [6, 5, 5, 5, 5, 6],
                        values: [enc.opcode, enc.rs, enc.rt, enc.rd, enc.shamt, enc.funct]
                    }
                    break;
                }
                case 'RI-Type': {
                    tableFormat = {
                        bits: ['31 30 29 28 27 26', '25 24 23 22 21', '20 19 18 17 16', '15 14 13 12 11 10 09 08 07 06 05 04 03 02 01 00'],
                        headings: ["opcode", "rs", "regimm", "imm"],
                        lengths: [6, 5, 5, 16],
                        values: [enc.opcode, enc.rs, enc.regimm, enc.imm]
                    }
                    break;
                }
                case 'COP-Type': {
                    tableFormat = {
                        bits: ['31 30 29 28 27 26', '25 24 23 22 21', '20 19 18 17 16', '15 14 13 12 11', '10 09 08 07 06 05 04 03 02 01 00'],
                        headings: ["opcode", "funct", "rt", "rd", "addr"],
                        lengths: [6, 5, 5, 5, 11],
                        values: [enc.opcode, enc.funct, enc.rt, enc.rd, enc.addr]
                    }
                    break;
                }
                case 'F-Type': {
                    tableFormat = {
                        bits: ['31 30 29 28 27 26', '25 24 23 22 21', '20 19 18 17 16', '15 14 13 12 11', '10 09 08 07 06', '05 04 03 02 01 00'],
                        headings: ["opcode", "format", "ft", "fs", "fd", "function"],
                        lengths: [6, 5, 5, 5, 5, 6],
                        values: [enc.opcode, enc.format, enc.ft, enc.fs, enc.fd, enc.funct]
                    }
                    break;
                }
                case 'FCO-Type': {
                    tableFormat = {
                        bits: ['31 30 29 28 27 26', '25 24 23 22 21', '20 19 18', '17 16', '15 14 13 12 11', '10 09 08 07 06', '05 04 03 02 01 00'],
                        headings: ["opcode", "format", "cc", "cond", "fs", "fd", "funct"],
                        lengths: [6, 5, 3, 2, 5, 5, 6],
                        values: [enc.opcode, enc.format, enc.cc, enc.cond, enc.fs, enc.fd, enc.funct]
                    }
                    break;
                }
                case 'FCT-Type': {
                    tableFormat = {
                        bits: ['31 30 29 28 27 26', '25 24 23 22 21', '20 19 18 17 16', '15 14 13 12 11', '10 09 08', '07 06', '05 04', '03 02 01 00'],
                        headings: ["opcode", "format", "ft", "fs", "cc", "cond", "fc", "funct"],
                        lengths: [6, 5, 5, 5, 3, 2, 2, 4],
                        values: [enc.opcode, enc.format, enc.ft, enc.fs, enc.cc, enc.cond, enc.fc, enc.funct]
                    }
                    break;
                }
                case 'IC-Type': {
                    tableFormat = {
                        bits: ['31 30 29 28 27 26', '25 24 23 22 21', '20 19 18', '17 16', '15 14 13 12 11 10 09 08 07 06 05 04 03 02 01 00'],
                        headings: ["opcode", "format", "cc", "cond", "imm"],
                        lengths: [6, 5, 3, 2, 16],
                        values: [enc.opcode, enc.format, enc.cc, enc.cond, enc.imm]
                    }
                    break;
                }
                case 'RC-Type': {
                    tableFormat = {
                        bits: ['31 30 29 28 27 26', '25 24 23 22 21', '20 19 18', '17 16', '15 14 13 12 11', '10 09 08 07 06', '05 04 03 02 01 00'],
                        headings: ["opcode", "rs", "cc", "cond", "rd", "shamt", "funct"],
                        lengths: [6, 5, 3, 2, 5, 5, 6],
                        values: [enc.opcode, enc.rs, enc.cc, enc.cond, enc.rd, enc.shamt, enc.funct]
                    }
                    break;
                }
                default: {
                    throw new Error("Unknown instruction type");
                }
            }

            return (
            <div>
                <h4 className="text-primary">Encoding</h4>
                <Table>
                    <thead>
                        <tr>
                            <th scope="col" />
                            {(() => {
                                return tableFormat.headings.map(v => <th scope="col" key={v}>{v}</th>);
                            })()}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col" key="v">length</th>
                            {(() => {
                                return tableFormat.lengths.map((v, i) => <th scope="col" key={tableFormat.headings[i]}>{v}</th>);
                            })()}
                        </tr>
                        <tr>
                            <th scope="col">
                                <span className="bit-number-offset"/>
                                <span className="bit-number">Bit&nbsp;Numbers</span><br/>
                                <span className="bit-value">Bit&nbsp;Values</span>
                            </th>
                            {(() => {
                                return tableFormat.values.map((v, i) => 
                                    <th scope="col" key={v}>
                                        <span className="bit-number-offset"/>
                                        <span className="bit-number text-monospace">{tableFormat.bits[i]}</span><br/>
                                        <span className="bit-value text-monospace">{v}</span>
                                    </th>
                                );
                            })()}
                        </tr>
                    </tbody>
                </Table>
            </div>
            );
        }
    }
}

export default InstructionEncoding;