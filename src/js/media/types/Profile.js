import { Media } from "../Media"
import Dom from "../../dom/Dom"
/*	VCO.Media.Profile

================================================== */

export default class Profile extends Media {
	
	//includes: [VCO.Events],
	
	/*	Load the media
	================================================== */
	_loadMedia() {
		// Loading Message
		this.message.updateMessage(VCO.Language.messages.loading + " " + this.options.media_name);
		
		this._el.content_item				= VCO.Dom.create("img", "vco-media-item vco-media-image vco-media-profile vco-media-shadow", this._el.content);
		this._el.content_item.src			= this.data.url;
		
		this.onLoaded();
	}
	
	_updateMediaDisplay(layout) {
		
		if(VCO.Browser.firefox) {
			this._el.content_item.style.maxWidth = (this.options.width/2) - 40 + "px";
		}
	}
	
}