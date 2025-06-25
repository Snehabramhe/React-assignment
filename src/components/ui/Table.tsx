import type { TableColumn } from "../../types";

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  className?: string;
}

function Table<T extends { id: string }>({
  columns,
  data,
  className = "",
}: TableProps<T>) {
  return (
    <div className={`w-full ${className}`}>
      {/* Header */}
      <div className="flex items-center font-['DM_Sans'] text-xs text-[#0f0c1b] font-semibold leading-tight">
        {columns.map((column, index) => (
          <div
            key={String(column.key)}
            className={`flex-1 min-h-[44px] px-3 py-3.5 bg-[rgba(97,63,221,0.02)] ${
              index === 0 ? "min-w-[240px]" : ""
            } ${column.className || ""}`}
          >
            {column.label}
          </div>
        ))}
      </div>

      {/* Body */}
      <div>
        {data.map((item, rowIndex) => (
          <div
            key={item.id}
            className={`flex items-center font-['Inter'] text-sm text-[#0F0C1B] font-normal tracking-wide leading-tight ${
              rowIndex % 2 === 1 ? "bg-[rgba(97,63,221,0.02)]" : "bg-white"
            }`}
          >
            {columns.map((column, colIndex) => (
              <div
                key={String(column.key)}
                className={`flex-1 min-h-[56px] px-3 py-5 ${
                  colIndex === 0 ? "min-w-[240px]" : ""
                } ${column.className || ""}`}
              >
                {column.render
                  ? column.render(item[column.key], item)
                  : String(item[column.key])}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
