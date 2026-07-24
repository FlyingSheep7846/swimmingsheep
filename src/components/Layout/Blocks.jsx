import React from "react";

const styles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem'
};

export default function Blocks({children}) {
  return(
    <div style={styles}>
        {children}
    </div>
  );
}