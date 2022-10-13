import React from "react";

export const SpacerBlock = ({ props }) => {
  const styles = {
    margin: {
      marginBottom: `${props}rem`,
    },
  };

  return (
    <>
      <div style={styles.margin} className="block"></div>
    </>
  );
};
