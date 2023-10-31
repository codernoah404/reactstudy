import React from "react";
import Base from "../components/Base";
import Listcontainer from "../components/Listcontainer/Listcontainer";

const dummyList = [
  {
    id: 98,
    companyId: 111,
    companyName: "세븐클루스 강남1호점",
    companyTel: "010-6551-6561",
    companyHomepage: "http://sevenclues.com/sub/code_sub04_1.html",
    title: "원한",
    intro:
      "유람선을 타고 친구들과 함께 여행을 즐기던 중 갑자기 찾아온 거센 폭풍우… 삽시간에 유람선을 덥치게 되고 운이 좋게 살아남은 당신은 작은 밀림에 눈을 뜨게 된다. 사람? 아니 원숭이? 정체불명의 생명체는 당신의 친구를 허름한 건물 안으로 끌고 가버린다 . 친구를 구하기 위해 무작정 건물 안으로 들어간 당신. 그런데 무언가 이상하다.... 갇혀있는 친구, 눈앞에 보이는 이상한 기계들. 과연 이곳은 어디일까? 당신은 무사히 이곳을 탈출할 수 있을까?....",
    category: "모험",
    typeOnly: false,
    typeDifferent: false,
    typeNew: false,
    level: 4,
    recommendPerson: 2,
    tool: "보통",
    activity: "보통",
    time: 60,
    grade: 2.6,
    thumbnail:
      "https://roomescape-backend-image.s3.ap-northeast-2.amazonaws.com/theme/d1a62adc-01ed-4a02-a1d9-7db7f820ff92.jpg",
    reviewCount: 254,
    wishCount: 12,
    isWish: false,
    images: {},
    themePrices: {},
    isReview: false,
    address: "서울 강남구 테헤란로2길 8",
    addressDetail: "",
    active: true,
    main: false,
    sortCode: 0,
  },
  {
    id: 70,
    companyId: 334,
    companyName: "미스터리룸 이스케이프 강남점",
    companyTel: "02-536-2564",
    companyHomepage: "://www.httpmysteryroomescape-gn.com/reservation/reservation.html",
    title: "사라진 왕관",
    intro:
      "어느 날, 세계에서 가장 값비싼 왕관이 박물관에서 사라졌다. 그리고 남겨진 메시지 하나. 그 누구도 찾을 수 없는 곳에 내가 있다. 나를 찾아라!! 메시지를 단서로 수많은 사람들이 왕관을 찾아 나섰고, 드디어 왕관이 있는 낡은 성 하나를 발견했다. 그러나 그 성으로 들어간 사람 중 누구도 다시 돌아오지 못했다. 미스터M은 많은 사람들이 지켜보고 있는가운데 태연하게 성안으로 걸어 들어가는데…",
    category: "판타지",
    typeOnly: false,
    typeDifferent: false,
    typeNew: false,
    level: 3,
    recommendPerson: 4,
    tool: "높음",
    activity: "보통",
    time: 60,
    grade: 2.5,
    thumbnail:
      "https://roomescape-backend-image.s3.ap-northeast-2.amazonaws.com/theme/0f24f8e0-fe41-4b87-8bc6-5d661629f28c.jpg",
    reviewCount: 321,
    wishCount: 8,
    isWish: false,
    images: {},
    themePrices: {},
    isReview: false,
    address: "서울 서초구 서초동 1308-10",
    addressDetail: "5층",
    active: true,
    main: false,
    sortCode: 0,
  },
];

const Main = () => {
  return (
    <div>
      <Base />
      <Listcontainer itemList={dummyList} />
    </div>
  );
};

export default Main;
