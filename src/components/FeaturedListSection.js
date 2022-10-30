import FeaturedBlog from './FeaturedBlog'

function FeaturedListSection() {
  return (
    <section className="list-blog-featured">
      <div className="list-blog-featured"></div>
      <ul>
        <FeaturedBlog
          imgSrc="https://basic-admin.basicagency.com/uploads/_870xAUTO_crop_center-center_65_none/Jams-thumbnail-1.jpg"
          infoText="B/D® JAMS: By us for us"
        ></FeaturedBlog>
        <FeaturedBlog
          imgSrc="https://basic-admin.basicagency.com/uploads/_870xAUTO_crop_center-center_65_none/Ashley-Blog-Thumbnail.jpg"
          infoText="Ashley Reichel Takes the Reins as BASIC/DEPT®’s New CEO"
        ></FeaturedBlog>
        <FeaturedBlog
          imgSrc="https://basic-admin.basicagency.com/uploads/_870xAUTO_crop_center-center_65_none/image-10.png"
          infoText="Design Systems: Good for Business"
        ></FeaturedBlog>
        <FeaturedBlog
          imgSrc="https://basic-admin.basicagency.com/uploads/_870xAUTO_crop_center-center_65_none/climateneutralblog.png"
          infoText="BASIC/DEPT® is Climate Neutral Certified"
        ></FeaturedBlog>
        <FeaturedBlog
          imgSrc="https://basic-admin.basicagency.com/uploads/_870xAUTO_crop_center-center_65_none/image_from_ios.png"
          infoText="7 Ways to Create Inclusive Shopping Experiences in the Metaverse"
        ></FeaturedBlog>
        <FeaturedBlog
          imgSrc="https://basic-admin.basicagency.com/uploads/_870xAUTO_crop_center-center_65_none/WebbyWinBlogthumb_220427_185100.png"
          infoText="DEPT® Takes Global Network of the Year at 26th Annual Webby Awards"
        ></FeaturedBlog>
      </ul>
    </section>
  )
}

export default FeaturedListSection
