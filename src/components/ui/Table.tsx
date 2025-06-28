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
      <div className="flex w-full items-center font-dm-sans text-xs text-[#0f0c1b] font-semibold leading-none justify-start">
        {columns.map((column, index) => (
          <div
            key={String(column.key)}
            className={`flex items-center justify-start min-h-11 pl-1 pr-[10px] pt-[14px] pb-[14px] gap-[10px] whitespace-nowrap bg-[rgba(97,63,221,0.02)] ${column.className || ""}`}
            style={{
              minWidth: column.className?.includes("w-[")
                ? column.className.match(/w-\[(\d+)px\]/)?.[1] + "px"
                : "auto",
              flex: "1 1 0%",
            }}
          >
            {column.label}
          </div>
        ))}
      </div>

      {/* Body - No gap between header and body */}
      <div>
        {data.map((item, rowIndex) => {
          const isAlternate = rowIndex % 2 === 1;
          const rowBg = isAlternate
            ? "bg-[rgba(97,63,221,0.02)]"
            : "bg-[#FEFEFF]";

          return (
            <div key={item.id} className="flex items-center justify-start">
              {columns.map((column, colIndex) => (
                <div
                  key={String(column.key)}
                  className={`flex items-center justify-start text-[#0F0C1B] min-h-14 pl-1 pr-[10px] pt-[19px] pb-[19px] gap-[10px] font-inter text-[13px] font-normal tracking-[0.25px] leading-none ${
                    column.className || ""
                  } ${rowBg}`}
                  style={{
                    minWidth: column.className?.includes("w-[")
                      ? column.className.match(/w-\[(\d+)px\]/)?.[1] + "px"
                      : "auto",
                    flex: "1 1 0%",
                  }}
                >
                  {column.render
                    ? column.render(item[column.key], item)
                    : String(item[column.key])}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Table;
