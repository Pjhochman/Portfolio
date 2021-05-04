import React, { useContext } from "react";
import { CardItemContext } from "../../../layout/styles";
import { useWindowSize } from "../hooks/useWindowSize";
import { CloseButton } from "../../Buttons/CloseButton";
import { bandPlanner } from "../data/data";
import { FadeInRightAnimation } from "../../../animations/animations";

export const BandPlanner = () => {
  const mediaWidthMobile = 637;
  const { width } = useWindowSize();
  const {
    TopContent,
    TopTitle,
    TopDescription,
    MiddleContent,
    MiddleTitle,
    MiddleDescription,
    BottomContent,
    BottomTitle,
    BottomDescription,
    Link,
    isExpanded
  } = useContext(CardItemContext);

  return (
    <>
      <TopContent alignSelf="start">
        {width > mediaWidthMobile && (
          <FadeInRightAnimation>
            <TopTitle>My Own Work</TopTitle>
            <hr style={{ border: "0.5px solid dark-grey" }} />
          </FadeInRightAnimation>
        )}
        <FadeInRightAnimation>
          <TopDescription>Band Planner</TopDescription>
        </FadeInRightAnimation>
      </TopContent>
      {isExpanded && (
        <>
          <CloseButton />
          {Object.values(bandPlanner[0].middleCardContent).map(
            (item, index, arr) => {
              return (
                <MiddleContent key={item.title}>
                  <MiddleTitle>{item.title}</MiddleTitle>
                  {arr.length - 1 === index && (
                    <Link
                      href={
                        "https://" +
                        bandPlanner[0].middleCardContent.bottomSection.link
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
                        {bandPlanner[0].middleCardContent.middleSection.description.map(
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
          <BottomContent margin>
            <BottomTitle>Progressive Web App&nbsp;|</BottomTitle>
            <BottomDescription>&nbsp;Login Credentials</BottomDescription>
          </BottomContent>
        </>
      )}
    </>
  );
};
