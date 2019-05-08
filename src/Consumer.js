import React from "react";
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";

const GET_MESSAGE_QUERY = gql`
  {
    getMessage {
      message
    }
  }
`;

const Consumer = ({ loading, data }) => {
  if (loading || data == undefined) {
    return <p>loading</p>;
  }

  return data.map((x, y) => {
    return <p key={y}>{x.message}</p>;
  });
};

const mapResultToProps = props => {
  return {
    data: props.data.getMessage,
    loading: props.loading
  };
};

export default compose(
  graphql(GET_MESSAGE_QUERY, {
    props: mapResultToProps
  })
)(Consumer);
