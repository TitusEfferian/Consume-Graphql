import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Consumer from "./Consumer";

const client = new ApolloClient({
  uri: "https://graphql.titus-efferian.now.sh"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Consumer />
    </ApolloProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
