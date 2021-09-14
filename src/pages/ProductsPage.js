import axios from "axios";
import { useEffect, useState } from "react";

import { Spin } from "antd";
import ProductTable from "../components/products/ProductTable";
import MainLayout from "../components/layout/MainLayout";

export default function ProductsPage(props) {
  const [data, setData] = useState(null);
  const { company } = props.user;
  const token = props.token;

  useEffect(() => {
    axios({
      url: `https://${company}.ox-sys.com/variations`,
      method: "POST",
      data: {
        size: 24,
        page: 1,
        stock: {
          exist: true,
          location: [42],
        },
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setData(res.data);
    });
  }, [company, token]);

  localStorage.setItem("data", JSON.stringify(data));

  return (
    <MainLayout path={props.path}>
      {data ? (
        <ProductTable data={data.items} />
      ) : (
        <div className="spinner">
          <Spin size="large" />
        </div>
      )}
    </MainLayout>
  );
}
