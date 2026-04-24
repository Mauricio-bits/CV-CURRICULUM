import { projects } from "../../lib/data";
import Card from "../../components/Card";

export default function Projects() {
  return (
    <section className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </section>
  );
}