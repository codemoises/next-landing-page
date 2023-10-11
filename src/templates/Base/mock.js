import linksMock from '../../components/NavLinks/mock';

import GridMock from '../../components/GridText/mock';
import { GridText } from '../../components/GridText';

export const mockBase = {
  children: (
    <>
      <GridText {...GridMock} background />
      <GridText {...GridMock} />
      <GridText {...GridMock} background />
      <GridText {...GridMock} />
      <GridText {...GridMock} background />
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<p>Teste de footer</p>',
};
