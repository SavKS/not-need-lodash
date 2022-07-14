// WARNING: This is not a drop in replacement solution and
// it might not work for some edge cases. Test your code!
export default (obj: any, path: string | string[], value: any) => {
    // Regex explained: https://regexr.com/58j0k
    const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);

    pathArray?.reduce((acc, key, i) => {
        if (acc[ key ] === undefined) {
            acc[ key ] = typeof key === 'number' ? [] : {};
        }

        if (i === pathArray.length - 1) {
            if (typeof key !== 'number' && Array.isArray(acc)) {
                // eslint-disable-next-line no-console
                console.error(`Invalid array key "${ key }"`);
            }

            acc[ key ] = value;
        }

        return acc[ key ];
    }, obj);
};
