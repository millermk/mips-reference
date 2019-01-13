import * as React from 'react';
import { Link } from 'react-router-dom';
import { Badge, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { IInstructionType } from 'src/Models/IInstructionType';

interface IInstructionTypeListItemProps { 
    instructionType: IInstructionType;
}

// tslint:disable-next-line:no-empty-interface
interface IInstructionTypeListItemState {
}

class InstructionTypeListItem extends React.Component<IInstructionTypeListItemProps, IInstructionTypeListItemState> {
    public constructor(props: IInstructionTypeListItemProps) {
        super(props);
    }

    public render() {
        return (
            <ListGroupItem>
                <ListGroupItemHeading>
                    <Badge color="primary">{this.props.instructionType.shortName}</Badge>&nbsp;{this.props.instructionType.name}
                </ListGroupItemHeading>
                <ListGroupItemText className="mb-0">
                    Fields(s): <code>{this.props.instructionType.fields.map(v => v.name).join(', ') || '<n/a>'}</code>
                    &nbsp;&nbsp;&nbsp;
                    <Link to={`/instruction-types/${this.props.instructionType.id}`}>See more</Link>
                </ListGroupItemText>
            </ListGroupItem>
        );
    }
}

export default InstructionTypeListItem;
