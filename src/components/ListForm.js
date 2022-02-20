import React, {useState, useEffect, useRef} from 'react'

function ListForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    // These are the bits that allow the app to focus on the active field

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.setCount(props.counter+1)
        props.onSubmit({
           // id: Math.floor(Math.random() * 10000),
            id: props.counter,
            text: input
        });
        setInput('');
        console.log(props.counter)
    };

    return (
        <form className={'list-form'} onSubmit={handleSubmit}>
            {props.edit ? (
                    <>
                        <input
                            type={'text'}
                            placeholder={'Type Here'}
                            value={input}
                            name={'text'}
                            className={'listitem'}
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        {/*<button className={'list-button edit'}>Update item</button>*/}
                    </>
                ) :
                (
                    <>
                        <input
                            type={'text'}
                            placeholder={'Type here'}
                            value={input}
                            name={'text'}
                            className={'list-input'}
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        {/*<button className={'list-button'}>Add item</button>*/}
                    </>
                )
            }


                < /form>
                );
            }

export default ListForm;