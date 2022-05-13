/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {
  let newArr  = Array.from(arr);
  let sorting = param === 'asc' ? 1 : -1;
  let error   = "Parameter should be 'asc' or 'desc'!";

  if (param !== 'asc' && param !== 'desc'){
    return error;
  }

  return newArr.sort((a, b) =>
    sorting * a.localeCompare(b, ['ru', 'en'], { sensitivity: 'variant', caseFirst: 'upper' }));
}

/*export function sortStrings(arr, param = 'asc') {
  let newArr = Array.from(arr);

  if (param === 'asc') {
    newArr.sort((a, b) => a.localeCompare(b, ['ru', 'en'], { sensitivity: 'variant', caseFirst: 'upper' }));
  } else if (param === 'desc') {
    newArr.sort((b, a) => a.localeCompare(b, ['ru', 'en'], { sensitivity: 'variant', caseFirst: 'upper' }));
  } else {
    return 'Parameter should be desc or asc!';
  }

  return newArr;
} // Или использовать Intl.Collator со свойством compare?
 */

