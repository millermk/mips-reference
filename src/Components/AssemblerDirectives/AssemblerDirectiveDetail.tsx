import * as React from 'react';
import { Card, CardBody, CardHeader, CardText, Col, Row } from 'reactstrap';
import { IAssemblerDirective } from 'src/Models/IAssemblerDirective';


interface IAssemblerDirectiveDetailProps { 
    item: IAssemblerDirective;
}

// tslint:disable-next-line:no-empty-interface
interface IAssemblerDirectiveDetailState {
}

class AssemblerDirectiveDetail extends React.Component<IAssemblerDirectiveDetailProps, IAssemblerDirectiveDetailState> {
    public constructor(props: IAssemblerDirectiveDetailProps) {
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
                            <CardHeader>Arguements</CardHeader>
                            <CardBody>
                                <CardText>{this.props.item.arguments}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card className="mb-3">
                            <CardHeader>Effect</CardHeader>
                            <CardBody>
                                <CardText>{this.props.item.effect}</CardText>
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

export default AssemblerDirectiveDetail;
