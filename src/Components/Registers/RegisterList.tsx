import * as React from 'react';
import { ListGroup } from 'reactstrap';
import { IRegister } from 'src/Models/IRegister';
import RegisterListItem from './RegisterListItem';

interface IRegisterListProps {
    items: IRegister[];
}

// tslint:disable-next-line:no-empty-interface
interface IRegisterListState {
}

class RegisterList extends React.Component<IRegisterListProps, IRegisterListState> {
    public constructor(props: IRegisterListProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>Registers</h1>
                <ListGroup flush={true}>
                    {this.props.items.map(v => <RegisterListItem register={v} key={v.id}/>)}
                </ListGroup>
            </div>
        );
    }
}

export default RegisterList;
