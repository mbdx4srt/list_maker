import React from 'react';

function Upload({addListItems}) {


    const logList = (input) => {
        const listitems = []
        input.forEach(inputitem => {
            const listitem = {
            id : Math.floor(Math.random() * 10000),
            text : inputitem}
            console.log(listitem)
            listitems.push(listitem)
        });

        addListItems(listitems)


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
            <input id='files'  type="file" className={'download-button'} style={{visibility: "hidden"}}onChange={(e) => showFile(e)}/>
        </div>
    )
}

export default Upload

