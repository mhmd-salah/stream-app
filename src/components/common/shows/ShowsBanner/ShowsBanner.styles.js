import styled from "styled-components";
import { media, theme } from "../../../../styles/theme/theme";

export const ShowsBannerWrapper = styled.section`
  .banner-img {
    min-height: 74vh;
    border-radius: 12px;
    padding: 60px 40px;

    ${media.xl`
        padding:40px 20px;
      `}
    ${media.lg`
        padding:30px 20px;
      `}
      ${media.sm`
        padding:20px 16px;
      `}
  }
  .banner-content {
    max-width: 1000px;
    margin-inline: auto;

    .summary-text {
      color: ${theme.colors.white} p {
        ${media.lg`
          font-size:16px !important;

          `}
      }
    }
  }
`;
