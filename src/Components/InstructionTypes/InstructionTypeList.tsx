import * as React from 'react';
import { ListGroup } from 'reactstrap';
import { IInstructionType } from 'src/Models/IInstructionType';
import InstructionTypeListItem from './InstructionTypeListItem';

interface IInstructionTypeListProps {
    items: IInstructionType[];
}

// tslint:disable-next-line:no-empty-interface
interface IInstructionTypeListState {
}

class InstructionTypeList extends React.Component<IInstructionTypeListProps, IInstructionTypeListState> {
    public constructor(props: IInstructionTypeListProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>Instruction Types</h1>
                <ListGroup flush={true}>
                    {this.props.items.map(v => <InstructionTypeListItem instructionType={v} key={v.id}/>)}
                </ListGroup>
            </div>
        );
    }
}

export default InstructionTypeList;
