import React, { useEffect, useState } from 'react';
import PopupWindow from '../PopupWindow/PopupWindow';
import Button from '../Button/Button';
import './Form.css';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [nameError, setNameError] = useState('Имя не может быть пустым');
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [phoneError, setPhoneError] = useState('Телефон не может быть пустым');
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [formValid, setFormValid] = useState(false);

    const changeName = (e) => {
        setName(e.target.value);
        const re = /^([а-я]{1}[а-яё]{3,23}|[a-z]{1}[a-z]{3,23})$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setNameError('Некорректное имя');
        } else {
            setNameError('');
        }
    };

    const changeEmail = (e) => {
        setEmail(e.target.value);
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email');
        } else {
            setEmailError('');
        }
    };

    const changeHandlerPhone = (e) => {
        setPhone(e.target.value);
        const re = /^\+?[1-9]\d{9,14}$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setPhoneError('Некорректный номер телефона');
        } else {
            setPhoneError('');
        }
    };

    const changeHandlerDescription = (e) => {
        setDescription(e.target.value);
    };

    useEffect(() => {
        if (emailError || phoneError || nameError || !name || !email || !phone) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, phoneError, nameError, name, email, phone]);

    const submitData = (e) => {
        e.preventDefault();
        if (!formValid) {
            setPopupMessage('Пожалуйста, заполните все обязательные поля.');
            setShowPopup(true);
            return;
        }
        fetch('http://localhost:5000/telegram', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, description }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((result) => {
                if (result.response && result.response.msg) {
                    setPopupMessage(result.response.msg);
                    setShowPopup(true);
                    setName('');
                    setEmail('');
                    setPhone('');
                    setDescription('');
                    setNameDirty(false);
                    setEmailDirty(false);
                    setPhoneDirty(false);
                    setNameError('Имя не может быть пустым');
                    setEmailError('Email не может быть пустым');
                    setPhoneError('Телефон не может быть пустым');
                } else {
                    setPopupMessage('Ошибка: Некорректный ответ сервера');
                    setShowPopup(true);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setPopupMessage('Ошибка сервера: ' + error.message);
                setShowPopup(true);
            });
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
                break;
            case 'phone':
                setPhoneDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
            default:
        }
    };

    return (
        <div className='wrapper' id='request'>
            <div className='login-box'>
                <h2>Заявка</h2>
                <form>
                    {(nameDirty && nameError) && <div className='error1'>{nameError}</div>}
                    <div className='user-box'>
                        <input
                            type='text'
                            value={name}
                            name='name'
                            onChange={changeName}
                            onBlur={(e) => blurHandler(e)}
                            placeholder='Введите ваше имя:'
                        />
                    </div>
                    {(emailDirty && emailError) && <div className='error2'>{emailError}</div>}
                    <div className='user-box'>
                        <input
                            type='text'
                            value={email}
                            name='email'
                            onChange={changeEmail}
                            onBlur={(e) => blurHandler(e)}
                            placeholder='Введите ваш e-mail:'
                        />
                    </div>
                    {(phoneDirty && phoneError) && <div className='error3'>{phoneError}</div>}
                    <div className='user-box'>
                        <input
                            onChange={changeHandlerPhone}
                            onBlur={(e) => blurHandler(e)}
                            type='text'
                            value={phone}
                            name='phone'
                            placeholder='Введите номер телефона:'
                        />
                    </div>
                    <div className='user-box'>
                        <textarea
                            onChange={changeHandlerDescription}
                            name='description'
                            placeholder='Комментарий...'
                            value={description}
                            cols='30'
                            rows='3'
                        ></textarea>
                    </div>
                    <Button disabled={!formValid} type='submit' onClick={submitData} text='Отправить' />
                </form>
                {showPopup && <PopupWindow message={popupMessage} onClose={() => setShowPopup(false)} />}
            </div>
        </div>
    );
};

export default Form;
