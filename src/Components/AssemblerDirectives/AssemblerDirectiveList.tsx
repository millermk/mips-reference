import * as React from 'react';
import { ListGroup } from 'reactstrap';
import { IAssemblerDirective } from 'src/Models/IAssemblerDirective';
import AssemblerDirectiveListItem from './AssemblerDirectiveListItem';

interface IAssemblerDirectiveListProps {
    items: IAssemblerDirective[];
}

// tslint:disable-next-line:no-empty-interface
interface IAssemblerDirectiveListState {
}

class AssemblerDirectiveList extends React.Component<IAssemblerDirectiveListProps, IAssemblerDirectiveListState> {
    public constructor(props: IAssemblerDirectiveListProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>Assembler Directives</h1>
                <ListGroup flush={true}>
                    {this.props.items.map(v => <AssemblerDirectiveListItem assemblerDirective={v} key={v.id}/>)}
                </ListGroup>
            </div>
        );
    }
}

export default AssemblerDirectiveList;
