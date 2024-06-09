import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { IMenusPages } from "oneentry/dist/menus/menusInterfaces";

export function Nav(props: { data: IMenusPages[] }) {
  const { data } = props;
  return (
    <nav className="nav">
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            <Link to={item.pageUrl}>{item.localizeInfos.menuTitle}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
