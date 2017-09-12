import { Component, Prop, Element, EventEmitter, Event } from '@stencil/core';
import { BarcodeReader } from 'barcode-reader';

@Component({
  tag: 'ean-scanner',
  styleUrl: 'ean-scanner.scss'
})
export class EanScanner {
	@Prop() title: string;

	@Prop() helpText: string = 'Point your camera at a EAN Code';

	@Element() rootElement: HTMLElement;

	@Event() scanCompleted: EventEmitter;

	iOS: boolean;
	video: HTMLVideoElement;
	barElement;
	overlayElement;
	helpElement;

	componentDidLoad() {
		// console.log(BarcodeReader);
		this.iOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0;
		this.video = this.rootElement.querySelector('video');
		this.barElement = this.rootElement.querySelector('.barcode-scanner__bar');
		this.helpElement = this.rootElement.querySelector('.barcode-scanner__help');
		this.overlayElement = this.rootElement.querySelector('.barcode-scanner__overlay');

		// console.log(this.video);
		BarcodeReader.Init();
		BarcodeReader.DecodeSingleBarcode();
		BarcodeReader.SetDecodeFormats(['EAN-13']);

		this.initStream();

		setTimeout(() => {
			this.setCameraOverlay();
			if (!this.iOS) {
				this.scan();
			}
		}, 1000);
	}

	componentDidUnload() {
		BarcodeReader.StopStreamDecode();
		this.video.srcObject = null;
	}

  setCameraOverlay() {
    this.overlayElement.style.borderStyle = 'solid';
    this.helpElement.style.display = 'block';
  }

	initStream() {
		let self = this;

		if (!this.iOS) {

			navigator.mediaDevices.enumerateDevices()
				.then(function (devices) {
					var device = devices.filter(function(device) {
						if (device.kind == "videoinput") {
							return device;
						}
					});

					if (device.length > 1) {
						var constraints = {
							video: {
								mandatory: {
									sourceId: device[1].deviceId ? device[1].deviceId : null
								}
							},
							audio: false
						};

						self.capture(constraints);
					}
					else if (device.length) {
						var constraints = {
							video: {
								mandatory: {
									sourceId: device[0].deviceId ? device[0].deviceId : null
								}
							},
							audio: false
						};

						self.capture(constraints);
					}
					else {
						self.capture({video:true});
					}
				})
				.catch(function (error) {
					//showErrorMsg();
					console.error("Error occurred : ", error);
				});
		}
	}

	capture(constraints) {
		let self = this;

		navigator.mediaDevices.getUserMedia(constraints)
		.then(function (stream) {
			self.video.srcObject = stream;
			self.video.play();
		})
		.catch(function(err) {
			console.log("Error occurred ", err);
			//showErrorMsg();
		});
	}

  scan() {
		if (!this.iOS) this.barElement.style['display'] = 'block';

		let self = this;

		BarcodeReader.StreamCallback = function(result) {

			var data = {
				format: '',
				value: ''
			};

			if(result.length > 0){
				data.value = result[0].Value;
				data.format = result[0].Format;
			}

			self.scanCompleted.emit(data);

			BarcodeReader.StopStreamDecode();
		}

		BarcodeReader.DecodeStream(this.video);
  }

	render() {
		return (
			<div class="barcode-scanner">
				<video class="barcode-scanner__video"></video>
				<div class="barcode-scanner__overlay">
					<div class="barcode-scanner__bar"></div>
					<div class="barcode-scanner__help">{this.helpText}</div>
				</div>
			</div>
		);
	}

}
