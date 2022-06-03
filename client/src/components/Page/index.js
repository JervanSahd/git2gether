import React from "react";
import PageContent from "../PageContent";
import About from "../About";
import Events from "../Events";
import InPersonForm from "../Forms/inPersonForm";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about":
        return <About />;
      case "events":
        return <Events />;
      case "create an event":
        return <InPersonForm />;
      case "page":
        return <PageContent />;
      default:
        return <Events />;
    }
  };

  return (
    <section>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
