import CaseStudy from './CaseStudy'
function CaseStudySection() {
  return (
    <section className="case-studies">
      <ul>
        <CaseStudy
          isImage={true}
          src={
            'https://basic-admin.basicagency.com/uploads/Work/Patagonia/Images/_720xAUTO_crop_center-center_65_none/Patagonia-Case-Study-Thumbnail.jpg'
          }
        />
        <CaseStudy
          isImage={true}
          src={
            'https://basic-admin.basicagency.com/uploads/Work/Wilson/Images/_720xAUTO_crop_center-center_65_none/WIlson-Case-Study-Thumbnail.jpg'
          }
        />
        <CaseStudy
          isImage={false}
          src={
            'https://basic-admin.basicagency.com/uploads/Work/Google-Store/Video/Google-Store-Web-Design-Case-Study-Thumbnail-02.mp4'
          }
        />
      </ul>
    </section>
  )
}

export default CaseStudySection
