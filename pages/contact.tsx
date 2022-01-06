import { siteMetadata, socialMenu } from '../config';

function Contact() {
  return (
    <div className="flex max-w-5xl mx-auto w-full min-h-screen">
      <div className="w-full relative m-auto justify-between px-4">
        <h1 className="title h1 -mt-16">
          <span className="pb-3 inline-block">
            🤙
          </span>
          <br />
          Say hello ―
        </h1>
        <ul className="h3 mt-5 mb-4">
          <li>
            <a href={`mailto:${siteMetadata.mail}`}>
              {siteMetadata.mail}
            </a>
          </li>
          {socialMenu.map(({ label, link }) => (
            <li key={link}>
              <a href={link} target="_blank" rel="noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
