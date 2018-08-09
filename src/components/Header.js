import React, { Component, Fragment } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import Button from './Button';

export default class Header extends Component {
	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render() {
		return (
			<Fragment>
				<Navbar color="dark" dark expand="lg" className="Navbar">
					<Container>
						<NavbarBrand href="/">
							<img src="/crown.png" alt="Empire Flippers" />
							Empire Flippers
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="/"><strong>888-658-8388</strong></NavLink>
								</NavItem>
								<NavItem>
									<NavLink active href="/">Marketplace</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/">About us</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/">Blog</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/">Podcast</NavLink>
								</NavItem>
								<NavItem>
									<Button text={'Sell Your Site'} full={false} />
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</Fragment>
		);
	}
}
