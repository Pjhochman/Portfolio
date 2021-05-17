import React, { useContext } from "react";
import { CardItemContext } from "../Context/cardContext";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { FadeInLeftAnimation, FadeInAnimation } from "../animations";
import { hyperIsland } from "../data/data";
import { CloseButton } from "../../../Buttons/CloseButton";

export const HyperIsland = props => {
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
      {isExpanded && (
        <>
          <BottomContent>
            <BottomTitle>Stockholm&nbsp;|</BottomTitle>
            <BottomDescription>&nbsp;2019–2021</BottomDescription>
          </BottomContent>
          <CloseButton />
          {Object.values(hyperIsland[0].middleCardContent).map(
            (item, index, arr) => {
              return (
                <FadeInAnimation key={item.title} duration="1.1s">
                  <MiddleContent>
                    <MiddleTitle>{item.title}</MiddleTitle>
                    {arr.length - 1 === index && (
                      <Link
                        color="true"
                        onClick={() =>
                          window.open(
                            `https://${hyperIsland[0].middleCardContent.bottomSection.link}`
                          )
                        }
                      >
                        {item.link}
                      </Link>
                    )}
                    <MiddleDescription marginBottom="true">
                      {arr.length - 2 === index ? (
                        <>
                          {
                            hyperIsland[0].middleCardContent.topSection
                              .description
                          }
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
        </>
      )}
      <TopContent
        margin={!isExpanded & (width < mediaWidthMobile) ? "15px 6px" : "14px"}
        textAlign={isExpanded ? "start" : "end"}
        alignSelf={isExpanded ? "flex-start" : "flex-end"}
      >
        {width > mediaWidthMobile ? (
          <>
            <FadeInLeftAnimation duration="0.3s">
              <TopTitle>Education</TopTitle>
              <hr />
            </FadeInLeftAnimation>
            <FadeInLeftAnimation duration="0.5s">
              <TopDescription>Hyper Island</TopDescription>
            </FadeInLeftAnimation>
          </>
        ) : (
          <>
            {isExpanded && (
              <>
                <TopTitle>Hyper Island</TopTitle>
                <hr />
              </>
            )}
            <FadeInLeftAnimation duration="0.1s">
              <TopDescription>Education</TopDescription>
            </FadeInLeftAnimation>
          </>
        )}
      </TopContent>
    </>
  );
};
