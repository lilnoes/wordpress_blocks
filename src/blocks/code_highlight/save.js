export default function Save({ attributes }) {
  const { html } = attributes;
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
