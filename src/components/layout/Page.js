import { Fragment } from 'react';

function Page({ title, children }) {
  return (
    <Fragment>
      <h1 className="layout-title">{title}</h1>
      <section className="layout-content">{children}</section>
    </Fragment>
  );
}


export default Page;


