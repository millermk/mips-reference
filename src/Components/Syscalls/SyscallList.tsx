import * as React from 'react';
import { ListGroup } from 'reactstrap';
import { ISyscall } from 'src/Models/ISyscall';
import SyscallListItem from './SyscallListItem';

interface ISyscallListProps {
    items: ISyscall[];
}

// tslint:disable-next-line:no-empty-interface
interface ISyscallListState {
}

class SyscallList extends React.Component<ISyscallListProps, ISyscallListState> {
    public constructor(props: ISyscallListProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>Syscalls</h1>
                <ListGroup flush={true}>
                    {this.props.items.map(v => <SyscallListItem syscall={v} key={v.id}/>)}
                </ListGroup>
            </div>
        );
    }
}

export default SyscallList;
