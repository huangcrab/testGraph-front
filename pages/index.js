import Layout from "../components/Layout";

import Booklist from "../components/Booklist";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://graph-back.herokuapp.com/"
});
const Index = () => (
  <ApolloProvider client={client}>
    <Layout>
      <div>
        <h1>Welcome to Books</h1>
        <Booklist />
      </div>
    </Layout>
  </ApolloProvider>
);

export default Index;
