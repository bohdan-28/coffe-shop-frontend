import React from "react";
import style from "./productcard.module.css";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductCard({ image, title, price, discount, idProduct }) {
  const { role } = useSelector((state) => state.user);
  const history = useHistory();
  const ImgUrl = process.env.REACT_APP_API_IMG;
  const routeChangeToDetail = (idProduct) => {
    history.push(`/product-detail/${idProduct}`);
  };
  const routeChangeToUpdate = (idProduct) => {
    history.push({
      pathname: `/edit-product/${idProduct}`,
      state: { id: idProduct },
    });
  };
  return (
    <div className={style["card-disc"]}>
      <div className={style.disc}></div>
      <img
        onClick={(e) => routeChangeToDetail(idProduct)}
        src={`${ImgUrl}${image}`}
        alt="product"
      />
      <h4>{title}</h4>
      <h5 className="pb-2">IDR {price}</h5>
      {role === 1 ? (
        <span
          onClick={(e) => routeChangeToUpdate(idProduct)}
          className={style["icon-edit-menus"]}
          alt="edit-item"
        >
          <i className="fas fa-pencil-alt fs-2x"></i>
        </span>
      ) : (
        ""
      )}
    </div>
  );
}

export default withRouter(ProductCard);
