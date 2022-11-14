import React, {FC, useEffect, useState} from 'react';
import useDebounce from "../useDebounce/useDebounce";
import {useAppDispatch} from "../../../redux/redux-store";
import s from "./SearchPerson.module.scss"
import MainButton from "../../common/MainButton/MainButton";

type InputPropsType = {
    findPerson: (term: string) => void
}


const SearchPerson: FC<InputPropsType> = ({findPerson}) => {
    const [value, setValue] = useState<string>("")
    const debouncedValue = useDebounce(value, 500)
    const dispatch = useAppDispatch()


    // useEffect(() => {
    //     debugger
    //     const newSettings = {
    //         currentPage: 1,
    //         pageSize: 10,
    //         term: debouncedValue,
    //     }
    //     dispatch(getUsersThunk(newSettings))
    //     console.log(debouncedValue)
    // }, [debouncedValue])


    //
    // useEffect(()=>{
    //     setValue2(debouncedValue)
    // }, [debouncedValue])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onClickHandler = () => {
        findPerson(debouncedValue)
    }

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            findPerson(e.currentTarget.value)
        }
    }

    return (
        <div>
            <input type="text" onChange={onChangeHandler} onKeyDown={onKeyDownHandler} value={value} className={s.input}/>
            {/*<button onClick={onClickHandler}>search</button>*/}
            <MainButton onClick={onClickHandler} nameButton={"search"}/>
        </div>
    );
};

export default SearchPerson;