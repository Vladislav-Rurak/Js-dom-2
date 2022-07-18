const news = {
  title: "Title1",
  headerBgSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QPmuw27ljoUkLoqQ0mA3e4MD-XGZivYJ_Q&usqp=CAU",
  category: "Category1",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, error minus dolor id reiciendis maiores vitae explicabo ex in ipsum!",
  date: "12.6.2020",
};
const newsEl = document.querySelector(
  ".news-list"
);

const newsListItem =
  document.createElement("li");
newsListItem.classList.add(
  "news-list-item"
);

const newsTitleInfo =
  document.createElement("h2");
newsTitleInfo.classList.add(
  "title-info"
);
newsTitleInfo.textContent = `${news.title}`;
newsTitleInfo.style.backgroundImage =
  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QPmuw27ljoUkLoqQ0mA3e4MD-XGZivYJ_Q&usqp=CAU)";

const newsCategoryInfo =
  document.createElement("p");
newsCategoryInfo.classList.add(
  "category-info"
);
newsCategoryInfo.textContent = `${news.category}`;

const newsMainInfo =
  document.createElement("p");
newsMainInfo.classList.add("main-info");
newsMainInfo.textContent = `${news.body}`;

const newsDateInfo =
  document.createElement("p");
newsDateInfo.classList.add("date-info");
newsDateInfo.textContent = `${news.date}`;

newsEl.append(
  newsListItem,
  newsTitleInfo,
  newsCategoryInfo,
  newsMainInfo,
  newsDateInfo
);

newsEl.addEventListener(
  "click",
  (e) => {
    e.currentTarget.remove(
      ".user-list-item"
    );
  }
);
