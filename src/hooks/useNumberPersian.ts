function useNumberPersian(numberData: number) {
  const persianNumber = new Intl.NumberFormat("fa");

  const convertPersianNumber = persianNumber.format(numberData);

  return [convertPersianNumber];
}

export default useNumberPersian;
