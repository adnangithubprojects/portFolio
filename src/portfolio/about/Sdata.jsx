import react from "react";
// import a from "/images/section41.jpg";
// import b from "/images/section42.jpg";
// import c from "/images/section43.jpg";

let a = <img src="/images/section41.jpg" />;
let b = <img src="/images/section42.jpg" />;
let c = <img src="/images/section43.jpg" />;

let flutter = <img src="/icons/1_flutter.png" />;
let wordpres = <img src="/icons/2_template.png" />;
let ceo = <img src="/icons/3_Icon.png" />;
let nodjs = <img src="/icons/4_icon.png" />;
let ui_ux = <img src="/icons/5_collection.png" />;
let native = <img src="/icons/6_icon.png" />;

const homeSec4 = [
  {
    icn: a,
    name: "Flutter",
    text: "Lorem Ipsum",
  },
  {
    icn: b,
    name: "Word Press",
    text: "Lorem Ipsum",
  },
  {
    icn: c,
    name: "SEO",
    text: "Lorem Ipsum",
  },
];

const homeSec3 = [
  {
    icn: flutter,
    name: "Flutter",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industr Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    icn: wordpres,
    name: "WordPress",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industr Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    icn: ceo,
    name: "SEO",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industr Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

const sdata = [
  {
    icn: flutter,
    name: "Flutter",
    text: "Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.",
  },
  {
    icn: wordpres,
    name: "WordPress",
    text: "WordPress is a free, open-source website creation platform. On a more technical level, WordPress is a content management system (CMS).",
  },
  {
    icn: ceo,
    name: "SEO",
    text: "Search engine optimization: the process of making your site better for search engines. Also the job title of a person who does this for a living",
  },
  {
    icn: nodjs,
    name: "NodJS",
    text: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web ",
  },
  {
    icn: ui_ux,
    name: "UI/UX",
    text: " User Interface (UI) and User Experience (UX) is that UI refers to the aesthetic elements by which people interact with a product, while UX is about the experience a user has with a product or service.",
  },
  {
    icn: native,
    name: "Web Design",
    text: "The art and science of building the look, and how a website functions in a nutshell. Having a clear user interface and easy to use website will ultimately lead to a better user experience for your target audience.",
  },
];

// ===================2nd grid===================
let ps = <img src="/icons/newfolder/1PS.png" />;
let figma = <img src="/icons/newfolder/2Figma.png" />;
let adobexd = <img src="/icons/newfolder/3xd.png" />;
let PsStar = <img src="/icons/newfolder/ps.png" />;
let FigmaStar = <img src="/icons/newfolder/figma.png" />;
let XdStar = <img src="/icons/newfolder/xd.png" />;

const card1 = [
  {
    icn: ps,
    name: "PhotoShop",
    text: "If you can dream it, you can make it with Photoshop.",
    review: PsStar,
  },
  {
    icn: figma,
    name: "Figma",
    text: "With Figma, everyone works towards a shared goal.",
    review: FigmaStar,
  },
  {
    icn: adobexd,
    name: "AdobXd",
    text: "Adobe XD is a fast & powerful UI/UX design solution.",
    review: XdStar,
  },
];

let freelancing = <img src="/icons/newfolder/Pluma.png" />;
let figmaa = <img src="/icons/newfolder/2Figma.png" />;
let platzi = <img src="/icons/newfolder/5platzi.png" />;

const sec2 = [
  {
    icn: freelancing,
    name: "FreeLancig",
    text: "Work as an independent company rather than be employed by someone else.",
  },
  {
    icn: figmaa,
    name: "Figma",
    text: "With Figma,our product teams to ship new products faster and feel more confident in their decisions.",
  },
  {
    icn: platzi,
    name: "AdobXd",
    text: "Adobe XD is a fast & powerful UI/UX design solution for websites, apps & more.",
  },
];

// ==================sec3================
let trello = <img src="/icons/newfolder/7Trello.png" />;
let notion = <img src="/icons/newfolder/12Vector.png" />;
let jira = <img src="/icons/newfolder/6JIRA.png" />;
let gSuit = <img src="/icons/newfolder/9Vector.png" />;
let slack = <img src="/icons/newfolder/10Slack.png" />;
let discord = <img src="/icons/newfolder/11Vector.png" />;

const sec3 = [
  {
    icn: trello,
    name: "Trello",
  },
  {
    icn: notion,
    name: "Notion",
  },
  {
    icn: jira,
    name: "JIRA",
  },
  {
    icn: gSuit,
    name: "G-Suit",
  },
  {
    icn: slack,
    name: "Slack",
  },
  {
    icn: discord,
    name: "Discord",
  },
];
export default sdata;
export { card1, sec2, sec3, homeSec3, homeSec4 };
