//Composants pour ajouté du texte

export default function texte(props){
    return
    <div>
        <input type="text" className={props.className} defaultValue={props.value} placeholder={props.placeholder}></input>
    </div>
    }
