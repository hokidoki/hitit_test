import {
    InterfaceShortResult,
    SortBy
} from '../Containers/Search'

export const sortedList = (list: Array<InterfaceShortResult>, sortBy: SortBy) => {

    const temp = [...list];
    switch (sortBy) {
        case SortBy.titleAsc:
            return temp.sort(titleAsc);
        case SortBy.titleDes:
            return temp.sort(titleDes);
        case SortBy.yearAsc:
            return temp.sort(yearAsc);
        case SortBy.yearDes:
            return temp.sort(yearDes);
        default:
            return temp;
    }
}

const titleAsc = (a: InterfaceShortResult, b: InterfaceShortResult) => {
    const upperCaseA = a.Title.toUpperCase();
    const upperCaseB = b.Title.toUpperCase();

    if (upperCaseA > upperCaseB) return 1;
    if (upperCaseA < upperCaseB) {
        return -1
    } else {
        return 0
    }
}

const titleDes = (a: InterfaceShortResult, b: InterfaceShortResult) => {
    const upperCaseA = a.Title.toUpperCase();
    const upperCaseB = b.Title.toUpperCase();

    if (upperCaseA < upperCaseB) return 1;
    if (upperCaseA > upperCaseB) {
        return -1
    } else {
        return 0
    }
}

const yearAsc = (a: InterfaceShortResult, b: InterfaceShortResult) => {
    const yearOfA = Number(a.Year.substring(0,4));
    const yearOfB = Number(b.Year.substring(0,4));

    return yearOfA - yearOfB;
}

const yearDes = (a: InterfaceShortResult, b: InterfaceShortResult) => {
    const yearOfA = Number(a.Year.substring(0,4));
    const yearOfB = Number(b.Year.substring(0,4));

    return yearOfB - yearOfA;
}