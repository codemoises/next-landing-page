import P from 'prop-types';
import Head from 'next/head';
import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import config from '../../config';

function Home({ data }) {
  if (!data || !data.length) {
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      <Head>
        <title>
          {title} | {config.siteName}
        </title>
      </Head>
      {sections.map((section, index) => {
        const { componet } = section;
        const key = `${slug}-${index}`;
        if (componet === 'section.section-two-columns') {
          return <GridTwoColumn key={key} {...section} />;
        }
        if (componet === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }
        if (componet === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }
        if (componet === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;

Home.propTypes = {
  data: P.array,
};
