import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [pages] = useState([
    { name: "about" },
    { name: "event" },
    { name: "contact" },

  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <ApolloProvider client={client}>
      <div>
        <Header>
          <Nav
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          ></Nav>
        </Header>
        <main>
          <Page currentPage={currentPage}></Page>
        </main>

      </div>
    </ApolloProvider>
  );
}

export default App;
