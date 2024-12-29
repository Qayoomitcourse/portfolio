import Contact from "./components/contact";
import Projects from "./components/projects";
import Heroclient from "./components/hero";

export default function Home() {
  return (
    <div>
      <Heroclient/>
      <Projects/>
      <Contact/>
    </div>
  );
}
