import Layout from "../components/Layout";
import Booklist from "../components/Booklist";
import fetch from "isomorphic-unfetch";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

if (!process.browser) {
  global.fetch = fetch;
}

const client = new ApolloClient({
  uri: "https://graph-back.herokuapp.com"
});

const Index = props => (
  <ApolloProvider client={client}>
    <Layout>
      <h1>Welcome to books</h1>
      <Booklist />
    </Layout>
  </ApolloProvider>
);

export default Index;
