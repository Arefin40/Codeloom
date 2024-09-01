/**
 * Converts a given data object into a FormData object.
 */
export function transfromIntoFormData(data: Record<string, any>) {
   const formData = new FormData();
   for (const key in data) {
      formData.append(key, data[key]);
   }
   return formData;
}

/**
 * Abbreviates a given name by extracting the first letter of each word up to a specified length.
 */
export function abbreviate(name?: string, length = 2) {
   if (!name) return;
   const parts = name.trim().split(" ");
   const minLength = Math.min(length, parts.length);
   return parts.slice(0, minLength).reduce((previous, current) => previous + current[0], "");
}
