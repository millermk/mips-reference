import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Form, FormGroup, Input, Label, ListGroup } from 'reactstrap';
import { IInstruction, instructionCategory } from 'src/Models/IInstruction';
import InstructionListItem from './InstructionListItem';

interface IInstructionListProps  extends RouteComponentProps<{}>, React.Props<{}>{
    items: IInstruction[];
}

interface IInstructionListState {
    searchText: string;
}

class InstructionList extends React.Component<IInstructionListProps, IInstructionListState> {
    private searchFieldRef: React.RefObject<HTMLInputElement>;

    public constructor(props: IInstructionListProps) {
        super(props);

        this.state = {
            searchText: ''
        }
        this.searchFieldRef = React.createRef<HTMLInputElement>();

        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    public componentWillMount() {
        this.setState({
            searchText: (window.URLSearchParams && (new URLSearchParams(this.props.location.search)).get('search')) || ''
        });
    }

    public componentDidMount() {
        if (this.searchFieldRef.current) {
            this.searchFieldRef.current.focus();
        }
    }

    public render() {
        const instructionCategories = Object.keys(instructionCategory).map(k => instructionCategory[k]);
        const search = this.state.searchText.toLowerCase().trim().split(' ');

        return (
            <div>
                <h1>Instructions</h1>
                <Form inline={true}>
                    <FormGroup className="mb-3">
                        <Label for="search" className="mr-sm-2">Search</Label>
                        <Input type="text" name="search" id="filter" autoComplete="off" placeholder="name, description, tags..." value={this.state.searchText} onChange={this.searchTextChanged} innerRef={this.searchFieldRef} />
                    </FormGroup>
                </Form>
                {(() => {
                    if (search.length !== 1) {
                        return null;
                    }
                    const exactMatches = this.props.items.filter(i => i.assemblyName === search[0])
                    if (exactMatches.length === 0) {
                        return null;
                    } else {
                        return (
                            <div key="exact-match">
                                <h3 className="text-capitalize">Exact Match</h3>
                                <ListGroup flush={true}>
                                    {exactMatches.map(v => <InstructionListItem instruction={v} key={v.id}/>)}
                                </ListGroup>
                            </div>
                        ); 
                    }
                })()}
                {instructionCategories.map(c => {
                    const instructions = this.props.items.filter(v => 
                        v.category === c &&
                        (search.length !== 1 || v.assemblyName !== search[0])
                        && (
                            search.length === 0 || 
                            search.reduce<boolean>((a, s) => a && (
                                v.assemblyName.toLowerCase().includes(s) ||
                                v.description.toLowerCase().includes(s) ||
                                (!!v.tags?.includes(s))
                            ), true)
                    ))
                    if (instructions.length > 0) {
                        return (
                            <div key={c}>
                                <h3 className="text-capitalize">{c}</h3>
                                <ListGroup flush={true}>
                                    {instructions.map(v => <InstructionListItem instruction={v} key={v.id}/>)}
                                </ListGroup>
                            </div>
                        ); 
                    } else {
                        return null;
                    }
                })}
            </div>
        );
    }

    private searchTextChanged = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const search = ev.target.value;

        if (search) {
            this.props.history.replace({pathname: this.props.location.pathname, search: `search=${search}`});
        } else {
            this.props.history.replace({pathname: this.props.location.pathname, search: ''});
        }
        this.setState({searchText: ev.target.value});
    };
}

export default withRouter(InstructionList);
