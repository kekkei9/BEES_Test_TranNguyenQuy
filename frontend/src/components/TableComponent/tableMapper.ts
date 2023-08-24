export const tableDataMapper = (
  column: any,
  item: any,
  actionHandlers: (((record: any) => void) | undefined)[]
) => {
  if (column?.render) {
    return column.render(
      item,
      actionHandlers.map(
        (actionHandler) => () => actionHandler && actionHandler(item)
      )
    );
  }
  if (column?.dataIndex) {
    return item?.[column?.dataIndex as keyof typeof item];
  }
  return null;
};
