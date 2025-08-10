// flatten the nested objects

let nestedObj = {
  name: 'Kalidass',
  education: {
    degree: 'Bachelor of Engineering',
    department: {
      name: 'Mechanical Engineering',
      location: 'Ramanathapuram',
    },
  },
  skills: ['React', 'Node', 'Kafka'],
};

function flattenObject(obj, parentKey='', result={}) {
    for (let key in obj) {
        if (!obj.hasOwnProperty(key)) continue;

        const newKey = parentKey ? `${parentKey}.${key}` : key;
        const value = obj[key];

        if (typeof value === 'object' && typeof value !== null && !Array.isArray(value)) {
            flattenObject(value, newKey, result); // recurse deeper
        } else {
            result[newKey] = value; // assign flattened key-value
        }
    }

    return result;
}

console.log(flattenObject(nestedObj));