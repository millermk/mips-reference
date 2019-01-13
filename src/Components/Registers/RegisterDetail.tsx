import * as React from 'react';
import { Card, CardBody, CardHeader, CardText, Col, Row } from 'reactstrap';
import { IRegister } from 'src/Models/IRegister';


interface IRegisterDetailProps { 
    item: IRegister;
}

// tslint:disable-next-line:no-empty-interface
interface IRegisterDetailState {
}

class RegisterDetail extends React.Component<IRegisterDetailProps, IRegisterDetailState> {
    public constructor(props: IRegisterDetailProps) {
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
                            <CardHeader>Numbers</CardHeader>
                            <CardBody>
                                <CardText>{this.props.item.numbers}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card className="mb-3">
                            <CardHeader>Friendly Names</CardHeader>
                            <CardBody>
                                <CardText>{this.props.item.letterNumbers}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card className="mb-3">
                            <CardHeader>Preserved Accross Function Calls</CardHeader>
                            <CardBody>
                                <CardText>{this.props.item.preserved}</CardText>
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

export default RegisterDetail;
