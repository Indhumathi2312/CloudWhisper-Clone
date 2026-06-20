import horizontalShapeCloudwhisperWebflowTemplate from "@/assets/images/682cf630bf576e17a57fd554_horizontal-shape-cloudwhisper-webflow-template.svg";
import ctaV2BgGradient1CloudwhisperWebflowTemplate from "@/assets/images/68b0bd107b061378c6a062a1_cta-v2-bg-gradient-1-cloudwhisper-webflow-template.avif";
import ctaV2BgGradient1CloudwhisperWebflowTemplateP500 from "@/assets/images/68b0bd107b061378c6a062a1_cta-v2-bg-gradient-1-cloudwhisper-webflow-template-p-500.avif";
import ctaV2BgGradient1CloudwhisperWebflowTemplateP800 from "@/assets/images/68b0bd107b061378c6a062a1_cta-v2-bg-gradient-1-cloudwhisper-webflow-template-p-800.png";
import ctaV2BgGradient2CloudwhisperWebflowTemplate from "@/assets/images/68b0bd10c40519207871bd0c_cta-v2-bg-gradient-2-cloudwhisper-webflow-template.avif";
import ctaV2BgGradient2CloudwhisperWebflowTemplateP500 from "@/assets/images/68b0bd10c40519207871bd0c_cta-v2-bg-gradient-2-cloudwhisper-webflow-template-p-500.avif";
import ctaV2BgGradient3CloudwhisperWebflowTemplate from "@/assets/images/68b0bd10922bd84a127502f2_cta-v2-bg-gradient-3-cloudwhisper-webflow-template.avif";
import ctaV2BgGradient3CloudwhisperWebflowTemplateP500 from "@/assets/images/68b0bd10922bd84a127502f2_cta-v2-bg-gradient-3-cloudwhisper-webflow-template-p-500.avif";

const img = (asset) => asset.src ?? asset;

export default function CtaSection() {
  return (
    <section className="section square-section">
            <div style={{ opacity: 0, filter: "blur(8px)" }} data-w-id="b6aa4d4c-a1e9-cd2d-c55b-2ed0444dae15"
             
             
              className="section-square-wrapper cta-v2"
            >
              <div className="w-layout-blockcontainer container-default w-container">
                <div className="w-layout-grid cta-v2-grid">
                  <div className="inner-container _460px _100-tablet">
                    <div className="subtitle light">Get started</div>
                    <div className="inner-container _420px _100-tablet">
                      <h2 className="text-titles">
                        Everything you need to amplify your voice
                      </h2>
                    </div>
                    <div className="mg-top-3x-extra-small">
                      <p className="color-neutral-700">
                        Lorem ipsum dolor sit amet consectetur in sagittis ante
                        mattis cursus dictumst aliquam convallis ut nam est donec et
                        lacinia at fusce in.
                      </p>
                    </div>
                  </div>
                  <div
                    id="w-node-_8734d9f4-4653-f469-3ac8-b3023a38df9e-7bed29e2"
                    className="form-block _445px w-form"
                  >
                    <form
                      id="wf-form-Home-V2-Form"
                      name="wf-form-Home-V2-Form"
                     
                      method="get"
                      className="inside-input-form"
                     
                     
                    >
                      <div className="position-relative---z-index-1">
                        <div className="inside-input-wrapper">
                          <input
                            className="input inside-input w-input"
                            maxLength="256"
                            name="Email"
                           
                            placeholder="Enter your email address"
                            type="email"
                            id="footer-email"
                            required
                          />
                          <div className="inside-input-bg pink"></div>
                          <div className="inside-input-border"></div>
                        </div>
                        <div className="button-inside-input-wrapper">
                          <input
                            type="submit"
                           
                            className="primary-button inside-input-button w-button"
                            value="Subscribe"
                          />
                        </div>
                      </div>
                    </form>
                    <div className="success-message w-form-done">
                      <div className="inside-input-success">
                        <div className="icon-font-rounded"></div>
                        <div>Thanks for subscribing to our newsletter!</div>
                      </div>
                    </div>
                    <div className="error-message w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={img(horizontalShapeCloudwhisperWebflowTemplate)}
                loading="lazy"
                width="294"
                height="70"
                alt=""
                className="section-shape-top left-40"
              /><img
                src={img(horizontalShapeCloudwhisperWebflowTemplate)}
                loading="lazy"
                width="294"
                height="70"
                alt=""
                className="section-shape-bottom left-40"
              /><img
                className="section-bg-gradient left"
                src={img(ctaV2BgGradient1CloudwhisperWebflowTemplate)}
                width="2800"
                height="976"
                alt=""
               
                sizes="(max-width: 2800px) 100vw, 2800px"
                loading="lazy"
                srcSet={`${img(ctaV2BgGradient1CloudwhisperWebflowTemplateP500)}  500w,
                  ${img(ctaV2BgGradient1CloudwhisperWebflowTemplateP800)}   800w,
                  ${img(ctaV2BgGradient1CloudwhisperWebflowTemplate)}       2800w`}
              /><img
                className="section-bg-gradient middle"
                src={img(ctaV2BgGradient2CloudwhisperWebflowTemplate)}
                width="2800"
                height="976"
                alt=""
               
                sizes="(max-width: 2800px) 100vw, 2800px"
                loading="lazy"
                srcSet={`${img(ctaV2BgGradient2CloudwhisperWebflowTemplateP500)}  500w,
                  ${img(ctaV2BgGradient2CloudwhisperWebflowTemplate)}       2800w`}
              /><img
                className="section-bg-gradient right"
                src={img(ctaV2BgGradient3CloudwhisperWebflowTemplate)}
                width="2800"
                height="976"
                alt=""
               
                sizes="(max-width: 2800px) 100vw, 2800px"
                loading="lazy"
                srcSet={`${img(ctaV2BgGradient3CloudwhisperWebflowTemplateP500)}  500w,
                  ${img(ctaV2BgGradient3CloudwhisperWebflowTemplate)}       2800w`}
              />
            </div>
          </section>
  );
}
