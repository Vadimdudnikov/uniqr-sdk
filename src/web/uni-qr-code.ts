import { generateQR } from '../index.js';
import QR from 'qrcode-svg';

class UniQrCode extends HTMLElement {
  static observedAttributes = ['merchant', 'inst', 'amount'];
  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.render(); }

  render() {
    const tlv = generateQR({
      merchantId:  this.getAttribute('merchant') ?? 'M1',
      instruments: (this.getAttribute('inst') ?? 'CRUB').split(','),
      amount:      this.getAttribute('amount') ?? undefined
    });
    this.innerHTML = new QR({ content: tlv, padding: 0 }).svg();
  }
}
customElements.define('uni-qr-code', UniQrCode);
export {};

