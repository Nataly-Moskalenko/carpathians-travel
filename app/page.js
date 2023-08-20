import Home from './components/Home';
import Contacts from './components/Contacts';
import Gallery from './components/Gallery';
import About from './components/About';
import Services from './components/Services';

export default function MainHome() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Gallery />
      <Contacts />
    </>
  );
}
