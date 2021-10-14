import {useEffect} from "react"
import {loader} from '../common/util/loader'
import { Helmet } from "react-helmet";

function LoadingIndicator(props) {

	useEffect(() => {
		loader()
	},[])

	return(
		<>
	        <Helmet>
	            <meta charSet="utf-8" />
	            <title>(props)</title>
	            <meta name="robots" content="noindex, follow" />
	            <meta
	                name="description"
	                content="Hope – Health &amp; Medical React JS Template"
	            />
	            <meta
	                name="viewport"
	                content="width=device-width, initial-scale=1, shrink-to-fit=no"
	            />
	        </Helmet>
		    <div id="preloader">
		        <div className="preload-content">
		            <div id="dream-load"></div>
		        </div>
		    </div>
	    </>
	)
}

export default LoadingIndicator;