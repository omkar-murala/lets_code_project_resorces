/* First make sure that you have installed the package */

  /* If you are using yarn */
  // yarn add @calcom/embed-react

  /* If you are using npm */
  // npm install @calcom/embed-react

  "use client"
  
  import { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function Mockinterviews() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({});
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <div data-cal-namespace=""
	  data-cal-link="lets-resource-hzokv0/mock-interviewss"
    
	  data-cal-config='{"layout":"month_view"}'
	  >Click me</div>;
  };
  