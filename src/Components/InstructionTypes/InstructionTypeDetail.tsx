import * as React from 'react';
import { Card, CardBody, CardHeader, CardText, Col, Row } from 'reactstrap';
import { IInstructionType } from 'src/Models/IInstructionType';
import InstructionEncoding from '../Instructions/InstructionEncoding';


interface IInstructionTypeDetailProps { 
    item: IInstructionType;
}

// tslint:disable-next-line:no-empty-interface
interface IInstructionTypeDetailState {
}

class InstructionTypeDetail extends React.Component<IInstructionTypeDetailProps, IInstructionTypeDetailState> {
    public constructor(props: IInstructionTypeDetailProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>{this.props.item.name}</h1>
                <h4 className="text-primary">Description</h4>
                <p>{this.props.item.description}</p>
                {this.props.item.encoding.type !== 'Pseudo-Instruction' ? (
                    <div>
                        <h4 className="text-primary">Fields</h4>
                            <Row>
                                {this.props.item.fields.map(v => (
                                    <Col key={v.name} sm={Math.max(Math.floor(12/this.props.item.fields.length), 2)}>
                                        <Card className="mb-3">
                                            <CardHeader>{v.name}</CardHeader>
                                            <CardBody>
                                                <CardText>Size: {v.size}</CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                            <InstructionEncoding enc={this.props.item.encoding} />
                        </div>
                ) : null}
                {this.props.item.notes ? (
                    <div>
                        <h4 className="text-primary">Notes</h4>
                        <p>{this.props.item.notes}</p>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default InstructionTypeDetail;
