export const customStyles = {
    control: (provided: any) => ({
        ...provided,
        background: "#6C6C6C",
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: "white",
        border: "0",
        fontSize: "16"
    }),
    option: (provided: any) => ({
        ...provided,
        color: "#525252",
        borderRadius: "0"
    }),
    menu: (provided: any) => ({
        ...provided,
        borderRadius: "5"
    }),
    dropdownIndicator: (provided: any) => ({
        ...provided,
        color: "#9E9E9E",
        border: "0",
    }),
    indicatorSeparator: () => ({

    }),
    singleValue: () => ({
        color: "white",
    }),
    valueContainer: (provided: any) => ({
        ...provided,

    })
};