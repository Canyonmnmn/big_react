import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	Type,
	Key,
	Ref,
	Props,
	ReactElementType,
	ElementType
} from 'shared/ReactTypes';
//ReactElement

const ReactElement = (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType => {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'canyon'
	};
	return element;
};
const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	for (const prop in config) {
		const value = config[prop];
		if (prop === 'key') {
			if (key !== undefined) {
				key = '' + value;
			}
			continue;
		}
		if (prop === 'ref') {
			if (ref !== undefined) {
				ref = value;
			}
			continue;
		}
		//检查该prop是不是config自身的 而不是原型链上的
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = value;
		}
	}
	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength) {
		if (maybeChildrenLength == 0) {
			props.children = maybeChildren[0];
		} else {
			props.children = maybeChildren;
		}
	}
	return ReactElement(type, key, ref, props);
};

export const jsxDev = jsx;
