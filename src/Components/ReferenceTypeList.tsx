import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardText, Col, Row } from 'reactstrap';
import { DataStructure } from '../Data/DataStructure';

// tslint:disable-next-line:no-empty-interface
interface IReferenceTypeListProps {
}

// tslint:disable-next-line:no-empty-interface
interface IReferenceTypeListState {
}

class ReferenceTypeList extends React.Component<IReferenceTypeListProps, IReferenceTypeListState> {
    public constructor(props: IReferenceTypeListProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>Topics</h1>

                <Row>
                    {Object.keys(DataStructure).map(k => (
                        <Col sm="6" md="4" lg="2" key={k}>
                            <Card className="mb-3" key={k}>
                                <CardHeader>
                                    <Link className="link-unstyled" to={`/${k}`}>
                                        <img className="reference-type-icon" src={process.env.PUBLIC_URL + '/icons/' + k + '.svg'} alt=""/>
                                    </Link>
                                    <Link className="link-uncolored" to={`/${k}`}>{DataStructure[k].friendlyName}</Link>
                                </CardHeader>
                                <CardBody>
                                    <CardText><Link className="link-unstyled" to={`/${k}`}>{DataStructure[k].description}</Link></CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default ReferenceTypeList;
