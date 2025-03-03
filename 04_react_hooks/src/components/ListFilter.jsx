import { useMemo } from "react";

// ListFilter 组件：根据查询条件过滤列表项
const ListFilter = ({ items, query }) => {
  // 使用 useMemo 缓存过滤后的列表项
  // 只有当 items 或 query 发生变化时，才会重新计算
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase()) // 忽略大小写进行匹配
    );
  }, [items, query]);

  return (
    <ul className="p-2 list-disc list-inside">
      {filteredItems.map((item) => (
        <li key={item} className="text-gray-800">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListFilter;
