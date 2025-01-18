import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import East from "./pages/East";
import West from "./pages/West";
import ThankYou from './pages/ThankYou';
import { ReviewProvider } from "./context/ReviewContext";

const eastSidePages = [
  "Langmuir",
  "Benedict",
  "James", //H com
  "Ammann",
  "Oneill",
  "Irving",
  "Gray", //Mendelsohn
  "Chavez",
  "Tubman", //Living learning
];

const westSidePages = [
  "Lauterbur",
  "Yang", //Living learning
  "Chinn",
  "Douglass",
  "Dreiser",
  "Hand",
  "Toscanini", //Tabler
  "Wagner",
  "Stimson",
  "Keller",
  "Greeley", //Roosevelt
  "Baruch",
  "Dewey",
  "Eisenhower",
  "Hamilton",
  "Schick", //Kelly
  "Cardozo",
  "Gershwin",
  "Hendrix",
  "Mount",
  "Whitman", //Roth
  "WestA",
  "WestB",
  "WestC",
  "WestD",
  "WestE",
  "WestF",
  "WestG",
  "WestH",
  "WestI",
  "WestJ",
  "WestK", //West Apartments
  "Schomburg", //Schomburg apartments
  "Chapin", //Chapin apartments
];

// Lazy loading
const importPageComponent = (side, page) =>
  React.lazy(() => import(`./pages/${side}/${page}.jsx`));
const importReviewFormComponent = (side, page) => {
  const capitalizedPage = page.charAt(0).toUpperCase() + page.slice(1);
  return React.lazy(() =>
    import(
      /* @vite-ignore */ `./pages/${side}Reviews/${capitalizedPage}-review`
    )
  );
};

// Fallback loading
const Loading = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "24px",
      fontWeight: "bold",
    }}
  >
    Loading...
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <ReviewProvider>
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/east" element={<East />} />
              <Route path="/west" element={<West />} />
              <Route path="/thank-you" element={<ThankYou />} />

              {/* East Side Pages */}
              {eastSidePages.map((page) => {
                const Component = importPageComponent("eastSide", page);
                const ReviewFormComponent = importReviewFormComponent(
                  "eastSide",
                  page.toLowerCase()
                );
                return (
                  <React.Fragment key={page}>
                    <Route
                      path={`/east/${page.toLowerCase()}`}
                      element={
                        <React.Suspense fallback={<Loading />}>
                          <Component />
                        </React.Suspense>
                      }
                    />
                    <Route
                      path={`/east/${page.toLowerCase()}/create-review`}
                      element={
                        <React.Suspense fallback={<Loading />}>
                          <ReviewFormComponent />
                        </React.Suspense>
                      }
                    />
                  </React.Fragment>
                );
              })}

              {/* West Side Pages */}
              {westSidePages.map((page) => {
                const Component = importPageComponent("westSide", page);
                const ReviewFormComponent = importReviewFormComponent(
                  "westSide",
                  page.toLowerCase()
                );
                return (
                  <React.Fragment key={page}>
                    <Route
                      path={`/west/${page.toLowerCase()}`}
                      element={
                        <React.Suspense fallback={<Loading />}>
                          <Component />
                        </React.Suspense>
                      }
                    />
                    <Route
                      path={`/west/${page.toLowerCase()}/create-review`}
                      element={
                        <React.Suspense fallback={<Loading />}>
                          <ReviewFormComponent />
                        </React.Suspense>
                      }
                    />
                  </React.Fragment>
                );
              })}
            </Routes>
          </main>
          <Footer />
        </ReviewProvider>
      </BrowserRouter>
    </div>
  );
}
