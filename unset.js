// WARNING: This is not a drop in replacement solution and
// it might not work for some edge cases. Test your code!
export default (obj, path) => {
    // Regex explained: https://regexr.com/58j0k
    const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);
    pathArray?.reduce((acc, key, i) => {
        if (i === pathArray.length - 1) {
            delete acc[key];
        }
        return acc[key];
    }, obj);
};
//# sourceMappingURL=unset.js.map