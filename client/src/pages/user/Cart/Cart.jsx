import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import styles from "./Cart.module.css";

const { Meta } = Card;
const Item = ({
  name,
  price,
  id,
  productImage,
  remove,
  // count,
}) => (
  <Card
    className="cont"
    actions={[
      <DeleteOutlined
        key="ellipsis"
        title="Remove"
        onClick={() => {
          remove(id);
        }}
      />,
    ]}
  >
    <div className={styles.item}>
      <img className={styles.productImg} alt="example" src={productImage} />
      <div className={styles.info}>
        <h4 className={styles.name}>{name}</h4>
        <h5 className={styles.price}>${price}</h5>
        {/* <p>{count}</p> */}
      </div>
    </div>
  </Card>
);
export default Item;
