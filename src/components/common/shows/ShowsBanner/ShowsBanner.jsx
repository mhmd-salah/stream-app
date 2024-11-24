import { FiExternalLink } from "react-icons/fi";
import { BaseLinkPrimary } from "../../../../styles/components/Button";
import { Container, HeadingTitle, Paragraph } from "../../../../styles/global/default";
import { ShowsBannerWrapper } from "./ShowsBanner.styles";
import PropTypes from "prop-types";
import { MdLanguage } from "react-icons/md";
import { Icons } from "../../../../assets/icons";

const ShowsBanner = ({ showData }) => {
  return (
    <ShowsBannerWrapper className="top-spacing-fix">
      <Container>
        <div className="banner-img flex justify-center items-end">
          <div className="banner-content text-center">
            <HeadingTitle className="banner-title">
              {showData?.name}
            </HeadingTitle>
            <div
              className="summary-text"
              dangerouslySetInnerHTML={{
                __html: showData?.summary?.substring(0, 240) + " ...",
              }}
            ></div>
            <div className="banner-info flex flex-col items-center">
              <BaseLinkPrimary
                to={showData?.officialSite}
                target="_black"
                rel="nooperner noreferrer"
              >
                <span className="btn-text">Viste Official Site</span>
                <span className="btn-icon">
                  <FiExternalLink/>
                </span>
              </BaseLinkPrimary>
              <div className="flex items-center flex-wrap banner-info-item">
                <Paragraph>
                  <span className="font-bold text-white">
                    Genre:
                  </span>
                  <div className="font-semibold">
                    {showData?.genres?.join(", ")}
                  </div>
                </Paragraph>
                <ul className="info-list flex items-center justify-center flex-wrap">
                  <li className="inline-flex items-center info-item">
                    <span className="info-item-icon inline-flex items-center justify-center">
                      <MdLanguage size={20}/>
                    </span>
                    <span className="info-item-value">
                      {showData?.language}
                    </span>
                  </li>
                  <li className="inline-flex items-center info-item">
                    <span className="info-item-icon inline-flex items-center justify-center">
                      <img src={Icons.Star} alt="" />
                    </span>
                    <span className="info-item-value">
                      {showData?.rating?.avarage}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ShowsBannerWrapper>
  );
};

export default ShowsBanner;

ShowsBanner.propTypes = {
  showData: PropTypes.object.isRequired,
};
