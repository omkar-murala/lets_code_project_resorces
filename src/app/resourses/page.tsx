import DiscoverCourses from "../resourses/components/DiscoverCourses";
import EducationalVideos from '../resourses/components/EducationalVideos';
import FeaturedTopics from '../resourses/components/FeaturedTopics';
import Footer from '../resourses/components/Footer';
import KnowledgeQuizzes from '../resourses/components/KnowledgeQuizzes';
import LearningPaths from '../resourses/components/LearningPaths';
import Navbar from "../resourses/components/Navbar";
import Category from "./components/Category";
import SubCategory from "./components/SubCategory";

const page = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <main className="container mx-auto p-4">
        {/* <DiscoverCourses /> */}
        <div className="pb-10 pt-10 flex flex-col justify-center">
        <SubCategory/>

        </div>
        <FeaturedTopics />
        <LearningPaths />
        <EducationalVideos />
        <KnowledgeQuizzes />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default page;
