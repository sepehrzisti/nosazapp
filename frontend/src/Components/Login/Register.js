import { useRef , userState,useEffect, useState } from "react";
import {faCheck,faTimes,FaInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { faFontAwesomeIcon } from "@fortawesome/free-solid-svg-icons";
import './App.css';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = ()=>{
    const userRsf = useRef();
    const errRef = useRef();
    
    
    const[user , setUser] = useState('');
    const[validName,setValidName] = useState(false);
    const[userFouce,setUserFocus] = useState(false);
    
    
    const[pwd , setPwd] = useState('');
    const[validPwd,setValidPwd] = useState(false);
    const[pwdFouce,setpwdFocus] = useState(false);
    
    const[matchPwd , setMatchPwd] = useState('');
    const[validMatch,setValidMatch] = useState(false);
    const[matchFocus,setMatchFocus] = useState(false);

    const [errMsg ,setErrMsg] = useState('');
    const[success,setSuccess] = useState(false);

    useEffect(()=>{
        useRef.current.focus();
    },[])

    useEffect(()=>{
        const results = USER_REGEX.test(user);
        console.log(results);
        console.log(user);
        setValidName(results);
    },[user])


    return(
        <div>

        </div>
    )
}
export default (Register)