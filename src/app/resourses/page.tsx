import FeatureCard from './_components/FeatureCard';
import LearningCard from './_components/LearningCard';
import EducationalCard from './_components/EducationalCard';
import ProjectCard from './_components/ProjectCard';
import PaidProjectCard from './_components/PaidProjectCard';
const page = () => {
  return (
    <div className='bg-slate-950'>
      <main className="relative w-full mx-auto p-4">
        <PaidProjectCard/>
        <FeatureCard/>
        <LearningCard/>
        <EducationalCard/>
        <ProjectCard/>
      </main>
    </div>
  );
};

export default page;
