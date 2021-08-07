import "./Home.css"
import React from 'react'
import Container from "../../containers/Container";
import { Link } from "react-router-dom";
import { faHeart, faHeartbeat, faSearch, faStoreSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
const obj = [
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/30slr7hgyj323-UZ/image;s=644x461",
    title: "Avto GPS tracker Sinotrack ST-901",
    price: "300 000 сум",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/avt6gbwd9ur71-UZ/image;s=644x461",
    title: "Продаю абсолютно новые, разборные гантели по 25кг.",
    price: "615 000 сум",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/z25am0zom64v2-UZ/image;s=644x461",
    title: "Cobalt кондиционер новый+установка+фреон+гарантия",
    price: "575 у.е.",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/laned8m4rda53-UZ/image;s=644x461",
    title: "А3 Принтер продоёться СРОЧНО!!",
    price: "3 000 000 сум",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/qkyszn3os1uh3-UZ/image;s=644x461",
    title:
      "Centrum Adults Multivitamin, 130 таблеток Американский Центрум Оригина",
    price: "175 000 сум",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/mnkn3n8tyb4i1-UZ/image;s=644x461",
    title:
      "Супер! Массажер массажёр Massajer massaj apparat massajor massajyor",
    price: "149 000 сум",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/47ji5l0cfhj3-UZ/image;s=644x461",
    title: "Turli hildagi shpoklovkalarimiz bor",
    price: "500 сум",
  },
];
const Home = () => {
    return (
      <Container>
        <div className="container-fluid bg-white py-4">
          <div className="container">
            {" "}
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
        </div>
        <div className="container ">
          <h1 className="text-center fw-bold"> Премиум объявления</h1>

          <div className="row">
            {obj.map(v => (
              <div className="col-sm-6 col-md-4 col-lg-3 with   cursor  ">
                <div className='bg-white  shadow rounded '>
                  {" "}
                  <div className="m-2">
                    <div className="text-center obj my-1">
                      <img className="w-100  " src={v.img} alt="" />
                    </div>
                    <p>{v.title}</p>
                    <div className="d-flex justify-content-between m-2">
                      <div className="fw-bold">{v.price}</div>
                      <div>
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    );
}

export default Home;
