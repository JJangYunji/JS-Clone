const quotes = [
  {
    quote: "기억해 너는 세상을 빛으로 가득 채울 수 있는 존재라는 걸.",
    author: "<백설공주>",
  },
  {
    quote: "과거는 아플 수 있어. 하지만 둘 중 하나야. 도망치든가 극복하든가",
    author: "<라이언킹>",
  },
  {
    quote: "잘못된 일에만 너무 신경쓰지마. 항상 되돌릴 방법은 있어!",
    author: "<인사이드 아웃>",
  },
  {
    quote: "행복해야 할 이유는 정말 많아!",
    author: "<인사이드 아웃>",
  },
  {
    quote: "네가 좋아하는 것을 하고, 네가 하는것을 사랑해봐",
    author: "<라푼젤>",
  },
  {
    quote: "아무것도 안 하는 것보다는, 그게 나을 수도 있어.",
    author: "<스누피>",
  },
  {
    quote: "매일이 행복하진 않지만 행복한 일은 매일 있어!",
    author: "<곰돌이 푸>",
  },
  {
    quote: "날 나답게 만드는 일들이 날 특별하게 만들어!",
    author: "<곰돌이 푸>",
  },
  {
    quote:
      "노력한다고 항상 성공할 순 없지만, 성공한 사람들은 모두 노력했단 걸 알아둬.",
    author: "<곰돌이 푸>",
  },
  {
    quote:
      "나에겐 철학이 있어. 어려운 일이 있다면, 언젠가는 좋은 일도 있다는 거야.",
    author: "<스누피>",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;
