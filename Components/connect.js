import css from  '../styles/connect.module.css';

function Connect({openMenu}){
    return(
     <div className={css.mainCont}>
         <div className={`${openMenu ? css.openShowPopup : ""} ${css.popUpCont}`}>

         </div>
     </div>
    )
 }
 export default Connect