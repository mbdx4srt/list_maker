import React,{useState} from 'react'
import ListForm from "./ListForm";
import ListItem from "./ListItem";
import Download from "./Download";
function ListList() {
    const[listList, setList] = useState([])

    const addListItem = listitem => {
        if (!listitem.text || /^\s*$/.test(listitem.text)){
            return
        }
        // const newListItems = [listitem,...listList]
        const newListItems = [...listList,listitem]

        setList(newListItems)
        console.log(...listList)
    }

    const updateListItem = (listitemId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setList(prev => prev.map(item => (item.id === listitemId ? newValue:item))
        )
    }

    const removeListItem = id => {
        const removeArr = [...listList].filter(listitem => listitem.id !== id)
        setList(removeArr)
    }

    const highlightListitem = id => {
        let updatedListitems = listList.map(listItem => {
            if (listItem.id === id) {
                listItem.isHighlighted = !listItem.isHighlighted
            }
            return listItem
        });
        setList(updatedListitems)
    };

    return (
        <div>
            {/*<h1>List Maker</h1>*/}
            <ListForm onSubmit={addListItem}/>
            <div className='board'>
            <ListItem listList={listList}
                      highlightListitem={highlightListitem}
                      removeListItem={removeListItem}
                      updateListItem={updateListItem}
            />
            </div>
            <Download listList={listList}/>
        </div>
    );
}

export default ListList;