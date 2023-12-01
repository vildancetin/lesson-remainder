import LessonCard from "../components/LessonCard/LessonCard";
import LessonStyle from "./Lesson.module.css";

import { data } from "../helper/data";

const Lesson = () => {
  return (
    <div className={LessonStyle.tasks}>
      <h5>Your Lessons</h5>

      <LessonCard data={data} />
    </div>
  );
};

export default Lesson;
