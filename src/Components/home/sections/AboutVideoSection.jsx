import playIconCloudwhisperWebflowTemplate from "@/assets/images/6838c0b6353fd557c5547bec_play-icon-cloudwhisper-webflow-template.avif";
import aboutUsImageCloudwhisperWebflowTemplate from "@/assets/images/6838c025f204237d64176dac_about-us-image-cloudwhisper-webflow-template.avif";
import aboutUsImageCloudwhisperWebflowTemplateP500 from "@/assets/images/6838c025f204237d64176dac_about-us-image-cloudwhisper-webflow-template-p-500.avif";
import aboutUsImageCloudwhisperWebflowTemplateP800 from "@/assets/images/6838c025f204237d64176dac_about-us-image-cloudwhisper-webflow-template-p-800.avif";
import aboutUsImageCloudwhisperWebflowTemplateP1080 from "@/assets/images/6838c025f204237d64176dac_about-us-image-cloudwhisper-webflow-template-p-1080.avif";

const img = (asset) => asset.src ?? asset;

export default function AboutVideoSection() {
  return (
    <section className="section">
            <div className="w-layout-blockcontainer container-default w-container">
              <div className="w-layout-grid grid-2-columns _1fr---1fr">
                <div style={{ opacity: 0, filter: "blur(8px)" }} data-w-id="f5592dd4-48df-4463-a273-9760ffece4a8"
                 
                 
                  className="lightbox-wrapper"
                >
                  <a data-w-id="7126f0a6-2175-6793-bb27-2336a6a8f5bb"
                    href="#"
                   
                    className="lightbox-link w-inline-block w-lightbox"
                    ><img
                      src={img(playIconCloudwhisperWebflowTemplate)}
                      loading="lazy"
                      width="270"
                      height="270"
                      alt="Play Icon - CloudWhisper - Webflow Template | BRIX Templates"
                    />
                    </a
                  ><img
                    className="lightbox-image"
                    src={img(aboutUsImageCloudwhisperWebflowTemplate)}
                    width="1842"
                    height="1260"
                    alt="About Us - CloudWhisper - Webflow Template | BRIX Templates"
                   
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                    loading="lazy"
                    srcSet={`${img(aboutUsImageCloudwhisperWebflowTemplateP500)}   500w,
                      ${img(aboutUsImageCloudwhisperWebflowTemplateP800)}   800w,
                      ${img(aboutUsImageCloudwhisperWebflowTemplateP1080)} 1080w,
                      ${img(aboutUsImageCloudwhisperWebflowTemplate)}        1842w`}
                  />
                </div>
                <div style={{ opacity: 0, filter: "blur(8px)" }} data-w-id="7b344d24-033f-1bb1-6509-070c03da106c"
                  id="w-node-_7b344d24-033f-1bb1-6509-070c03da106c-7bed29e2"
                 
                 
                  className="inner-container _420px _100-tablet"
                >
                  <div className="subtitle">About us</div>
                  <h2>Cultivating a space where voices thrive</h2>
                  <div className="mg-top-3x-extra-small">
                    <p>
                      Lorem ipsum dolor sit amet consectetur in sagittis ante mattis
                      cursus dictumst aliquam convallis ut nam est donec et.
                    </p>
                  </div>
                  <div className="mg-top-small">
                    <div className="buttons-row left">
                      <div
                        id="w-node-_99805214-dd54-e7f3-2549-05c0df1040fb-df1040fb"
                       
                        className="position-relative---z-index-1"
                      >
                        <a data-w-id="d7bc6201-7e14-514d-b502-57acf8dc3329"
                         
                          href="/company-pages/pricing"
                          className="primary-button w-inline-block"
                          ><div className="button-content-flex">
                            <div>Start free trial</div>
                          </div></a
                        >
                        <div className="button-bg-gradient"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
}
