const truncate = (
  text,
  maxLength,
  { ellipses = '...', position = 'left', includeEllipsesLength = true } = {},
) => {
  const strText = String(text);
  const textLength = strText.length;

  if (textLength <= maxLength) {
    return strText;
  }

  const realMaxLength = includeEllipsesLength ? maxLength - ellipses.length : maxLength;

  switch (position) {
    case 'left': {
      const croppedText = strText.substring(0, realMaxLength);
      return `${croppedText}${ellipses}`;
    }

    case 'right': {
      const croppedText = strText.substring(textLength - realMaxLength, textLength);
      return `${ellipses}${croppedText}`;
    }

    case 'middle': {
      const leftTextLength = Math.ceil(realMaxLength / 2);
      const rightTextLength = Math.floor(realMaxLength / 2);

      const leftText = strText.substring(0, leftTextLength);
      const rightText = strText.substring(textLength - rightTextLength, textLength);

      return `${leftText}${ellipses}${rightText}`;
    }

    default: {
      throw new Error(`Unhandled value supplied to \`position\`: ${position}`);
    }
  }
};

export default truncate;
