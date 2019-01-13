import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardText, Col, Row } from 'reactstrap';
import { IInstruction } from 'src/Models/IInstruction';
import { IInstructionType } from 'src/Models/IInstructionType';
import InstructionEncoding from './InstructionEncoding';

interface IInstructionDetailProps { 
    item: IInstruction;
    type: IInstructionType;
}

// tslint:disable-next-line:no-empty-interface
interface IInstructionDetailState {
}

class InstructionDetail extends React.Component<IInstructionDetailProps, IInstructionDetailState> {
    public constructor(props: IInstructionDetailProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>{this.props.item.name}</h1>
                <h4 className="text-primary">Summary</h4>
                <p>{this.props.item.description}</p>
                <Row>
                    <Col sm="4">
                        <Card className="mb-3">
                            <CardHeader>Usage</CardHeader>
                            <CardBody>
                                <CardText><code>{this.props.item.usage}</code></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card className="mb-3">
                            <CardHeader>Result</CardHeader>
                            <CardBody>
                                <CardText>{this.props.item.result}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card className="mb-3">
                            <CardHeader>Type</CardHeader>
                            <CardBody>
                                <CardText>
                                    <Link className="link-uncolored" to={`/instruction-types/${this.props.type.id}`}>{this.props.item.instructionEncoding.type}</Link>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <InstructionEncoding enc={this.props.item.instructionEncoding} />
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

export default InstructionDetail;
