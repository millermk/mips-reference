import * as React from 'react';
import { Card, CardBody } from 'reactstrap';
import { IGuide } from 'src/Models/IGuide';


interface IGuideDetailProps { 
    item: IGuide;
}

// tslint:disable-next-line:no-empty-interface
interface IGuideDetailState {
}

class GuideDetail extends React.Component<IGuideDetailProps, IGuideDetailState> {
    public constructor(props: IGuideDetailProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>{this.props.item.name}</h1>
                {this.props.item.items.map((v) => {
                    switch (v.type) {
                        case 'heading': {
                            return <h4 className="text-primary">{v.text}</h4>;
                        }
                        case 'paragraph': {
                            return <p>{v.text}</p>;
                        }
                        case 'code': {
                            return <Card className="bg-light mb-3"><CardBody><pre className="mb-0"><code>{v.text.replace(/;/g, '\n')}</code></pre></CardBody></Card>;
                        }
                    }
                })}
            </div>
        );
    }
}

export default GuideDetail;
