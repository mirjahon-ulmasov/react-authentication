import { Table } from "antd";

const columns = [
  {
    title: "Имя",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Производитель",
    dataIndex: "manufacturer",
    key: "manufacturer",
  },
  {
    title: "Размер",
    dataIndex: "size",
    key: "size",
  },
  {
    title: "Цвет",
    dataIndex: "color",
    key: "color",
  },
  {
    title: "Поставщик",
    dataIndex: "supplier",
    key: "supplier",
  },
];

export default function ProductTable(props) {
  const products = props.data;
  const data = products.map((item) => {
    const manufacturer = item.productProperties[0];
    const [size, color] = item.properties;
    return {
      name: item.name,
      manufacturer:
        manufacturer && manufacturer.value ? manufacturer.value : "\u2014",
      size: size && size.value ? size.value : "\u2014",
      color: color && color.value ? color.value : "\u2014",
      supplier: item.supplier || "\u2014",
      key: Math.random().toString(),
    };
  });

  return (
    <div className="table">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ defaultPageSize: 6 }}
      />
    </div>
  );
}
