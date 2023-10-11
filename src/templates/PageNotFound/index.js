import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="error 404"
      html="<p>A página que você busca não foi encontrada. <a href='/'>Clique para voltar</a></p>"
    />
  );
};
