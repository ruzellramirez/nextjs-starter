import type { NextPage } from "next";
import { Card } from "../../components";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const NinetyEightLabs: NextPage = () => {
  return (
    <div>
      <Head>
        <title>98 Labs Coding Exercises</title>
        <meta
          name="description"
          content="Technical Interview: Coding exercises for frontend developer position"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container">
        <div className="home__heading">
          <h3> 98 Labs Coding Exercises</h3>
          <p className="pt-1">
            A modern and responsive website using React.js, Next.js, Typescript,
            Axios, Bootstrap, Docker, and AWS EC2.
          </p>
          <Link href="https://github.com/ruzellramirez/98Labs-Exercises">
            <button className="btn btn-dark btn-sm home__heading__button">
              View Source Code
              <FontAwesomeIcon
                icon={faGithub}
                className="home__heading__logo"
              />
            </button>
          </Link>
        </div>

        <div className="row gx-1">
          <div className="col-lg-6 mb-2">
            <Card
              title="XYZ Problem"
              expectations="The difficulty level of this exercise depends on the level and
                liberties of the applicant - solutions can either be simple or
                complex. The applicant’s approach will show their creativity,
                proper understanding of the technology used, thought process,
                and critical thinking in solving the given problem set."
              address="Frontend or Backend Developer Applicants"
              url="/98labs/xyz-problem"
            ></Card>
          </div>
          <div className="col-lg-6 mb-2">
            <Card
              title="Basic Layout 1"
              expectations="A Junior
            Frontend Developer should be able to accomplish this."
              address="Frontend Developer Applicants"
              url="/98labs/basic-layout-1"
            ></Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NinetyEightLabs;
