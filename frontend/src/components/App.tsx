import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/ja";

import AccountForm from "./AccountForm";
import PageMain from "./PageMain";
import { useEffect, useRef } from "react";

const globalStyles = css`
  * {
    font-family: "Noto Sans Mono", "Noto Sans JP", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }

  body {
    color: #333;
    line-height: 1.8;
    font-size: 15px;
    margin: 0;
    background: #fff;
    overflow: hidden;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100dvh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 40px;
  overflow-y: scroll;
  scroll-snap-type: y proximity;
`;

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");
dayjs.locale("ja");

const App = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pageMainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current && pageMainRef.current) {
      wrapperRef.current.scrollTo({
        top: pageMainRef.current.offsetTop,
        behavior: "auto",
      });
    }
  }, []);

  return (
    <>
      <Global styles={globalStyles} />
      <Wrapper ref={wrapperRef}>
        <AccountForm />
        <PageMain wrapperRef={wrapperRef} ref={pageMainRef} />
      </Wrapper>
    </>
  );
};

export default App;
