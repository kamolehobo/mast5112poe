export const calculateAveragePrice = (menuItems: { price: number; course: string }[], courseFilter: string | '') => {
  const filteredItems = courseFilter
    ? menuItems.filter(item => item.course === courseFilter)
    : menuItems;

  if (filteredItems.length === 0) return 0;

  const totalPrice = filteredItems.reduce((sum, item) => sum + item.price, 0);
  return totalPrice / filteredItems.length;
};


export {};