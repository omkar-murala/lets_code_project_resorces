import EducationalVideos from '../resourses/components/EducationalVideos';
import FeaturedTopics from '../resourses/components/FeaturedTopics';
import KnowledgeQuizzes from '../resourses/components/KnowledgeQuizzes';
import FeatureCard from './_components/FeatureCard';
import LearningCard from './_components/LearningCard';
import EducationalCard from './_components/EducationalCard';
const page = () => {
  return (
    <div className='bg-slate-950'>
      <main className="container mx-auto p-4">
        <FeatureCard/>
        <LearningCard/>
        <EducationalCard/>
      </main>
    </div>
  );
};

export default page;
