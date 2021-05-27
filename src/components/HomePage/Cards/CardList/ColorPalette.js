import React, { useContext } from 'react';
import { CardItemContext } from '../Context/cardContext';
import useWindowSize from '../../../../hooks/useWindowSize';
import CloseButton from '../../../Buttons/CloseButton';
import { colorPalette } from '../data/data.json';
import { FadeInRightAnimation, FadeInAnimation } from '../animations';

const ColorPalette = () => {
  const mediaWidthMobile = 637;
  const { width } = useWindowSize();

  const {
    TopContent,
    MiddleContent,
    BottomContent,
    TopTitle,
    TopDescription,
    MiddleTitle,
    MiddleDescription,
    BottomTitle,
    BottomDescription,
    isExpanded,
    Button,
  } = useContext(CardItemContext);

  return (
    <>
      <TopContent alignSelf="start" flexDirection="column">
        {width > mediaWidthMobile ? (
          <>
            <FadeInRightAnimation duration="0.2s">
              <TopTitle>My Own Work</TopTitle>
              <hr />
            </FadeInRightAnimation>
            <FadeInRightAnimation duration="0.4s">
              <TopDescription>Color Palette</TopDescription>
            </FadeInRightAnimation>
          </>
        ) : (
          <>
            {isExpanded && (
              <>
                <TopTitle>My Own Work</TopTitle>
                <hr />
              </>
            )}
            <FadeInRightAnimation duration="0.1s">
              <TopDescription>Color Palette</TopDescription>
            </FadeInRightAnimation>
          </>
        )}
      </TopContent>
      {isExpanded && (
        <>
          <CloseButton color="#e9f0fb" />
          {Object.values(colorPalette[0].middleCardContent).map(
            (item, index, arr) => (
              <FadeInAnimation key={item.title} duration="1.1s">
                <MiddleContent>
                  <MiddleTitle>{item.title}</MiddleTitle>
                  {arr.length - 1 === index && (
                    <Button
                      type="button"
                      color="true"
                      onClick={() => window.open(
                        `https://${colorPalette[0].middleCardContent.bottomSection.link}`,
                      )}
                    >
                      {item.link}
                    </Button>
                  )}
                  <MiddleDescription width="360px">
                    {arr.length - 2 === index ? (
                      <>
                        {colorPalette[0].middleCardContent.middleSection.description.map(
                          (value) => (
                            <li key={value}>{value}</li>
                          ),
                        )}
                      </>
                    ) : (
                      <li>{item.description}</li>
                    )}
                  </MiddleDescription>
                </MiddleContent>
              </FadeInAnimation>
            ),
          )}
          <BottomContent>
            <BottomTitle>Mobile & Desktop&nbsp;|</BottomTitle>
            <BottomDescription>&nbsp;Interactive Design</BottomDescription>
          </BottomContent>
        </>
      )}
    </>
  );
};

export default ColorPalette;
