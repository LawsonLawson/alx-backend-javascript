/**
 * Joins a set of strings with a dash after stripping a leading substring from
 * each string.
 *
 * This function accepts a set of strings and a leading substring to be removed
 * from each string in the set. It returns a single string where the processed
 * strings are joined together with dashes. It the input set is not a valid Set
 * or the leading substring is not a string, it returns an empty string.
 *
 * @function
 * @name cleanSet
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The substring to strip from the beginning of
 * each string in the set.
 * @returns {String} A single string where the processed strings are joined by
 * dashes.
 * @throws {TypeError} If the set parameter is not a Set or the second
 * parameter is not a string.
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
