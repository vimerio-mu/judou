const numMap = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

function toZhDigit(digit) {
  digit = typeof digit === 'number' ? String(digit) : digit;
  const unit = ['千', '百', '十', ''];
  const quot = ['万', '亿', '兆', '京', '垓'];

  let breakLen = Math.ceil(digit.length / 4);
  let notBreakSegment = digit.length % 4 || 4;
  let segment;
  let zeroFlag = [],
    allZeroFlag = [];
  let result = '';

  while (breakLen > 0) {
    if (!result) {
      // 第一次执行
      segment = digit.slice(0, notBreakSegment);
      let segmentLen = segment.length;
      for (let i = 0; i < segmentLen; i++) {
        if (segment[i] != 0) {
          if (zeroFlag.length > 0) {
            result += '零' + numMap[segment[i]] + unit[4 - segmentLen + i];
            // 判断是否需要加上 quot 单位
            if (i === segmentLen - 1 && breakLen > 1) {
              result += quot[breakLen - 2];
            }
            zeroFlag.length = 0;
          } else {
            result += numMap[segment[i]] + unit[4 - segmentLen + i];
            if (i === segmentLen - 1 && breakLen > 1) {
              result += quot[breakLen - 2];
            }
          }
        } else {
          // 处理为 0 的情形
          if (segmentLen == 1) {
            result += numMap[segment[i]];
            break;
          }
          zeroFlag.push(segment[i]);
          continue;
        }
      }
    } else {
      segment = digit.slice(notBreakSegment, notBreakSegment + 4);
      notBreakSegment += 4;

      for (let j = 0; j < segment.length; j++) {
        if (segment[j] != 0) {
          if (zeroFlag.length > 0) {
            // 第一次执行zeroFlag长度不为0，说明上一个分区最后有0待处理
            if (j === 0) {
              result += quot[breakLen - 1] + numMap[segment[j]] + unit[j];
            } else {
              result += '零' + numMap[segment[j]] + unit[j];
            }
            zeroFlag.length = 0;
          } else {
            result += numMap[segment[j]] + unit[j];
          }
          // 判断是否需要加上 quot 单位
          if (j === segment.length - 1 && breakLen > 1) {
            result += quot[breakLen - 2];
          }
        } else {
          // 第一次执行如果zeroFlag长度不为0, 且上一划分不全为0
          if (j === 0 && zeroFlag.length > 0 && allZeroFlag.length === 0) {
            result += quot[breakLen - 1];
            zeroFlag.length = 0;
            zeroFlag.push(segment[j]);
          } else if (allZeroFlag.length > 0) {
            // 执行到最后
            if (breakLen == 1) {
              result += '';
            } else {
              zeroFlag.length = 0;
            }
          } else {
            zeroFlag.push(segment[j]);
          }

          if (
            j === segment.length - 1 &&
            zeroFlag.length === 4 &&
            breakLen !== 1
          ) {
            // 如果执行到末尾
            if (breakLen === 1) {
              allZeroFlag.length = 0;
              zeroFlag.length = 0;
              result += quot[breakLen - 1];
            } else {
              allZeroFlag.push(segment[j]);
            }
          }
          continue;
        }
      }
    }
    --breakLen;
  }

  return result;
}

const numReg = /^(\d+)(\.\d+)?$/;

// 拆分整数 & 小数
function getIntegerAndDecimal(str) {
  const group = str.match(numReg);
  return [group[1], (group[2] || '').substr(1)];
}

export function numToChinese(num) {
  if (typeof num !== 'number' || !numReg.test(num)) {
    return 'not number';
  }
  if (num === 0) return '零';
  let res = '';
  const numStr = String(num);
  const [integer, decimal] = getIntegerAndDecimal(numStr);
  res += toZhDigit(Number(integer));
  if (decimal) {
    res += '点';
    for (let i = 0; i < decimal.length; i++) {
      res += numMap[decimal[i]];
    }
  }
  return res;
}
