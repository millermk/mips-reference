import * as React from 'react';
import { BrowserRouter as Router, NavLink, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';

import icon from './Media/processor-icon.svg'

import NavBar from './Components/NavBar';
import ReferenceTypeList from './Components/ReferenceTypeList';
import { DataStructure, IReferenceStructure } from './Data/DataStructure';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Router basename={process.env.PUBLIC_URL || "/"}>
                    <div>
                        <Container className="bg-light mb-3" fluid={true}>
                            <div className="app-header py-3">
                                <NavLink className="link-unstyled" to="/">
                                    <h1 className="display-3"><img className="App-logo" src={icon} />MIPS Reference</h1>
                                </NavLink>
                                <p className="lead">MIPS instructions, syscalls, registers, and more</p>

                                <Switch>
                                    <Route exact={true} path="/" />
                                    <Route path="/" component={NavBar} />
                                </Switch>
                            </div>
                        </Container>
                        <Container fluid={true}>
                            <Switch>
                                <Route exact={true} path="/" component={ReferenceTypeList} />
                                {
                                    Object.keys(DataStructure).map(k => (
                                        <Route key={k} path={`/${k}`} render={this.getCategoryRenderer(DataStructure[k])} />
                                    ))
                                }
                            </Switch>
                        </Container>
                    </div>
                </Router>
            </div>
        );
    }

    private getCategoryRenderer(structure: IReferenceStructure) {
        return (props: RouteComponentProps) => {
            return (
                <Switch>
                    <Route path={`${props.match.path}/:id`} render={this.getItemRenderer(structure)} />
                    <Route path={props.match.path} render={this.getListRenderer(structure)}/>
                </Switch>
            );
        };
    }

    private getItemRenderer(structure: IReferenceStructure) {
        return (props: RouteComponentProps<{id: string}>) => {
            return structure.getItemComponent(props.match.params.id) || <p>Item {props.match.params.id} not found.</p>;
        }
    }

    private getListRenderer(structure: IReferenceStructure) {
        return (props: RouteComponentProps) => {
            return structure.getListComponent();
        }
    }
}

export default App;
