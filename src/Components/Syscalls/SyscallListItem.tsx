import * as React from 'react';
import { Link } from 'react-router-dom';
import { Badge, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { ISyscall } from 'src/Models/ISyscall';

interface ISyscallListItemProps { 
    syscall: ISyscall;
}

// tslint:disable-next-line:no-empty-interface
interface ISyscallListItemState {
}

class SyscallListItem extends React.Component<ISyscallListItemProps, ISyscallListItemState> {
    public constructor(props: ISyscallListItemProps) {
        super(props);
    }

    public render() {
        return (
            <ListGroupItem>
                <ListGroupItemHeading>
                    <Badge color="primary">{this.props.syscall.number}</Badge>&nbsp;{this.props.syscall.description}
                </ListGroupItemHeading>
                <ListGroupItemText className="mb-0">
                    Input(s): <code>{this.props.syscall.inputs || "<none>"}</code>&nbsp;
                    Outputs(s): <code>{this.props.syscall.outputs || "<none>"}</code>
                    &nbsp;&nbsp;&nbsp;
                    <Link to={`/syscalls/${this.props.syscall.id}`}>See more</Link>
                </ListGroupItemText>
            </ListGroupItem>
        );
    }
}

export default SyscallListItem;
