import Button from './Button'

function Header( { onAdds, showAdd }) {
    return (
        <div className="header">
           <p>Tasks</p>
           <Button  text={showAdd ? 'Close' : 'Add'} color= "green" onClick={ onAdds } />   
        </div>
    )
}

export default Header
