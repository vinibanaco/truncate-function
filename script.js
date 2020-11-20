const truncate = (text, maxLength, ellipses='...') => {
  const strText = String(text);
  
  if (strText.length <= maxLength) {
    return strText;
  }

  const croppedText = strText.substring(0, maxLength - ellipses.length);

  return `${croppedText}${ellipses}`;
};

console.log(
  truncate('pudim', 5),
  truncate('long long phrase', 12),
  truncate('this is a secret', 14, '***')
)
