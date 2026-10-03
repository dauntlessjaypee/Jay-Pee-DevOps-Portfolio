import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const skills = [
  
];

const toolCards = [
   {
    title: 'Cloud & Infrastructure',
    text: 'AWS infrastructure using EC2, EKS, IAM, VPC, ALB, RDS, S3, ECR and CloudWatch, with Terraform for Infrastructure as Code.'
  },
  {
    title: 'Containers & Kubernetes',
    text: 'Docker containerization and Kubernetes workloads using Deployments, Services, ConfigMaps, Secrets and multi-node clusters.'
  },
  {
    title: 'CI/CD & GitOps',
    text: 'Jenkins pipelines, Maven builds, GitHub Webhooks and Argo CD GitOps workflows for automated application delivery.'
  },
  {
    title: 'Monitoring & Operations',
    text: 'Prometheus and Grafana monitoring, Linux administration, NGINX and troubleshooting of applications and Kubernetes workloads.'
  }
];

function App() {
  return (
    <main>

      <nav className="nav shell">
        <a className="brand" href="#top">
          <span>JP</span> Jai Parkash
        </a>

        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </div>

        <a
          className="navcta"
          href="mailto:jaypeesoftech@outlook.com"
        >
          Contact
        </a>
      </nav>

      <section className="hero shell" id="top">

        <div className="heroCopy">

          <div className="eyebrow">
            <span className="pulse"></span>
            OPEN TO DEVOPS OPPORTUNITIES
          </div>

          <h1>
            Hi, I'm Jai Parkash.
            <br />
            <em>DevOps Engineer.</em>
          </h1>

          <p className="lead">
            Building reliable systems and automating application delivery
            with AWS, Docker, Kubernetes, Jenkins, Terraform and GitOps.
          </p>

          <div className="actions">
            <a className="primary" href="#projects">
              View Projects →
            </a>

            <a
              className="secondary"
              href="/Jai-Parkash-Resume.pdf"
              download
             >
               Download Resume
             </a>

            <a
              className="secondary"
              href="mailto:jaypeesoftech@outlook.com"
            >
              Get in touch
            </a>
          </div>

          <div className="meta">
            <span>Nagpur, India</span>
            <span>2.5+ years experience</span>
          </div>

        </div>

        <div className="terminalCard">

          <div className="terminalTop">
            <i></i>
            <i></i>
            <i></i>
            <span>devops@portfolio:~</span>
          </div>

          <div className="terminalBody">

            <p>
              <b>$</b> kubectl get deployment
            </p>

            <p className="muted">
              NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              READY&nbsp;&nbsp; STATUS
            </p>

            <p>
              employee-backend&nbsp; 1/1&nbsp;&nbsp;
              <strong>Running</strong>
            </p>

            <p>
              frontend&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              2/2&nbsp;&nbsp;
              <strong>Running</strong>
            </p>

            <br />

            <p>
              <b>$</b> argocd app get employee-management
            </p>

            <p>
              Sync Status:&nbsp;&nbsp;
              <strong>Synced</strong>
            </p>

            <p>
              Health Status:&nbsp;
              <strong>Healthy</strong>
            </p>

            <br />

            <p className="cursor">
              <b>$</b> _
            </p>

          </div>
        </div>

      </section>

      <section className="section shell" id="about">

        <div className="sectionLabel">
          01 / ABOUT
        </div>

        <div className="aboutGrid">

          <h2>
            I turn infrastructure into a{' '}
            <span>repeatable process.</span>
          </h2>

          <div>
            <p>
              I work across development and operations, with hands-on
              experience building Java applications, containerizing
              workloads, provisioning infrastructure and deploying
              applications on Kubernetes.
            </p>

            <p>
              My focus is practical automation: fewer manual steps,
              reproducible deployments, observable systems and
              Git-driven delivery.
            </p>
          </div>

        </div>
      </section>

      <section className="section shell" id="skills">

        <div className="sectionLabel">
          02 / CAPABILITIES
        </div>

        <div className="cardGrid">

          {toolCards.map(({ title, text }) => (
            <article className="capCard" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}

        </div>

        <div className="skillCloud">
          {skills.map(skill => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

      </section>

      <section className="section shell" id="projects">

        <div className="sectionLabel">
          03 / FEATURED PROJECT
        </div>

        <article className="project">

          <div className="projectNum">
            01
          </div>

          <div className="projectContent">

            <div className="projectHead">
              <div>
                <p className="overline">
                  DEVOPS · KUBERNETES · GITOPS
                </p>

                <h2>
                  Employee Management System
                </h2>
              </div>
            </div>

            <p>
             <p>
                Built and deployed a full-stack Employee Management System using
                React, Spring Boot and PostgreSQL. Containerized the application
                with Docker and deployed frontend, backend and database workloads
                on a multi-node Kubernetes cluster. Implemented Jenkins CI with
                GitHub Webhooks, Argo CD GitOps delivery, and Prometheus/Grafana
                monitoring for the Kubernetes environment.
              </p>
            </p>

            <div className="architecture">
              <span>GitHub</span>
              <b>→</b>
              <span>Jenkins</span>
              <b>→</b>
              <span>Docker</span>
              <b>→</b>
              <span>Argo CD</span>
              <b>→</b>
              <span>Kubernetes</span>
            </div>

            <div className="projectTags">
              <span>Spring Boot</span>
              <span>React</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>Argo CD</span>
            </div>

            <div className="projectLinks">
              <a
                href="https://github.com/dauntlessjaypee/employee-management-system"
                target="_blank"
                rel="noreferrer"
                className="primary"
              >
    View Project on GitHub →
  </a>
</div>

          </div>
        </article>

      </section>

      <section className="section shell" id="experience">

        <div className="sectionLabel">
          04 / EXPERIENCE & EDUCATION
        </div>

        <div className="timeline">

          <article>

            <div className="date">
              FEB 2024 — PRESENT
            </div>

            <div>
              <h3>DevOps Engineer</h3>

              <h4>
                CloudContainer Technologies Pvt. Ltd.
              </h4>

              <p>
                Hands-on work with Linux, AWS, Docker, Kubernetes,
                Jenkins, Terraform, Git and CI/CD practices,
                including application containerization and
                Kubernetes deployments.
              </p>
            </div>

              </article>

                      <article>
                <div className="date">
                  2026
                </div>

                <div>
                  <h3>M.Tech - Computer Science & Engineering</h3>
                  <h4>J.C. Bose University, Faridabad</h4>
                  <p>
                    Master of Technology in Computer Science & Engineering.
                  </p>
                </div>
              </article>

              <article>
                <div className="date">
                  2021
                </div>

                <div>
                  <h3>M.Sc - Computer Science</h3>
                  <h4>DAV Centenary College</h4>
                  <p>
                    Master of Science in Computer Science.
                  </p>
                </div>
              </article>

              <article>
                <div className="date">
                  2019
                </div>

                <div>
                  <h3>B.Sc - Non-Medical</h3>
                  <h4>IGNOU</h4>
                  <p>
                    Bachelor of Science in Non-Medical studies.
                  </p>
                </div>
              </article>

              <article>
                <div className="date">
                  2012
                </div>

                <div>
                  <h3>Diploma - Electronics & Communication Engineering</h3>
                  <h4>Government Polytechnic, Hisar</h4>
                  <p>
                    Diploma in Electronics & Communication Engineering.
                  </p>
                </div>
              </article>

        </div>

      </section>

      <section className="section shell" id="achievements">

  <div className="sectionLabel">

  </div>

  <div className="cardGrid">

    

  </div>

</section>

      <section className="contact shell">

        <p className="overline">
          LET'S BUILD SOMETHING RELIABLE
        </p>

        <h2>
          Looking for a DevOps engineer?
        </h2>

        <a href="mailto:jaypeesoftech@outlook.com">
          jaypeesoftech@outlook.com
        </a>

        <div className="socials">

          <a
            href="https://www.linkedin.com/in/jaypee-dauntless"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/dauntlessjaypee"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

        </div>

      </section>

      <footer className="shell">
        © 2026 Jai Parkash
        <span>Designed for the cloud.</span>
      </footer>

    </main>
  );
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );