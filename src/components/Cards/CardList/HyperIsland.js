import React, { useContext } from "react";
import { CardItemContext } from "../../../layout/styles";
import { useWindowSize } from "../hooks/useWindowSize";
import { FadeInLeftAnimation } from "../../../animations/animations";
import { hyperIsland } from "../data/data";
import { CloseButton } from "../../Buttons/CloseButton";

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
                <MiddleContent key={item.title}>
                  <MiddleTitle>{item.title}</MiddleTitle>
                  {arr.length - 1 === index && (
                    <Link
                      href={
                        "https://" +
                        hyperIsland[0].middleCardContent.bottomSection.link
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
                        {hyperIsland[0].middleCardContent.middleSection.description.map(
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
        </>
      )}
      <TopContent
        style={width < mediaWidthMobile ? { margin: "15px 6px" } : null}
        textAlign={isExpanded ? "start" : "end"}
        alignSelf={isExpanded ? "flex-start" : "flex-end"}
      >
        {width > mediaWidthMobile ? (
          <>
            <FadeInLeftAnimation>
              <TopTitle>Education</TopTitle>
              <hr style={{ borderTop: "0.5px solid darkgrey" }} />
            </FadeInLeftAnimation>
            <FadeInLeftAnimation>
              <TopDescription>Hyper Island</TopDescription>
            </FadeInLeftAnimation>
          </>
        ) : (
          <>
            {isExpanded && (
              <FadeInLeftAnimation>
                <TopTitle>Hyper Island</TopTitle>
                <hr style={{ borderTop: "0.5px solid darkgrey" }} />
              </FadeInLeftAnimation>
            )}
            <FadeInLeftAnimation>
              <TopDescription>Education</TopDescription>
            </FadeInLeftAnimation>
          </>
        )}
      </TopContent>
    </>
  );
};
