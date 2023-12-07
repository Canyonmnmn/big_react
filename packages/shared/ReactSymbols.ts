// 为了在不同的环境都能正确的识别出React元素 如果支持javascript 就使用symbol类型返回一个唯一标识符（“react.element”）
// 如果不支持 返回固定的一个字符串
const supportSymbol = typeof Symbol === 'function' && Symbol.for;

export const REACT_ELEMENT_TYPE = supportSymbol
	? Symbol.for('react.element')
	: 0xeac7;
