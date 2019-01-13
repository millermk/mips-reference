import * as React from 'react';
import { Link } from 'react-router-dom';
import { Badge, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { IGuide } from 'src/Models/IGuide';

interface IGuideListItemProps { 
    guide: IGuide;
}

// tslint:disable-next-line:no-empty-interface
interface IGuideListItemState {
}

class GuideListItem extends React.Component<IGuideListItemProps, IGuideListItemState> {
    public constructor(props: IGuideListItemProps) {
        super(props);
    }

    public render() {
        return (
            <ListGroupItem>
                <ListGroupItemHeading>
                    <Badge color="primary">{this.props.guide.name}</Badge>&nbsp;{this.props.guide.description}
                </ListGroupItemHeading>
                <ListGroupItemText className="mb-0">
                    <Link to={`/guides/${this.props.guide.id}`}>See more</Link>
                </ListGroupItemText>
            </ListGroupItem>
        );
    }
}

export default GuideListItem;
