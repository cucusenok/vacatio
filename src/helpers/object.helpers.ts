import cn from 'classnames';
import { isEmpty } from 'lodash-es';

export { cn };

export const typedKeys = <T extends object>(o: T): (keyof T)[] => {
	return Object.keys(o) as (keyof T)[];
};

export const typedValues = <T extends object>(obj: T): T[keyof T][] => {
	return Object.values(obj) as T[keyof T][];
};

export const typedEntries = <T extends object>(obj: T): [keyof T, T[keyof T]][] => {
	return Object.entries(obj) as [keyof T, T[keyof T]][];
};

export const typedFromEntries = <T extends object>(entries: [keyof T, T[keyof T]][]): T => {
	return Object.fromEntries(entries) as T;
};

export const removeNullishEntries = <T extends object>(
	obj: T
): {
	[K in keyof T]: NonNullable<T[K]>;
} => {
	return Object.fromEntries(Object.entries(obj).filter(([_, value]) => !isEmpty(value))) as {
		[K in keyof T]: NonNullable<T[K]>;
	};
};

// type NonNullishRecursive<T> = {
//   [K in keyof T]: T[K] extends object ? NonNullishRecursive<NonNullable<T[K]>> : NonNullable<T[K]>;
// };

// export const removeNullishRecursive = <T extends object>(obj: T): NonNullishRecursive<T> => {
//   const result: Partial<T> = {};

//   for (const [key, value] of Object.entries(obj)) {
//     if (value === null || value === undefined) {
//       continue;
//     }

//     if (typeof value === "object" && !Array.isArray(value)) {
//       const nestedResult = removeNullishRecursive(value as object);
//       if (Object.keys(nestedResult).length > 0) {
//         result[key as keyof T] = nestedResult as T[keyof T];
//       }
//     } else {
//       result[key as keyof T] = value;
//     }
//   }

//   return result as NonNullishRecursive<T>;
// };

/**
 * tRPC routers don't support files as input yet.
 */
// export const fileToBase64 = (file: File): Promise<tRPCCompatibleFileInstance> => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();

//     reader.onload = async (event) => {
//       if (event.target?.result) {
//         const base64String = event.target.result as string;
//         const fileData = {
//           name: file.name,
//           type: file.type,
//           size: file.size,
//           content: base64String,
//         };

//         resolve(fileData);
//       }
//     };

//     reader.onerror = (error) => reject(error);
//     reader.readAsDataURL(file);
//   });
// };

// export const base64ToFile = (fileData: tRPCCompatibleFileInstance): File => {
//   const base64Content = fileData.content.split(",")[1];

//   if (!base64Content) {
//     throw new Error("No base64 content found");
//   }

//   const binaryString = atob(base64Content);
//   const len = binaryString.length;
//   const bytes = new Uint8Array(len);

//   for (let i = 0; i < len; i++) {
//     bytes[i] = binaryString.charCodeAt(i);
//   }

//   const blob = new Blob([bytes], { type: fileData.type });
//   return new File([blob], fileData.name, { type: fileData.type });
// };
