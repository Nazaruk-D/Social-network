import React, {FC, useEffect, useState} from 'react';
import useDebounce from "../useDebounce/useDebounce";
import s from "./SearchPerson.module.scss"
import MainButton from "../../common/MainButton/MainButton";
import {getUsersThunk} from "../../../redux/users-reducer";
import {useAppDispatch} from "../../../redux/store";

type InputPropsType = {
    findPerson: (term: string) => void
}


const SearchPerson: FC<InputPropsType> = ({findPerson}) => {
    const [value, setValue] = useState<string>("")
    const debouncedValue = useDebounce(value, 500)


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            findPerson(value)
        }
    }

    const onClickHandler = () => {
        findPerson(debouncedValue)
    }


    return (
        <div>
            <input type="text" onChange={onChangeHandler} onKeyDown={onKeyDownHandler} value={value} className={s.input}/>
            <MainButton onClick={onClickHandler} nameButton={"search"}/>
        </div>
    );
};

export default SearchPerson;