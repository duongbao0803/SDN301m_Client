import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Dropdown, Menu, Space } from "antd";
import {
  HomeFilled,
  DownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Avatar } from "@/components";
import { introItems, programItems, sourceItems } from "@/constant/constant";

const Header: React.FC = React.memo(() => {
  const [isSelectedLink, setIsSelectedLink] = useState<boolean>(true);
  const [isSelectedContact, setIsSelectedContact] = useState<boolean>(false);
  const [selectedDropdown, setSelectedDropdown] = useState<string>("");
  const [isSelectedCart, setIsSelectedCart] = useState<string>("");

  const handleLinkClick = () => {
    setIsSelectedLink(true);
    setIsSelectedContact(false);
    setSelectedDropdown("");
  };

  const handleSelectedContact = () => {
    setIsSelectedContact(true);
    setIsSelectedLink(false);
    setSelectedDropdown("");
  };

  const handleItemClick = (key: string) => {
    setSelectedDropdown(key);
    setIsSelectedLink(false);
    setIsSelectedContact(false);
  };

  const handleCartClick = (key: string) => {
    setIsSelectedCart(key);
    setIsSelectedLink(false);
    setSelectedDropdown("");
  };

  return (
    <>
      <div className="z-[999] mx-5 flex h-[60px] justify-center text-[#000000]">
        <div
          className="navbar flex w-[1100px] max-w-[1220px] flex-row flex-nowrap justify-between rounded-[40px] bg-[#f8f8f8] bg-opacity-75"
          data-aos="fade-down"
        >
          <img
            src="https://insacmau.com/wp-content/uploads/2023/02/logo-FPT-Polytechnic-.png"
            alt=""
            className="my-auto ml-4 h-fit w-[100px] object-cover"
          />
          <div className="flex items-center gap-3 p-4 text-[18px] font-medium text-[#1385b7]">
            <Link
              to="/"
              onClick={handleLinkClick}
              className={`flex items-center rounded-2xl px-4 py-[10px] text-[15px] transition-all duration-500 hover:bg-[orange] hover:text-[#fff] ${
                isSelectedLink ? "bg-[orange] text-[#fff]" : ""
              }`}
            >
              <HomeFilled />
            </Link>
            <Dropdown
              overlay={
                <Menu>
                  {introItems &&
                    introItems.map((item) => (
                      <Menu.Item
                        key={item?.key}
                        onClick={() => handleItemClick(item?.key)}
                      >
                        <a
                          href={item?.path}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item?.label}
                        </a>
                      </Menu.Item>
                    ))}
                </Menu>
              }
              className={`dropdownHeader cursor-pointer rounded-3xl px-3 py-1 transition-all duration-500 hover:text-[#fff] ${
                selectedDropdown === "1" ||
                selectedDropdown === "2" ||
                selectedDropdown === "3"
                  ? "bg-[orange] text-[#fff]"
                  : ""
              }`}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  GIỚI THIỆU
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown
              overlay={
                <Menu>
                  {programItems &&
                    programItems.map((item) => (
                      <Menu.Item
                        key={item?.key}
                        onClick={() => handleItemClick(item.key)}
                      >
                        <a
                          href={item?.path}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.label}
                        </a>
                      </Menu.Item>
                    ))}
                </Menu>
              }
              className={`dropdownHeader cursor-pointer rounded-3xl px-3 py-1 transition-all duration-500 hover:text-[#fff] ${
                selectedDropdown === "4" ||
                selectedDropdown === "5" ||
                selectedDropdown === "6"
                  ? "bg-[orange] text-[#fff]"
                  : ""
              }`}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  CHƯƠNG TRÌNH
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown
              overlay={
                <Menu>
                  {sourceItems &&
                    sourceItems.map((item) => (
                      <Menu.Item
                        key={item?.key}
                        onClick={() => handleItemClick(item.key)}
                      >
                        <a
                          href={item?.path}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.label}
                        </a>
                      </Menu.Item>
                    ))}
                </Menu>
              }
              className={`dropdownHeader cursor-pointer rounded-3xl px-3 py-1 transition-all duration-500 hover:text-[#fff] ${
                selectedDropdown === "7" ||
                selectedDropdown === "8" ||
                selectedDropdown === "9"
                  ? "bg-[orange] text-[#fff]"
                  : ""
              }`}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  TÀI NGUYÊN
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Link
              to="/"
              onClick={handleSelectedContact}
              className={`dropdownHeader cursor-pointer rounded-3xl px-3 py-1 transition-all duration-500 hover:bg-[orange] hover:text-[#fff] ${
                isSelectedContact ? "bg-[orange] text-[#fff]" : ""
              }`}
            >
              LIÊN HỆ
            </Link>
            <Avatar />
            <Link
              to="/cart"
              onClick={handleCartClick}
              className={`dropdownHeader cursor-pointer rounded-3xl px-3 py-1 transition-all duration-500 hover:bg-[orange] hover:text-[#fff] ${
                isSelectedCart ? "bg-[orange] text-[#fff]" : ""
              }`}
            >
              <Badge count={5}>
                <ShoppingCartOutlined
                  className={`text-2xl ${isSelectedCart ? "text-[#fff]" : ""}`}
                />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});

export default Header;
