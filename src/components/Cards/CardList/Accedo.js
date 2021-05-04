import React, { useContext } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { CardItemContext } from "../../../layout/styles";
import { CloseButton } from "../../Buttons/CloseButton";
import { accedo } from "../data/data";
import { FadeInAnimation } from "../../../animations/animations";

export const Accedo = props => {
  const mediaWidthMobile = 637;
  const { width } = useWindowSize();
  const {
    TopContent,
    TopTitle,
    TopDescription,
    MiddleContent,
    MiddleTitle,
    MiddleDescription,
    Link,
    isExpanded
  } = useContext(CardItemContext);

  return (
    <>
      <TopContent alignSelf="center" textAlign="center" color="true">
        <FadeInAnimation>
          <TopTitle>Previously</TopTitle>
          <hr style={{ width: "65px", border: "0.5px solid white" }} />
          {width > mediaWidthMobile && (
            <TopDescription>S. Engineer Intern</TopDescription>
          )}
          <TopDescription marginTop="5px">Accedo.tv</TopDescription>
        </FadeInAnimation>
      </TopContent>
      {isExpanded && (
        <>
          <CloseButton color />
          {Object.values(accedo[0].middleCardContent).map(
            (item, index, arr) => {
              return (
                <MiddleContent key={item.title} color="true">
                  <MiddleTitle>{item.title}</MiddleTitle>
                  {arr.length - 1 === index && (
                    <Link
                      color="true"
                      href={
                        "https://" +
                        accedo[0].middleCardContent.bottomSection.link
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
                        {accedo[0].middleCardContent.middleSection.description.map(
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
    </>
  );
};
