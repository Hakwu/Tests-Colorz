import { useTranslation } from "next-i18next";
import React from "react";
import SecondSlider from "@components/view/home/SecondSlider";


export default function Apps() {
  // const { profile } = useProfile();
  const { t } = useTranslation('home');
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section style={{marginBottom: 90, overflow:'hidden'}}className="">
      <div style={{maxWidth: 1251, margin:'auto'}}>
        <div className="row">
          <div className="section-heading text-center">
            <h2 className="heading-title">{t('apps.title')}</h2>
          </div>

        </div>
        <div className="partCarou">
          <div style={{overflow:'hidden', marginLeft:20, marginRight:20,width: 397, display:'flex', flexDirection:'column', border:'1px solid #F3F3F3', borderRadius: 5}}>
            <div style={{textAlign:'center'}}>
              <img style={{height:315, width:315, margin:45}} src="/images/Product_2.jpg"></img>
              <div style={{width: 97+'%', margin:'auto', fontSize:22, fontWeight:500}}>The funny filter kit (D’jeuns friendly)</div>
              <div style={{marginTop:15, fontSize:16, paddingBottom: 35, fontWeight:400}}>199,00 €</div>
            </div>
          </div>
          <div style={{overflow:'hidden', width: 397, display:'flex', flexDirection:'column', border:'1px solid #F3F3F3', borderRadius: 5}}>
          <div style={{textAlign:'center'}}>
              <img style={{height:315, width:315, margin:45}} src="/images/Product_1.jpg"></img>
              <div style={{fontSize:22, fontWeight:500}}>Screen camera off</div>
              <div style={{marginTop:15,fontSize:16, paddingBottom: 35, fontWeight:400}}>229,00 €</div>
            </div>
          </div>
          <div style={{overflow:'hidden',marginRight:20, marginLeft:20, width: 397, display:'flex', flexDirection:'column', border:'1px solid #F3F3F3', borderRadius: 5}}>
          <div style={{textAlign:'center'}}>
              <img style={{height:315, width:315, margin:45}} src="/images/Product_3.jpg"></img>
              <div style={{fontSize:22, fontWeight:500}}>The Charentaiz (Yeuv Friendly)</div>
              <div style={{marginTop:15, fontSize:16, paddingBottom: 35, fontWeight:400}}>349,95 €</div>
            </div>
          </div>
        </div>




        <SecondSlider/>

      </div>

    </section>
  );
}
