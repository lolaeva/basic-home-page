function CaseStudy({ isImage, src }) {
  return (
    <li>
      <a>
        {isImage ? (
          <img src={src} alt=""></img>
        ) : (
          <video autoPlay muted src={src}></video>
        )}
      </a>
    </li>
  )
}

export default CaseStudy
