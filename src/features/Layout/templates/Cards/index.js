import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Col, Row } from "components/Grid";
import Card from "components/Card";
import Link from "features/Link";

const Cards = ({ title, text, items, className, columns }) => {
  const columnSize = {
    1: "12",
    2: "6",
    3: "4",
    4: "3",
  };
  return (
    <div
      className={classnames({
        TxCards: true,
        [className]: Boolean(className),
      })}
    >
      {title && <h2>{title}</h2>}
      {text && <div className="margin-bottom-4">{text}</div>}

      <Row>
        {items.map((item, i) => {
          return (
            <Col
              key={`txCards-${i}`}
              className={classnames({ [item.className]: item.className })}
              size="12"
              desktop={columnSize[columns]}
            >
              <Card>
                {item.subtitle && <span className="us-text-h5">{item.subtitle}</span>}
                {item.title && item.link && 
                  <Link url={item.link}>{item.title}</Link>
                }
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

Cards.defaultProps = {
  columns: "2",
  items: [],
};

Cards.propTypes = {
  title: PropTypes.node,
  text: PropTypes.node,
  className: PropTypes.node,
  items: PropTypes.array,
};

export default Cards;
