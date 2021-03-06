import { Input } from "antd";
import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import ProductTable from "../components/products/ProductTable";

const { Search } = Input;

export default function SearchPage(props) {
  const data = JSON.parse(localStorage.getItem("data"));
  const [productList, setProductList] = useState(data.items);

  const searchHandler = (event) => {
    const searchInput = event.toLowerCase();
    setProductList(
      data.items
        .filter((item) => item.name.toLowerCase().includes(searchInput))
        .sort((a, b) => {
          return (
            a.name.toLowerCase().indexOf(searchInput) -
            b.name.toLowerCase().indexOf(searchInput)
          );
        })
    );
  };

  return (
    <MainLayout path={props.path} data={productList}>
      <Search
        placeholder="Type to search..."
        enterButton="Search"
        onSearch={searchHandler}
        size="large"
        style={{
          width: "20rem",
          boxShadow: "0 0 4px 1px #ddd",
        }}
      />
      {productList && <ProductTable data={productList} />}
    </MainLayout>
  );
}
