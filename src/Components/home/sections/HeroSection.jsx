import homeV2HeroBg1CloudwhisperWebflowTemplate from "@/assets/images/68b0a558a4d9943de708cc1b_home-v2-hero-bg-1-cloudwhisper-webflow-template.avif";
import homeV2HeroBg1CloudwhisperWebflowTemplateP500 from "@/assets/images/68b0a558a4d9943de708cc1b_home-v2-hero-bg-1-cloudwhisper-webflow-template-p-500.png";
import homeV2HeroBg2CloudwhisperWebflowTemplate from "@/assets/images/68b0a55762f9bbbda0a02dcf_home-v2-hero-bg-2-cloudwhisper-webflow-template.avif";
import homeV2HeroBg2CloudwhisperWebflowTemplateP500 from "@/assets/images/68b0a55762f9bbbda0a02dcf_home-v2-hero-bg-2-cloudwhisper-webflow-template-p-500.png";
import heroV2MainImageCloudwhisperWebflowTemplate from "@/assets/images/683735c7a4d0d26ff44d8cc1_hero-v2-main-image-cloudwhisper-webflow-template.avif";
import heroV2MainImageCloudwhisperWebflowTemplateP500 from "@/assets/images/683735c7a4d0d26ff44d8cc1_hero-v2-main-image-cloudwhisper-webflow-template-p-500.avif";
import heroV2LeftImageCloudwhisperWebflowTemplate from "@/assets/images/683735c684f4560ab8d69be5_hero-v2-left-image-cloudwhisper-webflow-template.avif";
import heroV2RightImageCloudwhisperWebflowTemplate from "@/assets/images/683735c63b9df4b856d1d8cc_hero-v2-right-image-cloudwhisper-webflow-template.avif";
import heroV2RightImageCloudwhisperWebflowTemplateP500 from "@/assets/images/683735c63b9df4b856d1d8cc_hero-v2-right-image-cloudwhisper-webflow-template-p-500.png";
import accuracyIconCloudwhisperWebflowTemplate from "@/assets/images/6837742d2b8e7b3d47a6dd79_accuracy-icon-cloudwhisper-webflow-template.svg";
import wordsIconCloudwhisperWebflowTemplate from "@/assets/images/6837742c03b875d000d1fa64_words-icon-cloudwhisper-webflow-template.svg";
import clientsIconCloudwhisperWebflowTemplate from "@/assets/images/6837742d98a22d562beb8a81_clients-icon-cloudwhisper-webflow-template.svg";

const img = (asset) => asset.src ?? asset;

export default function HeroSection() {
  return (
    <section className="section hero-v2">
            <div
              className="w-layout-blockcontainer container-default position-relative---z-index-1 w-container"
            >
              <div style={{ opacity: 0, filter: "blur(8px)" }} data-w-id="499b8fc8-5056-e2af-9401-033b5f813d40"
               
               
                className="inner-container _340px center"
              >
                <div className="text-center">
                  <h1>Unleash the power of your voice</h1>
                  <div className="mg-top-24px">
                    <div className="buttons-row">
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
              <div data-w-id="96973e2c-cd67-9381-4b28-a0391dbc753e"
               
                className="image-wrapper hero-v2"
              >
                <img style={{ opacity: 0, filter: "blur(8px)" }} data-w-id="590da702-a97a-c4c1-eec3-c5cdd6bf0f87"
                  className="hero-v2-bg-image"
                  src={img(homeV2HeroBg1CloudwhisperWebflowTemplate)}
                  width="1527"
                  height="1527"
                  alt=""
                 
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                 
                  loading="eager"
                  srcSet={`${img(homeV2HeroBg1CloudwhisperWebflowTemplateP500)}  500w,
                    ${img(homeV2HeroBg1CloudwhisperWebflowTemplate)}      1527w`}
                /><img style={{ opacity: 0, filter: "blur(8px)" }} data-w-id="a9d8d660-7717-742f-0cba-721e1ecdc9b9"
                  className="hero-v2-bg-image"
                  src={img(homeV2HeroBg2CloudwhisperWebflowTemplate)}
                  width="1527"
                  height="1527"
                  alt=""
                 
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                 
                  loading="eager"
                  srcSet={`${img(homeV2HeroBg2CloudwhisperWebflowTemplateP500)}  500w,
                    ${img(homeV2HeroBg2CloudwhisperWebflowTemplate)}      1527w`}
                /><img style={{ opacity: 0, filter: "blur(8px)" }} data-w-id="024a6514-fd10-0c10-71b3-80128d3c695b"
                  className="hero-v2-main-image"
                  src={img(heroV2MainImageCloudwhisperWebflowTemplate)}
                  width="1640"
                  height="1702"
                  alt="Hero V2 Main Image - CloudWhisper - Webflow Template | BRIX Templates"
                 
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                 
                  loading="eager"
                  srcSet={`${img(heroV2MainImageCloudwhisperWebflowTemplateP500)}  500w,
                    ${img(heroV2MainImageCloudwhisperWebflowTemplate)}       1640w`}
                /><img style={{ opacity: 0, filter: "blur(8px)" }} data-w-id="13716798-6077-d131-677e-b8b78092253d"
                  src={img(heroV2LeftImageCloudwhisperWebflowTemplate)}
                  loading="eager"
                  width="1130"
                  height="1012"
                  alt="Hero V2 Left Image - CloudWhisper - Webflow Template | BRIX Templates"
                 
                 
                  className="hero-v2-left-image"
                /><img style={{ opacity: 0, filter: "blur(8px)" }} data-w-id="550aa607-4e88-3cea-752c-c18388574ecd"
                  className="hero-v2-right-image"
                  src={img(heroV2RightImageCloudwhisperWebflowTemplate)}
                  width="1130"
                  height="1270"
                  alt="Hero V2 Right Image - CloudWhisper - Webflow Template | BRIX Templates"
                 
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                 
                  loading="eager"
                  srcSet={`${img(heroV2RightImageCloudwhisperWebflowTemplateP500)}  500w,
                    ${img(heroV2RightImageCloudwhisperWebflowTemplate)}      1130w`}
                />
              </div>
              <div style={{ opacity: 0, filter: "blur(8px)" }} data-w-id="4a5cf3c6-7783-7f57-8c18-cb63c5dea815" className="hero-v2-stats-wrapper">
                <div
                 
                 
                >
                  <div style={{ opacity: 0, filter: "blur(8px)" }} data-w-id="42aa2f3c-189a-b78e-2bb4-c3e442944d85" className="display-10 stat-gradient-01">
                    <span data-count="94" className="count-up-number-animation">94</span
                    >%
                  </div>
                  <div style={{ opacity: 0, filter: "blur(8px)" }} data-w-id="bad0d4da-b306-6776-a090-04b77252833d" className="mg-top-3x-extra-small">
                    <div className="flex align-top center-mbl">
                      <img
                        src={img(accuracyIconCloudwhisperWebflowTemplate)}
                        loading="eager"
                        width="16"
                        height="16"
                        alt="Accuracy Icon - CloudWhisper - Webflow Template | BRIX Templates"
                        className="stat-icon"
                      />
                      <div className="display-4 text-dark">Transcription accuracy</div>
                    </div>
                    <div className="mg-top-5x-extra-small mg-left-small">
                      Egestas quis mattis tellus morbi.
                    </div>
                  </div>
                </div>
                <div
                 
                 
                >
                  <div className="display-10 stat-gradient-02">
                    <span data-count="500" className="count-up-number-animation"
                      >500</span
                    >M
                  </div>
                  <div className="mg-top-3x-extra-small">
                    <div className="flex align-top center-mbl">
                      <img
                        src={img(wordsIconCloudwhisperWebflowTemplate)}
                        loading="eager"
                        width="16"
                        height="16"
                        alt="Words Icon - CloudWhisper - Webflow Template | BRIX Templates"
                        className="stat-icon"
                      />
                      <div className="display-4 text-dark">Words transcribed</div>
                    </div>
                    <div className="mg-top-5x-extra-small mg-left-small">
                      Mauris diam arcu platea sagittis.
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-bad0d4da-b306-6776-a090-04b77252833d-7bed29e2"
                 
                 
                >
                  <div className="display-10 stat-gradient-03">
                    <span data-count="1200" className="count-up-number-animation"
                      >1,200</span
                    >+
                  </div>
                  <div className="mg-top-3x-extra-small">
                    <div className="flex align-top center-mbl">
                      <img
                        src={img(clientsIconCloudwhisperWebflowTemplate)}
                        loading="eager"
                        width="16"
                        height="16"
                        alt="Clients Icon - CloudWhisper - Webflow Template | BRIX Templates"
                        className="stat-icon"
                      />
                      <div className="display-4 text-dark">Clients worldwide</div>
                    </div>
                    <div className="mg-top-5x-extra-small mg-left-small">
                      Mauris diam arcu platea sagittis.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
}
