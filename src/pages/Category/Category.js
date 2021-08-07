import "./Category.css"
import React from 'react'
import Container from "../../containers/Container";
import datas from "../../data";
import { Redirect, useParams } from "react-router-dom";

console.log(datas);

const Category = () => {
    const { category } = useParams();
    // console.log(category);

    // eslint-disable-next-line eqeqeq
  const filterData = datas.filter( v => v.category == category )
    const obj = filterData.length > 0  ? filterData[0] :{};
    const data = obj.data;
    // console.log(obj);
    // console.log(data);

  return (
      
    <Container>
      {filterData.length == 0 && <Redirect to= "/page404" />}
        <div className="container">
          <h1>Category: {category}</h1>
          <div className="row">
            {data.map(v => (
              <div className="col-sm-12 col-md-12 ">
                <div className="product   rounded overflow-hidden bg-white  mb-3 p-2 d-flex aligin-items-">
                  <div className="img">
                    <img src={v.img} className="w-75  img" alt="" />
                  </div>
                  <div className="ms-5 ">
                    <div>
                      <p className="fw-bold">{v.title}</p>
                    </div>

                    <div>
                      <span>{v.location}</span>
                    </div>
                    <div>
                      {" "}
                      <span>{v.price}</span>
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

export default Category;
