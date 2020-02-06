/// percent 계산
export const calcPercentToInt = (dividend, divisor) => {
  /// 나누고 소수점 버림
  return Math.floor((dividend / divisor) * 100);
};

/// percent ToString
export const calcPercentToStr = (dividend, divisor) => {
  /// "%" 추가 후 string return
  return calcPercentToInt(dividend, divisor).toString() + "%";
};

/// 1000 단위 표기법 계산
export const calcThousandStr = value => {
  // 1,000 = 1K
  // 1,000,000 = 1M
  // 1,000,000,000 = 1B
  // 1,000,000,000,000 = 1T

  // 소숫점은 1자리로 제한해 놓는다.
  // defualt digits = 1
  // 필요 없으면 0으로 한다
  const digits = 0;
  var count = Math.pow(10, digits);

  /// 일단 1000으로 나누면서 몇번 나누는지 계산
  var resultNumber = value;
  for (var measure = 0; resultNumber > 1000; ++measure) {
    resultNumber = resultNumber / 1000;
  }

  // 필요한 숫자 외에는 일단 버린다.
  resultNumber = Math.floor(resultNumber * count);

  // 실제로 표기되어야 할 소숫점을 check 한다.
  // 마지막에 toFixed 가 뒤에 0 을 채워 버리기때문에
  // checkDigits 를 통해서 필요 없는 0은 표시 하지 않기 위해
  for (var checkDigits = 0; checkDigits < digits; ++checkDigits) {
    if (resultNumber % Math.pow(10, checkDigits + 1) !== 0) {
      break;
    }
  }

  resultNumber = resultNumber / count;
  resultNumber = resultNumber.toFixed(digits - checkDigits);

  // measure = 1 K  // measure = 2 M  // measure = 3 B  // measure = 3 T
  const resultStr =
    resultNumber.toString() +
    (measure === 1
      ? "K"
      : measure === 2
      ? "M"
      : measure === 3
      ? "B"
      : measure === 4
      ? "T"
      : "");

  return resultStr;
};
