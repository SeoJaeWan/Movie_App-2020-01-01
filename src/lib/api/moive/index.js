import client from "../client";

export const getMoives = ({ year, month }) => {
  const date = year + (month < 10 ? "0" + month : month);
  return client.get(
    `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json.jsp?collection=kmdb_new&type=극영화&releaseDts=${date}01&releaseDte=${date}31&listCount=50&sort=prodYear&ServiceKey=${process.env.REACT_APP_SERVICEKEY}&genre=코메디|액션
    `
  );
};
