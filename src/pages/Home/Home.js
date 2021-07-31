import "./Home.css"
import React from 'react'
import Container from "../../containers/Container";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
    backColor: "rgb(255, 206, 50)",
    title: "Детский мир",
    to: "detskiy-mir",
  },
  {
    icon: "https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png",
    backColor: "rgb(58, 119, 255)",
    title: "Недвижимость",
    to: "real-estate",
  },
  {
    icon: "https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png",
    backColor: "rgb(35, 229, 219)",
    title: "Транспорт",
    to: "transport",
  },
  {
    icon: "https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-2x.png",
    backColor: "rgb(255, 86, 54)",
    title: "Ish",
    to: "job",
  },
  {
    icon: "https://static.olx.uz/static/olxuz/packed/img/2f3f64b4385c02d4b4bdec60512414ddf3.png",
    backColor: "rgb(255, 246, 217)",
    title: "Животные",
    to: "enimal",
  },
  {
    icon: "https://static.olx.uz/static/olxuz/packed/img/2f828dab38aaebec334f341d5246c125a2.png",
    backColor: "rgb(206, 221, 255)",
    title: "Дом и сад",
    to: "home",
  },
  {
    icon: "https://static.olx.uz/static/olxuz/packed/img/2fbdd6cc9f1e2add8947ae07a2e4be0655.png",
    backColor: "rgb(200, 248, 246)",
    title: "Электроника",
    to: "elektironika",
  },
  {
    icon: "	https://categories.olxcdn.com/assets/categories/olxuz/uslugi-7-2x.png",
    backColor: "rgb(255, 214, 201)",
    title: "Бизнес и услуги",
    to: "elektironika",
  },
  {
    icon: "https://categories.olxcdn.com/assets/categories/olxuz/moda-i-stil-891-2x.png",
    backColor: "rgb(255, 206, 50)",
    title: "Мода и стиль",
    to: "modastil",
  },
  {
    icon: "https://categories.olxcdn.com/assets/categories/olxuz/hobbi-otdyh-i-sport-903-2x.png",
    backColor: "rgb(206, 221, 255)",
    title: "Хобби, отдых и спорт",
    to: "sport",
  },
  {
    icon: "https://static.olx.uz/static/olxuz/packed/img/2f6aba4f6fa3bb4c01279d64cdba97513b.png",
    backColor: "rgb(206, 221, 255)",
    title: "Отдам даром",
    to: "otdam",
  },
];

const Home = () => {
    return (
      <Container>
        <div className="container py-4">
          <h1 className="text-center">Главные категории</h1>
          {categories.map(v => (
            <Link to={v.to} key={v.to} className="category">
              <div className="icon " style={{ backgroundColor: v.backColor }}>
                <img src={v.icon} alt="" />
              </div>
              <p className="text-dark fw-bold"> {v.title}</p>
            </Link>
          ))}
        </div>
      </Container>
    );
}

export default Home;
