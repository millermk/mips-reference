import * as React from 'react';
import { Link } from 'react-router-dom';
import { Badge, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { IRegister } from 'src/Models/IRegister';

interface IRegisterListItemProps { 
    register: IRegister;
}

// tslint:disable-next-line:no-empty-interface
interface IRegisterListItemState {
}

class RegisterListItem extends React.Component<IRegisterListItemProps, IRegisterListItemState> {
    public constructor(props: IRegisterListItemProps) {
        super(props);
    }

    public render() {
        return (
            <ListGroupItem>
                <ListGroupItemHeading>
                    <Badge color="primary">{this.props.register.numbers}</Badge>&nbsp;{this.props.register.name}
                </ListGroupItemHeading>
                <ListGroupItemText className="mb-0">
                    Friendly Name(s): <code>{this.props.register.letterNumbers}</code>
                    &nbsp;&nbsp;&nbsp;
                    <Link to={`/registers/${this.props.register.id}`}>See more</Link>
                </ListGroupItemText>
            </ListGroupItem>
        );
    }
}

export default RegisterListItem;
