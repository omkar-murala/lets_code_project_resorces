import EducationalVideos from '../resourses/components/EducationalVideos';
import FeaturedTopics from '../resourses/components/FeaturedTopics';
import KnowledgeQuizzes from '../resourses/components/KnowledgeQuizzes';
import LearningPaths from '../resourses/components/LearningPaths';
import FeatureCard from './_components/FeatureCard';

const page = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <main className="container mx-auto p-4">
        {/* <DiscoverCourses /> */}
        <div className="pb-10 pt-10 flex flex-col justify-center">
        {/* <SubCategory/> */}

        </div>
        <FeatureCard/>
        {/* <FeaturedTopics /> */}
        <br></br>
        <LearningPaths />
        <EducationalVideos />
        <KnowledgeQuizzes />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default page;
