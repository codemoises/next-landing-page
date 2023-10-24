import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export type GridTwoColumnProps = {
  title: string;
  text: string;
  srcImg: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
};

export const GridTwoColumn = ({
  title,
  text,
  srcImg,
  background = false,
  sectionId = '',
}: GridTwoColumnProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};
