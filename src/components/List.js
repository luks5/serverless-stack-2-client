import React, { Component } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";


class List extends React.Component {
  static defaultProps = {
    data: []
  }
  render() {
    const {data} = this.props;

    console.log(data);
    return <div style={{paddingTop: 20}}>
      <ListGroup>
        {
          data.map((e, i) =>
            <ListGroupItem key={i} header={e.topic}>
              {e.name}
            </ListGroupItem>
          )
        }
      </ListGroup>
    </div>
  }
}

export default React.memo(List);
