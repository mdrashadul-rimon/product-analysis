import React from 'react';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <NavLink activeclassName= 'no-underline text-red-400'
          to={to}
          {...props}
        >
          {children}
        </NavLink>
        {match && " (active)"}
      </div>
    );
  }

export default CustomLink;