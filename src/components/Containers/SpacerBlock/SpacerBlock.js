import React from "react";

export const SpacerBlock = ({props}) => {
    
    const styles = {
      margin: {
          marginBottom: `${props}rem`,
    
      },
    };

    return (
        <>
      <div style={styles.margin} class="block"></div>
    </>
  );
};



