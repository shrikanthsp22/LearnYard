import { useEffect, useState } from "react";
import { getMenus } from "../../services/api";
import { IMenusEntity } from "oneentry/dist/menus/menusInterfaces";

export const useFetchMenus = () => {
  const [menus, setMenus] = useState<IMenusEntity | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getMenus("main").then((menus) => {
      setMenus(menus);
      setLoading(false);
    });
  }, []);

  return { menus, loading };
};
