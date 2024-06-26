import { Menu } from "antd";
import React from "react";

const items = [
  {
    key: "1",
    label: (
      <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
        Nav 1
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a href="/nav2" style={{ color: "inherit", textDecoration: "none" }}>
        Nav 2
      </a>
    ),
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    key: "3",
    label: (
      <a href="/progress" style={{ color: "inherit", textDecoration: "none" }}>
        Tiến độ dự án
      </a>
    ),
  },
];
const MenuComponent = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      // defaultSelectedKeys={["1"]}
      items={items}
      style={{
        flex: 1,
        minWidth: 0,
      }}
    />
  );
};

export default MenuComponent;
