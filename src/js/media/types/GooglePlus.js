import { Media } from "../Media"
import Dom from "../../dom/Dom"
/*	VCO.Media.GooglePlus
================================================== */

export default class GooglePlus extends Media {
	
	//includes: [VCO.Events],
	
	/*	Load the media
	================================================== */
	_loadMedia() {
		var api_url,
			self = this;
		
		// Loading Message
		this.message.updateMessage(VCO.Language.messages.loading + " " + this.options.media_name);
		
		// Create Dom element
		this._el.content_item	= VCO.Dom.create("div", "vco-media-item vco-media-googleplus", this._el.content);
		
		// Get Media ID
		this.media_id = this.data.url;
		
		// API URL
		api_url = this.media_id;
		
		// API Call
		this._el.content_item.innerHTML = "<iframe frameborder='0' width='100%' height='100%' src='" + api_url + "'></iframe>"		
		
		// After Loaded
		this.onLoaded();
	}
	
	// Update Media Display
	_updateMediaDisplay() {
		this._el.content_item.style.height = this.options.height + "px";
	}
}