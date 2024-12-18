// Higher Order Component
import { SectionWrapper } from "../higherOrderComponent/index";
import Skills from "./Skills";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import Tech from "./Tech";
import Feedbacks from "./Feedbacks";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";

const SkillsSectionWrapper = SectionWrapper(Skills, "skills");
const ProjectsSectionWrapper = SectionWrapper(Projects, "projects");
const WorkExperienceSectionWrapper = SectionWrapper(WorkExperience, "work");
const TechSectionWrapper = SectionWrapper(Tech, "tech");
const FeedbacksSectionWrapper = SectionWrapper(Feedbacks, "feedbackTestimonials");
const ContactsSectionWrapper = SectionWrapper(Contact, "contact");
const SocialMediaSectionWrapper = SectionWrapper(SocialMedia, "socialmedia");


export {
  SkillsSectionWrapper,
  ProjectsSectionWrapper,
  WorkExperienceSectionWrapper,
  TechSectionWrapper,
  FeedbacksSectionWrapper,
  ContactsSectionWrapper,
  SocialMediaSectionWrapper,
};