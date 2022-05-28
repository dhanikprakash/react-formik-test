

export const toTitleCase = (value: string): string => {
    return value
        .toLowerCase()
        .split(' ')
        .map(($1) => upperCaseFirstLetter($1))
        .join(' ');
};


export const upperCaseFirstLetter = (value: string): string => {
    if (value.length === 0) {
        return value;
    }

    return `${value[0].toUpperCase()}${value.substring(1)}`;
};