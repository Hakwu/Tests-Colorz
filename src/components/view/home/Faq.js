import React from 'react';
import { useTranslation } from "next-i18next";

function Faq(props) {
  const { t } = useTranslation('home');

  return (
    <section className="faq-part pt-100">
      <div className="container">
        <div className="row">
          <div className="col-md-12 wow fadeInUp">
            <div className="section-heading text-center pb-65">
              <label className="sub-heading">{t('faqs.label')}</label>
              <h2 className="heading-title">{t('faqs.title')}</h2>
              <p className="heading-des">{t('faqs.description')}</p>
            </div>
          </div>
        </div>
        {/*<div className="row">
          <div className="col-md-12 wow fadeInUp">
            <ul className="nav nav-tab Frequently-tabs pb-55">
              <li>
                <a className="tab-link active" href="#" data-tab="tab-1">General</a>
              </li>
              <li>
                <a className="tab-link" href="#" data-tab="tab-1">Legals</a>
              </li>
            </ul>
          </div>
        </div>*/}
        <div className="row">
          <div className="col-md-12 wow fadeInUp">
            <div className="tab-content">
              <div className="tab-panel active" id="tab-1">
                <div className="row">
                  <div className="col-md-6 pb-65">
                    <div className="faq-tab">
                      <div className="qus-title">What is Ico Crypto?</div>
                      <p className="qus-des pt-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged.</p>
                    </div>
                  </div>
                  <div className="col-md-6 pb-65">
                    <div className="faq-tab">
                      <div className="qus-title">What cryptocurrencies can I use to purchase? </div>
                      <p className="qus-des pt-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged.</p>
                    </div>
                  </div>
                  <div className="col-md-6 pb-65">
                    <div className="faq-tab">
                      <div className="qus-title">How can I participate in the ICO Token sale?</div>
                      <p className="qus-des pt-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged.</p>
                    </div>
                  </div>
                  <div className="col-md-6 pb-65">
                    <div className="faq-tab">
                      <div className="qus-title">How do I benefit from the ICO Token?</div>
                      <p className="qus-des pt-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged.</p>
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

export default Faq;
