import React from 'react';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <NavLink className= 'no-underline hover:bg-indigo-300 py-2 px-1 rounded-lg'
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