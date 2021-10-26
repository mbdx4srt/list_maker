import React, {useState} from 'react'
import {RiCloseCircleLine, TiEdit} from "react-icons/all";
import ListForm from "./ListForm";

function ListItem({listList, highlightListitem, removeListItem, updateListItem}) {
    const [edit, setEdit] = useState({
        id:null,
        value:''
    })

    const submitUpdate = value =>{
        updateListItem(edit.id,value)
        setEdit({
            id:null,
            value:''
        })

    }

    if (edit.id) {
        return <ListForm edit={edit} onSubmit={submitUpdate}/>
    }

    return listList.map((listitem, index )=>(
        <div
            className={listitem.isHighlighted ? 'listitem highlighted': 'listitem'}
            key={index}
        >
            <div key={listitem.id} onClick={() => highlightListitem(listitem.id)}>
                {listitem.text}
            </div>
            <div>
                <p></p>
            </div>
            <div className="icons">
                <RiCloseCircleLine onClick={() => removeListItem(listitem.id)} className={'delete-icon'}/>
                <TiEdit onClick={() => setEdit({id:listitem.id, value:listitem.text})} className={'edit-icon'}/>
            </div>
        </div>
    ));
}

export default ListItem