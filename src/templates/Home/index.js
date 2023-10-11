import { Base } from '../Base';
import { useEffect, useState } from 'react';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { useLocation } from 'react-router-dom';
import config from '../../config';

function Home() {
  const [data] = useState([]);
  const location = useLocation();

  useEffect(() => {}, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
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
