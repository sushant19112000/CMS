import { Template_1 } from "@/app/components/landingpages/template_1"

const content=`
Network segmentation is a tried and true technique used by security practitioners to address an assortment of issues in IT infrastructure environments.
The main benefits of network segmentation include:
     <ul style="font-size:14px">
            <li>Optimized network availability by localizing the impact of faults.</li>
            <li>Improved security hygiene by preventing the lateral movement of threats.</li>
            <li>Constrained scope of compliance audits (HIPAA, PCI, etc.) to a limited network segment.</li>
            <li>Limited data exfiltration by controlling access to critical data and intellectual property.</li>
            <li>Reduced attack surface for legacy or vulnerable systems performing crucial business functions.</li>
       </ul>
`
function  LandingPage(){
    return(
      <>
      <div style={{backgroundColor:'#f8f9fA'}}>

     
      <Template_1 Title="Landing Page 1" TitleBackgroundColor="Orange" Content={content} FormDetails={['Name','Email','Phone','Job Title']}/>
      </div>
      </>
    )
  }

  
  export default LandingPage