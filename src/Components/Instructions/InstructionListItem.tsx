import * as React from 'react';
import { Link } from 'react-router-dom';
import { Badge, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { IInstruction } from 'src/Models/IInstruction';

interface IInstructionListItemProps { 
    instruction: IInstruction;
}

// tslint:disable-next-line:no-empty-interface
interface IInstructionListItemState {
}

class InstructionListItem extends React.Component<IInstructionListItemProps, IInstructionListItemState> {
    public constructor(props: IInstructionListItemProps) {
        super(props);
    }

    public render() {
        return (
            <ListGroupItem>
                <ListGroupItemHeading>
                    <Badge color="primary">{this.props.instruction.assemblyName}</Badge>&nbsp;
                    {this.props.instruction.description}&nbsp;
                    <Badge color="secondary" pill={true}>{this.props.instruction.instructionEncoding.type}</Badge>
                </ListGroupItemHeading>
                <ListGroupItemText className="mb-0">
                    Usage: <code>{this.props.instruction.usage}</code>&nbsp;&nbsp;&nbsp;
                    <Link to={`/instructions/${this.props.instruction.id}`}>See more</Link>
                </ListGroupItemText>
            </ListGroupItem>
        );
    }
}

export default InstructionListItem;
