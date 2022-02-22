import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/pro-light-svg-icons";

export const Resume = ({ portfolioAuthor }) => {
  return (
    <article id="resume" className="resume__block theme__dark">
      <h3 className="resume__heading text__all-caps">Résumé</h3>
      <h2 className="resume__title">Michael P. Wright</h2>
      <p className="resume__subtitle text__all-caps">UI/UX Front-end Developer</p>
      <section className="download-resume__block">
        <a
          href={portfolioAuthor.resumeLink}
          className="download-resume__link"
          target="_blank"
          title="Download/View My Résumé"
          rel="noreferrer"
        >
          <button className="download-resume__button">
            <span className="icon pdf__icon">
              <FontAwesomeIcon icon={faDownload} />
            </span>{" "}
            Download PDF
          </button>
        </a>
      </section>
      <section className="resume about__block">
        {" "}
        <h4 className="resume__subheading about__heading text__all-caps" title="About Me">
          About
        </h4>{" "}
        <p className="about__text">
          I love to solve problems. My favorite parts of software development
          happen in the preparation phase. I enjoy assessing user needs,
          building a Design System, and defending my design choices.
        </p>
        <p className="about__text">
          I’m seeking full-time and contract opportunities as a UX Designer and Front-End Developer to design high impact web and mobile applications.
        </p>
      </section>
      <section className="resume work-experience__block" title="Relevant Work Experience">
        {" "}
        <h4 className="resume__subheading work-experience__text text__all-caps">
          Work Experience
        </h4>{" "}
        <section className="work-experience__job">
          <p className="work-section__job-title">
            Apprentice Application Developer &amp; Designer
          </p>
          <p className="work-section__location-name">
            Nashville Software School | 2021- 2022 | Nashville, TN, USA
          </p>
          <p className="work-section__description">
            <em>
              Immersive full-time software development boot camp focusing on
              front-end development and UI/UX fundamentals.
            </em>{" "}
          </p>
          <ul className="work-section__bullet-points-list">
            <p className="work-section__subsection--header text__all-caps">
              Development
            </p>
            <li className="work__list-item">
              Apply hands-on application of development fundamentals and
              principles through group and individual projects reflecting
              real-world business problems;
            </li>
            <li className="work__list-item">
              Project management/tracking with Github Projects &amp; Issue Tracking;
            </li>
            <li className="work__list-item">Build single-page applications in the React framework leveraging HTML,
CSS, and JavaScript
            </li>
          </ul>
          <ul className="work-section__bullet-points-list">
            <p className="work-section__subsection--header text__all-caps">
              Design
            </p>
            <li className="work__list-item">
            Produce visual &amp; interactive design with strategic use of typography,
layout, color, motion, and behavior;
            </li>
            <li className="work__list-item">Convey interactive story ideas and complex interactions with wireframes
or prototypes;
            </li>
            <li className="work__list-item">Plan user experience with intentional design around speed, efficiency
            </li>
          </ul>
        </section>
        <section className="work-experience__job">
          <p className="work-section__job-title">WordPress Website Designer</p>
          <p className="work-section__location-name">Self-Employed | 2018 - 2021 | Huntsville, AL, USA</p>
          <ul className="work-section__bullet-points-list">
            <li className="work__list-item">Design, develop, and launch websites build with WordPress CMS;</li>
            <li className="work__list-item">Interview clients, perform Content Inventory, and website development
milestones;</li>
            <li className="work__list-item">Manage, backup/restore, update, and migrate website content including user
account management, plug-in updates, and WordPress Core update</li>
          </ul>
        </section>
      </section>
      <section className="resume skills__block"></section>
      <section className="resume education__block"></section>
      <section className="resume__footer download-resume__block">
        <a
          href={portfolioAuthor.resumeLink}
          className="download-resume__link"
          target="_blank"
          title="Download/View My Résumé"
          rel="noreferrer"
        >
          <button className="download-resume__button">
            <span className="icon pdf__icon">
              <FontAwesomeIcon icon={faDownload} />
            </span>{" "}
            Download PDF
          </button>
        </a>
      </section>
    </article>
  );
};
