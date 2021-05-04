import React, { useContext } from "react";
import { CardItemContext } from "../../../Layout/styles";
import { useWindowSize } from "../hooks/useWindowSize";
import { FadeInRightAnimation } from "../../../Animations/animations";
import { colorPalette } from "../data/data";
import { CloseButton } from "../../Buttons/CloseButton";

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
        {width > mediaWidthMobile && (
          <FadeInRightAnimation>
            <TopTitle>My Own Work</TopTitle>
            <hr style={{ borderTop: "0.5px solid darkgrey" }} />
          </FadeInRightAnimation>
        )}
        <FadeInRightAnimation>
          <TopDescription>Band Planner</TopDescription>
        </FadeInRightAnimation>
      </TopContent>
      {isExpanded && (
        <>
          <CloseButton />
          {Object.values(colorPalette[0].middleCardContent).map(
            (item, index, arr) => {
              return (
                <MiddleContent key={item.title}>
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
