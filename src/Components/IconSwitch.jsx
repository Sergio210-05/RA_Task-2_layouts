// @import url('https://fonts.googleapis.com/icon?family=Material+Icons')

export const IconSwitch = ({icon, onSwitch}) => {

  return (
    <div className="icon-switch" onClick={onSwitch}>
      <span className="material-icons">
        {icon}
      </span>
    </div>
  )
}
