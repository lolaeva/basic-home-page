import Client from './Client'

function ClientsSection({}) {
  return (
    <section className="clients ">
      <div className="clients__meta"></div>
      <div className="clients__header">
        <div>
          <h2>FEATURED ENGAGEMENTS</h2>
        </div>
      </div>
      <div className="clients__content carousel">
        <div className="carousel__wrap">
          <div className="carousel__stage">
            <ul>
              <Client
                iconSrc="https://basic-admin.basicagency.com/uploads/google-dark.svg"
                name="Google"
                text="Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership "
              />
              <Client
                iconSrc="https://basic-admin.basicagency.com/uploads/KFC-Logo.svg"
                name="KFC"
                text="An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC’s brand story to life while making it easier for customers to buy chicken. Learn more about our partnership "
              />
              <Client
                iconSrc="https://basic-admin.basicagency.com/uploads/Wilson-Logo.svg"
                name="Wilson"
                text="A reimagining of Wilson’s brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand’s 108-year history. Read our full case study "
              />
              <Client
                iconSrc="https://basic-admin.basicagency.com/uploads/ATT-Logo.svg"
                name="AT&T"
                text="Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services."
              />
              <Client
                iconSrc="https://basic-admin.basicagency.com/uploads/patagonia-dark.svg"
                name="Patagonia"
                text="Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. Read our full case study "
              />
            </ul>
          </div>
        </div>
        <div className="carousel__progress">
          <span className="carousel__progress-background">
            <span className="carousel__progress-bar"></span>
          </span>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
