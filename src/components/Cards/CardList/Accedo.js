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
        {width > mediaWidthMobile ? (
          <FadeInAnimation>
            <TopTitle>Previously</TopTitle>
            <hr style={{ width: "65px", border: "0.5px solid #221e41" }} />
            <TopDescription>S. Engineer Intern</TopDescription>
            <TopDescription marginTop="5px">Accedo.tv</TopDescription>
          </FadeInAnimation>
        ) : (
          <FadeInAnimation>
            <TopTitle
              style={
                width < mediaWidthMobile
                  ? { fontWeight: "300", marginLeft: "3px" }
                  : null
              }
            >
              Previously
            </TopTitle>
            {isExpanded && (
              <>
                <hr style={{ width: "65px", border: "0.5px solid #221e41" }} />
                <TopDescription>S. Engineer Intern</TopDescription>
                <TopDescription marginTop="5px">Accedo.tv</TopDescription>
              </>
            )}
          </FadeInAnimation>
        )}
      </TopContent>
      {isExpanded && (
        <>
          <CloseButton color="true" />
          {Object.values(accedo[0].middleCardContent).map(
            (item, index, arr) => {
              return (
                <FadeInAnimation key={item.title} animation="true">
                  <MiddleContent color="true">
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
                              return (
                                <li style={{ whiteSpace: "nowrap" }} key={item}>
                                  {item}
                                </li>
                              );
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
        </>
      )}
    </>
  );
};
