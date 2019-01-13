import * as React from 'react';
import { Link } from 'react-router-dom';
import { Badge, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { IAssemblerDirective } from 'src/Models/IAssemblerDirective';

interface IAssemblerDirectiveListItemProps { 
    assemblerDirective: IAssemblerDirective;
}

// tslint:disable-next-line:no-empty-interface
interface IAssemblerDirectiveListItemState {
}

class AssemblerDirectiveListItem extends React.Component<IAssemblerDirectiveListItemProps, IAssemblerDirectiveListItemState> {
    public constructor(props: IAssemblerDirectiveListItemProps) {
        super(props);
    }

    public render() {
        return (
            <ListGroupItem>
                <ListGroupItemHeading>
                    <Badge color="primary">{this.props.assemblerDirective.name}</Badge>&nbsp;{this.props.assemblerDirective.description}
                </ListGroupItemHeading>
                <ListGroupItemText className="mb-0">
                    Usage: <code>{this.props.assemblerDirective.usage}</code>
                    &nbsp;&nbsp;&nbsp;
                    <Link to={`/assembler-directives/${this.props.assemblerDirective.id}`}>See more</Link>
                </ListGroupItemText>
            </ListGroupItem>
        );
    }
}

export default AssemblerDirectiveListItem;
