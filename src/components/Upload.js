import React from 'react';

function Upload(props) {

    const logList = (input) => {
        const listitems = []
        var locCount = props.counter
        input.forEach(inputitem => {
            locCount = locCount+1
            const listitem = {
                id: locCount,
                text: inputitem
            }
            console.log(listitem)

            listitems.push(listitem)
        });
        props.addListItems(listitems)
        props.setCount(locCount)
    }


    const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            logList(text.split('\n'))
        };
        reader.readAsText(e.target.files[0])
    };


    return (<div className={'buttonsh'}>
            <label htmlFor="files" className={'download-button'}>Upload</label>
            <input id='files' type="file" className={'download-button'} style={{visibility: "hidden"}}
                   onChange={(e) => showFile(e)}/>
        </div>
    )
}

export default Upload

