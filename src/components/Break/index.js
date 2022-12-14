import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Break = ({ color, variant }) => {
  return (
    <div
      className={classnames({
        TxBreak: true,
        [`TxBreak__${color}`]: color,
        TxBreak__wide: variant === "wide",
        TxBreak__extraWide: variant === "extra-wide",
      })}
    />
  );
};

Break.defaultProps = {
  color: "primary-lighter",
};

Break.propTypes = {
  color: PropTypes.oneOf([
    "primary-lighter",
    "secondary",
    "accent-warm",
    "accent-cool",
    "base-lighter",
    "accent-green",
  ]),
};

export default Break;
