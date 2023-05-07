import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 90px;
  padding-bottom: 46px;
  margin-left: auto;
  margin-right: auto;

  height: 460px;

  background-color: #848282;

  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: rgb(255, 255, 255);

  & li {
    list-style: none;
  }

  /* ----- top block ----- */
  & .topBlock {
    display: flex;

    margin-bottom: 26px;
    padding-bottom: 78px;

    width: 1075px;

    border-bottom: solid 1px rgba(255, 255, 255, 0.25);
  }

  & .topBlock-nav {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-left: 219px;
    color: rgba(255, 255, 255, 0.7);
  }

  & .topBlock-contacts {
    display: flex;
    flex-direction: column;
    gap: 24px;

    margin-left: 158px;

    & li {
      display: flex;
      gap: 12px;
    }
  }
  /* ----- bottom block ----- */
  & .bottomBlock {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 1075px;

    & .bottomBlock-social {
      display: flex;
      gap: 27px;
    }

    & p {
      margin-left: auto;
    }
  }
`;
