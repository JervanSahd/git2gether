import React from "react";
import PageContent from "../PageContent";
import About from "../About";
import Events from "../Events";
import Contact from "../Contact";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "events":
        return <Events />;
      case "page":
        return <PageContent />;
      default:
        return <Events />;
    }
  };

  return (
    <section>
      <h2>{(currentPage.name)}</h2>
      {/* <h2>{capitalizeFirstLetter(currentPage.name)}</h2> */}
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
