export const withLocalStorage = {
    //* Method to get item from local storage
    getItem: (itemKey: string) => {
        //* Get the item using the provided key
        const value: string | null = localStorage.getItem(itemKey);

        //* If the value is null return null
        if (!value) return null;

        //* If the value can be converted to a number, then return as a number
        if (typeof Number(value) === "number" && !isNaN(Number(value))) return Number(value);

        //* Otherwise return the value as a string
        return value;
    },
    //* Method to set item in local storage
    setItem: (itemKey: string, itemValue: string) => {
        //* Try to set the item using the provided key, otherwise return the error
        try {
            localStorage.setItem(itemKey, itemValue);
            return;
        } catch (err) {
            return err;
        }
    },
};

export const withSessionStorage = {
    //* Method to get item from session storage
    getItem: (itemKey: string) => {
        //* Get the item using the provided key
        const value: string | null = sessionStorage.getItem(itemKey);

        //* If the value is null return null
        if (!value) return null;

        //* If the value can be converted to a number, then return as a number
        if (typeof Number(value) === "number") return Number(value);

        //* Otherwise return the value as a string
        return value;
    },
    //* Method to set item in session storage
    setItem: (itemKey: string, itemValue: string) => {
        //* Try to set the item using the provided key, otherwise return the error
        try {
            sessionStorage.setItem(itemKey, itemValue);
            return;
        } catch (err) {
            return err;
        }
    },
};
