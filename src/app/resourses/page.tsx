import FeatureCard from './_components/FeatureCard';
import LearningCard from './_components/LearningCard';
import EducationalCard from './_components/EducationalCard';
import ProjectCard from './_components/ProjectCard';
const page = () => {
  return (
    <div className='bg-slate-950'>
      <main className="container mx-auto p-4">
        <FeatureCard/>
        <LearningCard/>
        <EducationalCard/>
        <ProjectCard/>
      </main>
    </div>
  );
};

export default page;
