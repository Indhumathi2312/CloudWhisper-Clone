import studentsIconTechvoiceWebflowTemplate from "@/assets/images/682bac484ff7ef80e1017535_students-icon-techvoice-webflow-template.svg";
import studentsImageCloudwhisperWebflowTemplate from "@/assets/images/68388284a83626f4cda9aea6_students-image-cloudwhisper-webflow-template.avif";
import studentsImageCloudwhisperWebflowTemplateP500 from "@/assets/images/68388284a83626f4cda9aea6_students-image-cloudwhisper-webflow-template-p-500.avif";
import professionalsIconTechvoiceWebflowTemplate from "@/assets/images/682bac498b3dc35c5355ed55_professionals-icon-techvoice-webflow-template.svg";
import professionalsImageCloudwhisperWebflowTemplate from "@/assets/images/683888ed8e3a9347c51cb3de_professionals-image-cloudwhisper-webflow-template.avif";
import contentCreatorsIconTechvoiceWebflowTemplate from "@/assets/images/682bac48d2949451f602d0c8_content-creators-icon-techvoice-webflow-template.svg";
import translatorsIconTechvoiceWebflowTemplate from "@/assets/images/682bac48eb0b7c7aa53e7ea8_translators-icon-techvoice-webflow-template.svg";
import busyIndividualsIconTechvoiceWebflowTemplate from "@/assets/images/682bac48544ee23fdf928f25_busy-individuals--icon-techvoice-webflow-template.svg";

const img = (asset) => asset.src ?? asset;

export default function UseCasesSection() {
  return (
    <section className="section">
            <div className="w-layout-blockcontainer container-default w-container">
              <div
                style={{ opacity: 0, filter: "blur(8px)" }}
                data-w-id="077a500a-9f79-4b45-4974-1f5de80ba05e"
                className="title-left-content-right"
              >
                <div className="inner-container _520px">
                  <div className="subtitle">Use cases</div>
                  <h2>Who is Cloudwhisper for?</h2>
                  <div className="mg-top-3x-extra-small">
                    <p>
                      Lorem ipsum dolor sit amet consectetur in sagittis ante mattis
                      cursus dictumst aliquam convallis ut nam est donec et lacinia
                      at fusce in.
                    </p>
                  </div>
                </div>
                <div
                  id="w-node-_99805214-dd54-e7f3-2549-05c0df1040fb-df1040fb"
                 
                  className="position-relative---z-index-1"
                >
                  <a
                    data-w-id="d7bc6201-7e14-514d-b502-57acf8dc3329"
                    href="/company-pages/pricing"
                    className="primary-button w-inline-block"
                    ><div className="button-content-flex">
                      <div>Start free trial</div>
                    </div></a
                  >
                  <div className="button-bg-gradient"></div>
                </div>
              </div>
              <div className="mg-top-regular">
                <div className="w-layout-grid grid-1-column">
                  <div className="w-layout-grid grid-2-columns">
                    <div
                      style={{ opacity: 0, filter: "blur(8px)" }}
                      data-w-id="5c9e0201-386e-c73c-ed73-90e640a5236e"
                      className="card cases-card-v2"
                    >
                      <div className="w-layout-grid cases-v2-content---image-right">
                        <div
                         
                          className="square-gradient-icon-wrapper w-variant-a8fbe133-a0de-17ae-ad4f-0c906e4ee638"
                        >
                          <img
                            src={img(studentsIconTechvoiceWebflowTemplate)}
                            loading="lazy"
                            width="80"
                            height="80"
                            alt="Student Icon - CloudWhisper - Webflow Template | BRIX Templates"
                            className="square-gradient-icon"
                          />
                          <div
                            className="square-gradient w-variant-a8fbe133-a0de-17ae-ad4f-0c906e4ee638"
                          ></div>
                        </div>
                        <img
                          className="cases-v2-image---01"
                          src={img(studentsImageCloudwhisperWebflowTemplate)}
                          width="893"
                          height="672"
                          alt="Students - CloudWhisper - Webflow Template | BRIX Templates"
                          sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 893px"
                          id="w-node-_8f3fdc79-ff6f-c1b9-4ebc-9dab87dbd17d-7bed29e2"
                          loading="lazy"
                          srcSet={`${img(studentsImageCloudwhisperWebflowTemplateP500)} 500w,
                            ${img(studentsImageCloudwhisperWebflowTemplate)}       893w`}
                        />
                        <div
                          id="w-node-_38999344-63fe-0acd-2f89-fe258926cf22-7bed29e2"
                        >
                          <h3>Students</h3>
                          <div className="mg-top-4x-extra-small">
                            <p>
                              Lorem ipsum dolor sit amet consectetur interdum
                              pellentesque non montes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ opacity: 0, filter: "blur(8px)" }}
                      data-w-id="5e8ea2a5-c136-0e89-c463-5c51023a4e1e"
                      className="card cases-card-v2"
                    >
                      <div className="w-layout-grid cases-v2-content---image-right">
                        <div className="square-gradient-icon-wrapper">
                          <img
                            src={img(professionalsIconTechvoiceWebflowTemplate)}
                            loading="lazy"
                            width="80"
                            height="80"
                            alt="Professionals Icon - CloudWhisper - Webflow Template | BRIX Templates"
                            className="square-gradient-icon"
                          />
                          <div className="square-gradient"></div>
                        </div>
                        <img
                          src={img(professionalsImageCloudwhisperWebflowTemplate)}
                          loading="lazy"
                          width="828"
                          height="759"
                          alt="Professionals - CloudWhisper - Webflow Template | BRIX Templates"
                          id="w-node-_5e8ea2a5-c136-0e89-c463-5c51023a4e21-7bed29e2"
                          className="cases-v2-image---02"
                        />
                        <div
                          id="w-node-_5e8ea2a5-c136-0e89-c463-5c51023a4e22-7bed29e2"
                        >
                          <h3>Professionals</h3>
                          <div className="mg-top-4x-extra-small">
                            <p>
                              Lorem ipsum dolor sit amet consectetur interdum
                              pellentesque non montes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-grid grid-3-columns _3-col-tablet">
                    <div
                      style={{ opacity: 0, filter: "blur(8px)" }}
                      data-w-id="51951c73-5e48-59bf-f740-a8f88e119afd"
                      className="card cases-card-v2"
                    >
                      <div className="w-layout-grid cases-v2-content">
                        <div
                          className="square-gradient-icon-wrapper w-variant-be748821-7c9e-5f64-3f51-78fcc0b290d8"
                        >
                          <img
                            src={img(contentCreatorsIconTechvoiceWebflowTemplate)}
                            loading="lazy"
                            width="80"
                            height="80"
                            alt="Content Creators Icon - CloudWhisper - Webflow Template | BRIX Templates"
                            className="square-gradient-icon"
                          />
                          <div
                            className="square-gradient w-variant-be748821-7c9e-5f64-3f51-78fcc0b290d8"
                          ></div>
                        </div>
                        <div>
                          <h3>Content creators</h3>
                          <div className="mg-top-4x-extra-small">
                            <p>
                              Lorem ipsum dolor sit amet consectetur interdum
                              pellentesque
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ opacity: 0, filter: "blur(8px)" }}
                      data-w-id="0821c039-21b3-76e0-5dad-6cfcb090c4a4"
                      className="card cases-card-v2"
                    >
                      <div className="w-layout-grid cases-v2-content">
                        <div
                          className="square-gradient-icon-wrapper w-variant-894f2328-03f4-b381-6041-94597d1ae7c0"
                        >
                          <img
                            src={img(translatorsIconTechvoiceWebflowTemplate)}
                            loading="lazy"
                            width="80"
                            height="80"
                            alt="Translator Icon - CloudWhisper - Webflow Template | BRIX Templates"
                            className="square-gradient-icon"
                          />
                          <div
                            className="square-gradient w-variant-894f2328-03f4-b381-6041-94597d1ae7c0"
                          ></div>
                        </div>
                        <div>
                          <h3>Translators</h3>
                          <div className="mg-top-4x-extra-small">
                            <p>
                              Lorem ipsum dolor sit amet consectetur interdum
                              pellentesque
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ opacity: 0, filter: "blur(8px)" }}
                      data-w-id="8c8bca48-bc0b-313e-938f-5f1ff0ba9b88"
                      className="card cases-card-v2 last"
                    >
                      <div className="w-layout-grid cases-v2-content">
                        <div
                         
                          className="square-gradient-icon-wrapper w-variant-5af9267f-c951-4c20-fdf6-ffba7b327258"
                        >
                          <img
                            src={img(busyIndividualsIconTechvoiceWebflowTemplate)}
                            loading="lazy"
                            width="80"
                            height="80"
                            alt="Busy Individuals Icon - CloudWhisper - Webflow Template | BRIX Templates"
                            className="square-gradient-icon"
                          />
                          <div
                            className="square-gradient w-variant-5af9267f-c951-4c20-fdf6-ffba7b327258"
                          ></div>
                        </div>
                        <div>
                          <h3>Busy individuals</h3>
                          <div className="mg-top-4x-extra-small">
                            <p>
                              Lorem ipsum dolor sit amet consectetur interdum
                              pellentesque
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
}
