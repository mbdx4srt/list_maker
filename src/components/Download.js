import React from 'react'

function Download({listList}) {


    const downloadTextFile = () => {
        const element = document.createElement("a");
        const cards = []
        listList.map((listitem, index )=>(
            cards.push(listitem.text)))

        const ft = (cards.join('\n'))
        const file = new Blob([ft],
            {type: "text/plan;charset=utf-8",})


        element.href = URL.createObjectURL(file)
        element.download = 'cards.txt';
        document.body.appendChild(element);
        element.click();
    };


    return (
        <div>
            <button onClick={downloadTextFile}
            className={'download-button'}
            >Download</button>
        </div>
    );
}

export default Download

