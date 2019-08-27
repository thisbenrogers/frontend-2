import React from 'react';
import {Tab, Menu, Icon} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

const createLabel = (iconName, labelText) => (
    <span>
      <Icon name={iconName} />
      {labelText}
    </span>
  );
  
  const homeLabel = createLabel("home", "Home Page");
  const dashboardLabel = createLabel("th", "My Potlucks");
  
  const panes = [
    
    {
      menuItem: ( 
        <Menu.Item key="home" as={NavLink} to={`/home`} content={homeLabel} />
      )
    },
    {
      menuItem: ( 
        <Menu.Item key="dashboard" as={NavLink} to={`/dashboard`} content={dashboardLabel} />
      )
    },
  ];
  
  const Nav = () => <Tab panes={panes} renderActiveOnly={false} />;
  
  export default Nav;