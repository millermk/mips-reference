import * as React from 'react';
import { Card, CardBody, CardHeader, CardText, Col, Row } from 'reactstrap';
import { ISyscall } from 'src/Models/ISyscall';


interface ISyscallDetailProps { 
    item: ISyscall;
}

// tslint:disable-next-line:no-empty-interface
interface ISyscallDetailState {
}

class SyscallDetail extends React.Component<ISyscallDetailProps, ISyscallDetailState> {
    public constructor(props: ISyscallDetailProps) {
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
                            <CardHeader>Code ($v0)</CardHeader>
                            <CardBody>
                                <CardText>{this.props.item.number}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card className="mb-3">
                            <CardHeader>Inputs</CardHeader>
                            <CardBody>
                                <CardText>{this.props.item.inputs}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card className="mb-3">
                            <CardHeader>Outputs</CardHeader>
                            <CardBody>
                                <CardText>{this.props.item.outputs}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
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

export default SyscallDetail;
