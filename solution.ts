type TypeOfTheValue = string | number | boolean;

function formatValue(value: TypeOfTheValue): TypeOfTheValue {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    else {
        return !value;
    }
}


type TypeOfTheValues = string | number[]
function getLength(value: TypeOfTheValues) {
    if (Array.isArray(value)) {
        const aryLenght: number = value.length
        return aryLenght;
    }
    else {
        return value.length;
    }
}



class Person {

    constructor(public name: string, public age: number) {

    }
    getDetails() {
        return (`Name: ${this.name}, Age: ${this.age}`)
    }
}



type ArrayTypess = { title: string, rating: number }
function filterByRating(array: ArrayTypess[]): ArrayTypess[] {
    const filteredArraysAre = array.filter(arr => arr.rating >= 4);
    return filteredArraysAre;
}



type UserType = {
    id: number, name: string, email: string, isActive: boolean
}
function filterActiveUsers(user: UserType[]): UserType[] {
    return user.filter(activeusers => activeusers.isActive);
}



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;

}
function printBookDetails(details: Book) {
    const { title, author, publishedYear, isAvailable } = details;
    const result = `Title: ${title}, Author:${author}, Published:${publishedYear},  Available:${isAvailable ? 'Yes' : 'No'}`;
    return result;
}



type ArrayType = number[];

function getUniqueValues(arrayOne: ArrayType, arrayTwo: ArrayType) {

    let uniqueArray: ArrayType = [];
    let allNumbersArray: ArrayType = [];
    let i, j;
    for (i = 0; i < arrayOne.length; i++) {
        allNumbersArray.push(arrayOne[i]);
    }
    for (i = 0; i < arrayTwo.length; i++) {
        allNumbersArray.push(arrayTwo[i]);
    }


    for (i = 0; i < allNumbersArray.length; i++) {
        let exist = false;
        for (j = 0; j < uniqueArray.length; j++) {
            if (allNumbersArray[i] === uniqueArray[j]) {
                exist = true;

            }
        }
        if (!exist) {
            uniqueArray.push(allNumbersArray[i]);
        }
    }

    return uniqueArray

}





type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(products: Product[]): number {

    const allProductPriceTotal = products.map(product => {
        let total = product.price * product.quantity;

        if (product.discount) {
            total = total - (total * (product.discount / 100));
        }

        return total;
    })
        .reduce((accumulator, currentIndexVal) => accumulator + currentIndexVal);
    return allProductPriceTotal;
}




