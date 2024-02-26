import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloProvider } from "@apollo/client";
import  client  from "./lib/apollo-client";

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
