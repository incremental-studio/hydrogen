export default function ProjectContent({content}) {
  return (
    <>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
      {content?.link ? (
        <a href={content.link} target="_blank">
          Visit &rarr;
        </a>
      ) : (
        <p>
          Interested?{` `}
          <a href={'https://twitter.com/benjaminsehl'} target="_blank">
            Let me know &rarr;
          </a>
        </p>
      )}
    </>
  );
}
