import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutConstruction from "./layouts/LayoutConstruction";
import LayoutLinks from "./layouts/LayoutLinks";
import LayoutMedia from "./layouts/LayoutMedia";
import LayoutProperty from "./layouts/LayoutProperty";
import LayoutAutobody from "./layouts/LayoutAutobody";
import LayoutCuisine from "./layouts/LayoutCuisine";
import LayoutCareers from "./layouts/LayoutCareers";


// Views
import Home from './views/Home';
import Autobody from './views/Autobody';
import Construction from "./views/Construction";
import Media from "./views/Media";
import Links from "./views/Links";
import PropertyManagement from "./views/PropertyManagement";
import Cuisine from "./views/Cuisine";
import Careers from "./views/Careers";



// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/autobody" component={Autobody} layout={LayoutAutobody} />
            <AppRoute exact path="/construction" component={Construction} layout={LayoutConstruction} />
            <AppRoute exact path="/links" component={Links} layout={LayoutLinks} />
            <AppRoute exact path="/media" component={Media} layout={LayoutMedia} />
            <AppRoute exact path="/cuisine" component={Cuisine} layout={LayoutCuisine} />
            <AppRoute exact path="/propertymanagement" component={PropertyManagement} layout={LayoutProperty} />
            <AppRoute exact path="/careers" component={Careers} layout={LayoutCareers} />
        </Switch>
      )} />
  );
}

export default App;