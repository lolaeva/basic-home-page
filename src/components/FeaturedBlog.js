function FeaturedBlog({ imgSrc, infoText }) {
  return (
    <li className="list-item-blog">
      <div className="asset">
        <div className="asset__wrapper">
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
      <div className="list-item-blog__info">
        <h2>{infoText}</h2>
        <figure>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
            <rect x="0.1" y="7.5" width="14" height="2"></rect>
            <path d="M8.4,0l8.5,8.5l-1.4,1.4L7,1.4L8.4,0z"></path>
            <path d="M7,15.6l8.5-8.5l1.4,1.4L8.4,17L7,15.6z"></path>
          </svg>
        </figure>
      </div>
    </li>
  )
}

export default FeaturedBlog
