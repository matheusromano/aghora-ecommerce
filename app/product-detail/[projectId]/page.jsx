"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../_utils/GlobalApi";
import BreadCrumb from "../../_components/Breadcrumb";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
import ProductList from "../../_components/ProductList";

function ProjectDetail({ params }) {
  const [productDetail, setProductDetail] = useState();
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    params?.projectId && getProductById_();
  }, []);

  const getProductById_ = () => {
    GlobalApi.getProductById(params.projectId).then(resp => {
      setProductDetail(resp.data.data);
      getProductListByCategory(resp.data.data);
    });
  };

  const getProductListByCategory = (product) => {
    GlobalApi.getProductByCategory(product?.attributes?.category).then(
      (resp) => {
        console.log(resp)
        setProductList(resp.data.data)
      }
    );
  };
  return (
    <div className="p-5 py-13 px-10 md:px-28">
      <BreadCrumb />
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5 sm:gap-8">
        <ProductBanner product={productDetail} />
        <ProductInfo product={productDetail} />
      </div>
      {productList &&
      <div className="mt-20">
        <h2 className="font-medium text-[20px] mb-4">Produtos na Mesma Pegada</h2>
        <ProductList productList={productList} />
      </div>}
    </div>
  );
}

export default ProjectDetail;
