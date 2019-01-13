import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, } from 'reactstrap';
import { DataStructure } from '../Data/DataStructure';

// tslint:disable-next-line:no-empty-interface
interface INavBarProps {
}

// tslint:disable-next-line:no-empty-interface
interface INavBarState {
}

class NavBar extends React.Component<INavBarProps, INavBarState> {
    public constructor(props: INavBarProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Nav className="mb-2">
                    {Object.keys(DataStructure).map(k => (
                        <NavItem key={k}>
                            <NavLink className="nav-link" activeClassName="nav-link disabled" to={`/${k}`}>{DataStructure[k].friendlyName}</NavLink>
                        </NavItem>
                    ))}
                </Nav>
            </div>
        );
    }
}

export default NavBar;
