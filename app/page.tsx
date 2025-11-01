import Competences from "./components/competence";
import Header from "./components/header";
import Propos from "./components/aPropos";
import Nav from "./components/nav";
import Parcours from "./components/parcours";
import Projets from "./components/projet";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <Nav />
      <Header />
      <Propos />
      <Parcours />
      <Competences />
      <Projets />
      <Contact />
    </div>
  );
}
