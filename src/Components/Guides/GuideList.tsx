import * as React from 'react';
import { ListGroup } from 'reactstrap';
import { IGuide } from 'src/Models/IGuide';
import GuideListItem from './GuideListItem';

interface IGuideListProps {
    items: IGuide[];
}

// tslint:disable-next-line:no-empty-interface
interface IGuideListState {
}

class GuideList extends React.Component<IGuideListProps, IGuideListState> {
    public constructor(props: IGuideListProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>Guides</h1>
                <ListGroup flush={true}>
                    {this.props.items.map(v => <GuideListItem guide={v} key={v.id}/>)}
                </ListGroup>
            </div>
        );
    }
}

export default GuideList;
