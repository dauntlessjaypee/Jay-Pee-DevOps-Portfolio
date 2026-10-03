import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const skills = [
  'AWS', 'Linux', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform',
  'Git & GitHub', 'Argo CD', 'Prometheus', 'Grafana',
  'Java', 'Spring Boot', 'PostgreSQL'
];

const toolCards = [
  {
    title: 'Cloud & IaC',
    text: 'AWS infrastructure, Terraform provisioning and Linux administration.'
  },
  {
    title: 'Containers',
    text: 'Docker image creation, Kubernetes deployments, services and application operations.'
  },
  {
    title: 'CI/CD & GitOps',
    text: 'Jenkins pipelines, GitHub workflows and Argo CD based Kubernetes delivery.'
  },
  {
    title: 'Observability',
    text: 'Prometheus, Grafana, Node Exporter and Kubernetes monitoring.'
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
            Building reliable systems.
            <br />
            <em>Automating delivery.</em>
          </h1>

          <p className="lead">
            Jr. DevOps Engineer focused on cloud infrastructure,
            Kubernetes, CI/CD automation and production-ready
            application delivery.
          </p>

          <div className="actions">
            <a className="primary" href="#projects">
              View my work →
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
              A full-stack employee management application used to
              implement an end-to-end DevOps environment:
              Java/Spring Boot backend, React frontend, PostgreSQL,
              Docker, multi-node Kubernetes, Jenkins CI, Argo CD
              GitOps and Prometheus/Grafana monitoring.
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
              <h3>M.Tech</h3>

              <h4>
                Postgraduate Engineering
              </h4>

              <p>
                Completed M.Tech with project work centered on
                application development and DevOps practices.
              </p>
            </div>

          </article>

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