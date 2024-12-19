import { SectionWrapper } from "../higherOrderComponent/index";

import Hero from "./Hero";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import Feedbacks from "./Feedbacks";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";

const SkillsSectionWrapper = SectionWrapper(Skills, "skills");
const ProjectsSectionWrapper = SectionWrapper(Projects, "projects");
const WorkExperienceSectionWrapper = SectionWrapper(WorkExperience, "work");
const FeedbacksSectionWrapper = SectionWrapper(Feedbacks,"feedbackTestimonials");
const ContactsSectionWrapper = SectionWrapper(Contact, "contact");
const SocialMediaSectionWrapper = SectionWrapper(SocialMedia, "socialmedia");

export {
  Hero,
  Navbar,
  SkillsSectionWrapper,
  WorkExperienceSectionWrapper,
  ProjectsSectionWrapper,
  FeedbacksSectionWrapper,
  ContactsSectionWrapper,
  SocialMediaSectionWrapper,
};
