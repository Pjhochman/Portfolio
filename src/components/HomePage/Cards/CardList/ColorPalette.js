import React, { useContext } from "react";
import { CardItemContext } from "../Context/cardContext";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { CloseButton } from "../../../Buttons/CloseButton";
import { colorPalette } from "../data/data";
import { FadeInRightAnimation, FadeInAnimation } from "../animations";

export const ColorPalette = () => {
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
    Link,
    isExpanded
  } = useContext(CardItemContext);

  return (
    <>
      <TopContent alignSelf="start" flexDirection="column">
        {width > mediaWidthMobile ? (
          <>
            <FadeInRightAnimation duration="0.3s">
              <TopTitle>My Own Work</TopTitle>
              <hr />
            </FadeInRightAnimation>
            <FadeInRightAnimation duration="0.5s">
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
          <CloseButton />
          {Object.values(colorPalette[0].middleCardContent).map(
            (item, index, arr) => {
              return (
                <FadeInAnimation key={item.title} duration="1.1s">
                  <MiddleContent>
                    <MiddleTitle>{item.title}</MiddleTitle>
                    {arr.length - 1 === index && (
                      <Link
                        href={
                          "https://" +
                          colorPalette[0].middleCardContent.bottomSection.link
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.link}
                      </Link>
                    )}
                    <MiddleDescription>
                      {arr.length - 2 === index ? (
                        <>
                          {colorPalette[0].middleCardContent.middleSection.description.map(
                            (item, index, arr) => {
                              return <li key={item}>{item}</li>;
                            }
                          )}
                        </>
                      ) : (
                        <li>{item.description}</li>
                      )}
                    </MiddleDescription>
                  </MiddleContent>
                </FadeInAnimation>
              );
            }
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
