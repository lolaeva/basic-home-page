function Client({iconSrc, name, text}) {
  return (
    <li>
      <div>
        <img src={iconSrc}></img>
      </div>
      <h5>{name}</h5>
      <p>{text}</p>
    </li>
  )
}

export default Client
