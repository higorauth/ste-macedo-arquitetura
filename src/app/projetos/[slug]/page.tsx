import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/constants";
import { ProjectDetail } from "@/components/sections/ProjectDetail";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20">
      <ProjectDetail
        title={project.title}
        category={project.category}
        location={project.location}
        lot={project.lot}
        builtArea={project.builtArea}
        architect={project.architect}
        description={project.description}
        image={project.image}
        gallery={[...project.gallery]}
      />
    </div>
  );
}
